import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import ProjectsCard from "../cards/ProjectsCard";
import FilterBtn from "../cards/Projects/FilterBtn";
import ToggleFilterBtn from "../cards/Projects/ToggleFilterBtn";
import { Loader } from "../Loader";
import { useCards } from "../store/projects";
import { useUrl } from "../store/Urls";

const POSTS_PER_PAGE = 6;

function getCardSize(i) {
    const caseNum = ((i - 1) % 6) + 1;
    switch (caseNum) {
        case 1: return "s";
        case 2: return "l";
        case 3: return "m";
        case 4: return "ss";
        case 5: return "xxl";
        default: return "xl";
    }
}

const Projects = () => {
    const { API_PROJECTS, API_PRIORITY_PROJECTS } = useUrl(state => ({
        API_PROJECTS: state.API_PROJECTS,
        API_PRIORITY_PROJECTS: state.API_PRIORITY_PROJECTS,
    }));

    const {
        filters,
        filter,
        setFilter,
        projectsAll,
        addProjects,
        pagesLoaded,
        markPageLoaded,
        priorityLoaded,
        setPriorityLoaded,
        hasMore,
        setHasMore,
    } = useCards();

    const [loading, setLoading] = useState(false);
    const isShow = window.innerWidth > 1024;

    /* ---------------- fetch helper ---------------- */
    const fetchData = async (url) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        return data.map(p => p.acf);
    };

    /* ---------------- load priority projects once ---------------- */
    useEffect(() => {
        if (priorityLoaded || projectsAll.length > 0) return;

        setLoading(true);
        fetchData(API_PRIORITY_PROJECTS)
            .then(data => {

                addProjects(data.sort((a, b) => a.id - b.id), true); // приоритетные в начало
                setPriorityLoaded(true);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    /* ---------------- load next page ---------------- */
    const fetchNextPage = async () => {
        if (loading || !hasMore) return;

        let nextPage = pagesLoaded.size + 1;
        if (pagesLoaded.has(nextPage)) return;

        setLoading(true);
        try {
            const data = await fetchData(`${API_PROJECTS}${nextPage}`);
            if (!data || data.length === 0) {
                setHasMore(false);
            } else {
                addProjects(data);
                markPageLoaded(nextPage);
            }
        } catch (err) {
            console.error(err);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

    /* ---------------- fetch until enough projects for filter ---------------- */
    const fetchUntilEnough = async (minCount = 4) => {
        if (!hasMore) return;

        let filtered = projectsAll.filter(p => p.filter?.includes(filter));
        let nextPage = pagesLoaded.size + 1;

        while (filtered.length < minCount && hasMore) {
            if (pagesLoaded.has(nextPage)) {
                nextPage++;
                continue;
            }

            setLoading(true);
            try {
                const data = await fetchData(`${API_PROJECTS}${nextPage}`);
                if (!data || data.length === 0) {
                    setHasMore(false);
                    break;
                }
                addProjects(data);
                markPageLoaded(nextPage);
                filtered = projectsAll.filter(p => p.filter?.includes(filter));
                nextPage++;
            } catch (err) {
                console.error(err);
                setHasMore(false);
                break;
            } finally {
                setLoading(false);
            }
        }
    };

    /* ---------------- infinite scroll ---------------- */
    useEffect(() => {
        let debounce = null;
        const handleScroll = () => {
            if (debounce) return;
            debounce = setTimeout(() => {
                debounce = null;
                const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
                if (bottom) fetchNextPage();
            }, 150);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [projectsAll, loading, hasMore]);

    /* ---------------- handle filter ---------------- */
    useEffect(() => {
        if (filter === "all") return;
        const filtered = projectsAll.filter(p => p.filter?.includes(filter));
        if (filtered.length < 4 && hasMore) {
            fetchUntilEnough(4);
        }
    }, [filter, projectsAll]);

    const filteredProjects = useMemo(() => {
        return filter === "all"
            ? projectsAll
            : projectsAll.filter(p => p.filter?.includes(filter));
    }, [projectsAll, filter]);

    /* ---------------- UI ---------------- */
    const filterButtonsDesktop = useMemo(() =>
            filters.map((f, i) => (
                <FilterBtn key={i} item={f.name} filter={filter} setFilter={setFilter} />
            )),
        [filter]
    );

    const cards = useMemo(() =>
            filteredProjects.map((project, i) => (
                <ProjectsCard key={`${project.id || project.path}-${i}`} props={project} size={getCardSize(i)} />
            )),
        [filteredProjects]
    );

    const skeletons = useMemo(() =>
            [...Array(POSTS_PER_PAGE)].map((_, i) => (
                <div key={i} className="project-card skeleton" />
            )),
        []
    );
console.log(projectsAll)
    return (
        <main className="main projects">
            <Helmet>
                <title>Our projects - The Kroot</title>
                <meta content="Our projects" property="og:title"/>
                <meta content="Our projects" property="twitter:title"/>
                <meta name="description" content="Project list The Kroot company"/>
                <meta
                    name="description"
                    content="Explore the diverse range of projects by The Kroot, a company specializing in Unreal Engine, Animation, VFX, and more. Discover our latest work in TV shows, music videos, and commercials."
                />
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, Projects, The Kroot, TV shows, Commercials, Music videos"
                />
                <meta property="og:description"
                      content="Explore the diverse range of projects by The Kroot, including work for TV shows, music videos, and commercials."/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/projects/"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <section className="container-80 relative p_top">
                <h1 className="h1">Projects</h1>
                {isShow ? (
                    <div className="filter__grid mt-16">{filterButtonsDesktop}</div>
                ) : (
                    <ToggleFilterBtn filter={filter} setFilter={setFilter} />
                )}
            </section>

            <section className="container-80">
                <div className="projects__grid mt-32">
                    {cards}
                    {loading && skeletons}
                </div>
                {loading && <Loader />}
            </section>
        </main>
    );
};

export default Projects;

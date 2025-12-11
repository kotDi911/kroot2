import {useCards} from "../store/projects";
import {useEffect, useMemo, useState} from "react";
import ProjectsCard from "../cards/ProjectsCard";
import FilterBtn from "../cards/Projects/FilterBtn";
import {Loader} from "../Loader";
import ToggleFilterBtn from "../cards/Projects/ToggleFilterBtn";
import {Helmet} from "react-helmet-async";
import {useUrl} from "../store/Urls";

function getCardSize(i) {
    let caseNum = ((i - 1) % 6) + 1;
    switch (caseNum) {
        case 1:
            return "s";
        case 2:
            return "l";
        case 3:
            return "m";
        case 4:
            return "ss";
        case 5:
            return "xxl";
        default:
            return "xl";
    }
}

let arrayForHoldingPosts = [];
let filteredProjects = [];

const Projects = () => {
    const savedProjects = localStorage.getItem("backBtnData");
    const {URL, URL_PRIORITY} =
        useUrl((store) => ({
            URL: store.API_PROJECTS, URL_PRIORITY: store.API_PRIORITY_PROJECTS
        }));
    const filters = useCards((store) => store.filters);
    const sortFunction = useCards((store) => store.sortFunction);
    const setProjectsData = useCards((store) => store.setProjectsData);

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([])
    const [firstLoad, setFirstLoad] = useState(!savedProjects);
    const [postsToShow, setPostsToShow] = useState([]);

    const postsPerPage = window.innerWidth <= 660 ? 9 : window.innerWidth <= 991 ? 8 : 9;
    const [currentPage, setCurrentPage] = useState(1)
    const [scrollPage, setScrollPage] = useState(1)
    const [next, setNext] = useState(postsPerPage);

    const [isLoading, setIsLoading] = useState(false);
    const [isShow] = useState(window.innerWidth > 767);
    const [error, setError] = useState(false)


    const filterButtonsDesktop = useMemo(() => {
        return (
            filters.map((item, i) =>
                <FilterBtn
                    key={i}
                    item={item.name}
                    filter={filter}
                    setFilter={setFilter}
                />
            )
        )
    }, [filter])

    const card = useMemo(() => {
        return (
            postsToShow.map((item, i) => {
                const size = getCardSize(i);
                return <ProjectsCard key={i} props={item} size={size}/>;
            })
        )
    }, [postsToShow])

    // FETCH DATA
    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            if (res.status === 500) throw new Response("Error: ", {status: "500", statusText: "No more projects"});
            if (!res.ok) throw new Response("Error: ", {status: "404", statusText: "Failed to fetch data"});
            const data = await res.json();
            const dataProjects = data.map((item) => item.acf);

            if (dataProjects.length === 0) throw new Response("Error: ", {
                status: "404",
                statusText: "No projects found"
            });
            return dataProjects;
        } catch (err) {
            throw new Response(err.statusText, {status: err.status, statusText: err.statusText})
        }
    }

    // FIRST LOADING
    useEffect(() => {
        setIsLoading(true);
        if (firstLoad) {
            fetchData(URL_PRIORITY)
                .then(res => {
                    setProjects(res.sort(sortFunction))
                })
                .catch(err => console.error("Error: ", err.statusText, err.status))
                .finally(() => {
                        setFirstLoad(false)
                        setIsLoading(false)
                    }
                )
        } else {
            if (projects.length <= 9) {
                fetchData(URL + currentPage)
                    .then(res => {
                        setProjects([...projects, ...res])
                        setCurrentPage(prevState => prevState + 1)
                    })
                    .catch(err => {
                        console.error("Error", err.statusText, err.status)
                        setError(err)
                    })
                    .finally(() => setIsLoading(false))
            }
        }
    }, [projects.length])

    useEffect(() => {
        const loopWithSlice = (start, end) => {
            const slicedPosts = filteredProjects.slice(start, end);
            arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
            setPostsToShow(arrayForHoldingPosts);
            setProjectsData(arrayForHoldingPosts);
            localStorage.setItem("projects", JSON.stringify(arrayForHoldingPosts))
        };

        const handleFilter = async (filter) => {
            arrayForHoldingPosts = [];
            filteredProjects = projects.filter(project =>
                    project.filter.includes(filter) || filter === "all"
                // project.filter === filter || filter === "all"
            );
            loopWithSlice(0, window.innerHeight > 1200 ? 9 + next : next)

            if (postsToShow.length < 9 && !error && filter !== "all") {
                try {
                    setIsLoading(true)
                    const filtered = await fetchData(URL + currentPage);
                    setProjects([...projects, ...filtered])
                    setCurrentPage(currentPage + 1)
                    setScrollPage(scrollPage + 1)
                    setIsLoading(false);
                } catch (err) {
                    throw new Response("Error: ", {status: err.status, statusText: err.statusText})
                }
            }
        }
        handleFilter(filter).catch(err => {
            console.error("Error: ", err.status, err.statusText);
            setError(err);
            setIsLoading(false);
        })
    }, [filter, projects.length, next, postsToShow.length])

    useEffect(() => {
        setScrollPage(1)
        setNext(postsPerPage)
    }, [filter])

    useEffect(() => {
        const handleScroll = async (e) => {
            const documentHeight = e.target.documentElement.scrollHeight;
            const documentScrollTop = e.target.documentElement.scrollTop;

            if (documentHeight - (documentScrollTop + window.innerHeight) <= 1 && projects.length >= 9) {
                if (!isLoading && scrollPage === currentPage && !error) {
                    setIsLoading(true)
                    try {
                        await fetchData(URL + currentPage)
                            .then(res => {
                                setProjects([...projects, ...res])
                                setCurrentPage(currentPage + 1)
                                setScrollPage(scrollPage + 1)
                                setNext(next + postsPerPage)
                            })
                            .catch(err => {
                                console.error("Error: ", err.status, err.statusText)
                                setError(err)
                            })
                            .finally(() => setIsLoading(false))
                    } catch (err) {
                        console.error(err)
                    } finally {
                        setIsLoading(false)
                    }
                }
                if (scrollPage !== currentPage) {
                    setNext(next + postsPerPage)
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [projects.length, next, error]);

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
                {
                    isShow ?
                        <div className="filter__grid mt-16">
                            {filterButtonsDesktop}
                        </div>
                        :
                        <ToggleFilterBtn filter={filter} setFilter={setFilter}/>
                }
            </section>
            <section className="container-80">
                <div className="projects__grid mt-32">{card}</div>
                {isLoading ? <Loader/> : <></>}
            </section>
        </main>
    )
}
export default Projects
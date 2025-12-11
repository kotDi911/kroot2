import Gallery from "../cards/Details/Gallery";
import Title from "../cards/Details/Title";
import Images from "../cards/Details/Images";
import Options from "../cards/Details/Options";
import {Helmet} from "react-helmet-async";
import {useLoaderData} from "react-router";
import {useUrl} from "../store/Urls";
import {useMemo} from "react";
import VideoCardDetails from "../cards/VideoCardDetails";

const Details = () => {
    const projectsUrl = useUrl((store) => store.projectsUrl)
    const project = useLoaderData();

    const {
        project_name,
        description,
        main_imgs,
        gallery_imgs,
        buttons_url,
        options,
        path,
    } = project;
    const folderUrl = projectsUrl + path
    const getBtnVideo = useMemo(() => {
        return buttons_url
            ? Object.entries(buttons_url).map(([name, {url, video, btn_text}]) => ({
                name,
                url,
                path,
                video,
                btnText: btn_text,
            }))
            : [
                {
                    name: "breakdown",
                    url: "",
                    path: "",
                    video: "",
                    btnText: "VFX Breakdown",
                },
                {
                    name: "Official video",
                    url: "",
                    path: "",
                    video: "",
                    btnText: "Official video",
                },
            ];
    }, [buttons_url, folderUrl]);

    const getMainImages = useMemo(() => {
        return Array.from({length: main_imgs}, (_, i) => {
            const img = `${folderUrl}/images/main${i + 1}.jpg`;
            const poster = `${folderUrl}/images/main${i + 1}poster.jpg`;
            const alt = `${project_name} image${i + 1}`;
            return {img, poster, alt};
        });
    }, [main_imgs, folderUrl, project_name]);

    const getDataArr = useMemo(() => {
        return Object.entries(options).map(([title, desc]) => ({title, desc}));
    }, [options]);

    return (
        <main className="main details">
            <Helmet>
                <title>Project {project_name}</title>
                <meta content={`Project ${project_name}`} property="og:title"/>
                <meta content={`Project ${project_name}`} property="twitter:title"/>
                <meta name="description" content={`Project ${project_name}`}/>
            </Helmet>
            <section className="container-80 p_top">
                <Title title={project_name}/>
                <p className="regular gray mt-16">{description}</p>
                <Images getImages={getMainImages} name={project_name}/>
                <Gallery images={gallery_imgs} path={folderUrl}/>
                <Options data={getDataArr}/>
            </section>
            <section className="container-80">
                <div className="flex gap-16 mt-112 p-25r">
                    {getBtnVideo.map((card, i) => <VideoCardDetails key={i} props={card}/>)}
                </div>
            </section>
        </main>
    )
}
export default Details
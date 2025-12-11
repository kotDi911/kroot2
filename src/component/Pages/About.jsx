import {Helmet} from "react-helmet-async";
import MainImgCard from "../cards/About/MainImgCard";
import Skills from "../cards/About/Skills";
import {useAbout} from "../store/about";
import Nominations from "../cards/About/Nominations";
import OurServices from "../cards/About/OurServices";
import VideoSource from "../cards/VideoSource";
import VideoCard from "../cards/VideoCard";

const map = process.env.PUBLIC_URL + "/assets/images/vector-world-map.png";
const URL = "https://thekroot.com/assets/g_kroot/video";
const URL2 = "https://thekroot.com/assets/video";
const availableWidths = [1080];
const About = () => {
    const cards = useAbout((store) => store.cards)

    return (
        <main className="main services">
            <Helmet>
                <title>About - The Kroot</title>
                <meta content="About The Kroot company" property="og:title"/>
                <meta content="About The Kroot company" property="twitter:title"/>
                <meta name="description" content="About The Kroot company"/>
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, TV shows, Music videos, Commercials, Character Animation, Traditional Animation
                    Visual Effects, 3D Animation, Motion Graphics, The Kroot, Creative Services"
                />
                <meta property="og:description" content="About The Kroot company"/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/about/"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <MainImgCard/>
            <section className="container-64 flex col mb-32 relative">
                <div className="absolute flex col nom space-b">
                    <Nominations/>
                    <Skills/>
                </div>
                <VideoSource path={URL} name="g-kroot" className="home-video" width={availableWidths}/>
            </section>
            <section className="container-64 relative">
                <OurServices/>
                <VideoSource path={URL2} name="roto" className="home-video" width={availableWidths}/>
            </section>
            <section className="container-64 p-25r mt-32">
                <h2 className="h2 text-center">
                    Locations
                </h2>
                <img className="img mb-52 mt-32" src={map} alt=""/>
            </section>
            {/*<section className="container-64">*/}
            {/*    <AboutTeam/>*/}
            {/*</section>*/}
            <section className="container-64">
                <div className="flex gap-16 mt-112 w-100 p-25r">
                    {cards.map((card, i) =>
                       <VideoCard key={i} props={card}/>
                    )}
                </div>
            </section>
        </main>
    )
}
export default About
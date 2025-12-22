import PreviewSection from "../cards/Generation/PreviewSection";
import KrootSection from "../cards/Generation/KrootSection";
import MasterclassSection from "../cards/Generation/MasterclassSection";
import WorkshopSection from "../cards/Generation/WorkshopSection";
// import SupervisorsSection from "../cards/Generation/SupervisorsSection";
import {Helmet} from "react-helmet";

const Generation = () => {
    return (
        <main className="main generation p-25r">
            <Helmet>
                <title>Generation Kroot</title>
                <meta content="Generation Kroot" property="og:title"/>
                <meta content="Generation Kroot" property="twitter:title"/>
                <meta name="description" content="Generation Kroot"/>
                <meta property="og:description" content="Generation Kroot" />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/generation_kroot/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <PreviewSection/>
            <KrootSection/>
            <MasterclassSection/>
            <WorkshopSection/>
            {/*<SupervisorsSection/>*/}
        </main>
    )
}
export default Generation
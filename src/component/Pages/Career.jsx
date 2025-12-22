import {Outlet} from "react-router";
import CareerNav from "../cards/Career/CareerNav";
import LongButton from "../LongButton";
import AppsCard from "../cards/Career/AppsCard";
import {Helmet} from "react-helmet";
import {useEffect} from "react";

const Career = () => {
    useEffect(()=>{

    })
    return (
        <main className="main career">
            <Helmet>
                <title>Career - The Kroot</title>
                <meta name="description" content="Career opportunities at The Kroot" />
                <meta
                    name="keywords"
                    content="VFX, Animation, Visual Effects, 3D Animation, Motion Graphics, The Kroot, Career at The Kroot"
                />
                <meta property="og:description" content="Career opportunities at The Kroot"/>
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/career/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="container-64 p_top">
                <h1 className="h1">Career</h1>
                <CareerNav/>
                <Outlet/>
                <AppsCard/>
            </section>
        </main>
    )
}
export default Career
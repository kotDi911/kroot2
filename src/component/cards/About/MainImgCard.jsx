const mtv = process.env.PUBLIC_URL + "/assets/images/mtv.jpg";

const MainImgCard = () => {
    return(
        <section className="container-64 p_top">
            <h1 className="h1">
                About us
                {/*<span className="gray">us</span>*/}
            </h1>
            <div className="about__main-img relative mb-32">
                <div className="about__text-cont flex col white space-b">
                    <h3 className="h3 white">MTV Award Winning</h3>
                    <p className="regular text-center">
                        The Kroot is Visual Effects and Animation studios. We based in Los Angeles
                        An important aspect of our job - is to show creativity, using the latest technology and
                        radical ideas that the world hasn’t seen before. Our motto is “You are Rad!“
                    </p>
                    <h3 className="h3 text-end white">Best Visual Effect</h3>
                </div>
                <img className="about__img img" src={mtv} style={{borderRadius: "25px"}} alt="Mtv Award wining"/>
            </div>
        </section>
    )
}
export default MainImgCard
import Social from "../Social";
import GetInTouchForm from "../Form";
import {useCallback, useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";

const done = process.env.PUBLIC_URL + "/assets/icon/done.svg"
const notDone = process.env.PUBLIC_URL + "/assets/icon/notDone.svg"
const descForm = "We are ready to help you bring your project to life. \n" +
    "                    Fill out the form below, and our manager will get in touch\n" +
    "                    with you to discuss all the details and offer optimal solutions. \n" +
    "                    We are confident that together we can achieve excellent results!"

const GetInTouch = () => {
    const [isActive, setIsActive] = useState(false)
    const [message, setMessage] = useState("")
    const [doneImg, setDoneImg] = useState(done)

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => {
                setIsActive(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isActive]);

    const sentMail = useCallback((status, msg) => {
        setIsActive(true);
        setMessage(msg);
        setDoneImg(status === "success" ? done : notDone);
    }, []);

    return (
        <main className="main get-in-touch">
            <Helmet>
                <title>Get in touch</title>
                <meta content="Get in touch" property="og:title"/>
                <meta content="Get in touch" property="twitter:title"/>
                <meta name="description" content="Get in touch with The Kroot company"/>
                <meta property="og:description" content="Get in touch with The Kroot company" />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.thekroot.com/get_in_touch/" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section className="container-48 relative">
                <h1 className="h1 mb-52">Get in <span className="gray">touch</span></h1>
                <p className="regular text-center gray">{descForm}</p>
                <div className="form__cont">
                    <div className="form__social flex">
                        <Social props="light"/>
                    </div>
                    <GetInTouchForm sentMail={sentMail}/>
                </div>
            </section>
            <div className={`popup__message ${isActive ? "active" : ""}`}>
                <img className="mr-16" src={doneImg} alt="ok" width="24px" height="24px"/>
                <p className="popup__text fs-20">{message}</p>
            </div>
        </main>
    )
}
export default GetInTouch
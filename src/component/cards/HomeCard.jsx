import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import VideoSource from "./VideoSource";
const availableWidths = [480, 720, 1080];

const HomeCard = ({props}) => {
    const {id, name, btnText, path, url, img, title, end, description} = props;
    const [text, setText] = useState(btnText);
    const errText = "this project does not have " + btnText + " or is in the making"
    useEffect(() => {
        if (!url) {
            setText(errText)
        }
    }, [name, url]);

    return (
        <Link to={url === "" ? "/error" : url}
              target={url === "projects" || url === "about" ? "" : "_blank"}
              className={`${url === "" ? "disabled-link" : ""} home__card-${id} home-video-cont  block`}
        >
            {!title ?
                <VideoSource path={path} name={name} className={`home-video`} text={text} width={availableWidths}/>
                :
                <div className="home-video relative">
                    <img src={img} alt="name" className="home-img"/>
                    <div className="home__card-title flex col absolute space-b ">
                        <h3 className="h3 white">
                            {title}
                        </h3>
                        <p className="white regular text-center">
                            {description}
                        </p>
                        <span className="fs-56 white text-end">{end}</span>
                    </div>
                </div>
            }
        </Link>
    )
}
export default HomeCard
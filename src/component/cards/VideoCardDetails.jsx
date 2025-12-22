import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import VideoSource from "./VideoSource";

const VideoCardDetails = ({props}) => {
    const {name, btnText, path, url, video} = props;
    const [text, setText] = useState(btnText);
    const errText = "this project does not have " + btnText + " or is in the making"
    useEffect(() => {
        if (!url) {
            setText(errText)
        }
    }, [name, url]);
    console.log(props)
    return (
        <Link to={url === "" ? "/error" : url}
            target="_blank"
            // className={`${url === "" ? "disabled-link" : ""} video__card flex end relative hover__card`}
              className={`${url === "" ? "disabled-link" : ""} video__card flex end relative hover__card block`}
              style={{gridArea: name ? name : ""}}
        >
            <VideoSource path={video} name={name} className="about-video" width={[720]}/>
            {/*<div className="absolute w-100">*/}
            <span className="fs-20 white video__card-text">{text.toUpperCase()}</span>
            {/*</div>*/}
        </Link>
    )
}
export default VideoCardDetails
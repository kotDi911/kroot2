import {Link} from "react-router-dom";
import Button from "../Button";
import {useEffect, useState} from "react";
import VideoSource from "./VideoSource";

const VideoCard = ({props}) => {
    const {name, btnText, path, url} = props;
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
              // target="_blank"
              // className={`${url === "" ? "disabled-link" : ""} video__card flex end relative hover__card`}
              className={`${url === "" ? "disabled-link" : ""} video__card flex end relative hover__card block`}
              style={{gridArea: name ? name : ""}}
        >
            <VideoSource path={path} name={name} className="about-video" width={[480,720,1080]}/>
            {/*<div className="absolute w-100">*/}
                <span className="fs-20 white video__card-text">{btnText.toUpperCase()}</span>
            {/*</div>*/}
        </Link>
    )
}
export default VideoCard
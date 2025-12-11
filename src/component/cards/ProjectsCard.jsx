import {Link} from "react-router-dom";
import Button from "../Button";
import {useUrl} from "../store/Urls";
import VideoSource from "./VideoSource";

const ProjectsCard = ({props, size, color}) => {
    const projectsUrl = useUrl((store) => store.projectsUrl)
    const {
        path,
        project_name,
        description,
        main_imgs,
        gallery_imgs,
        options,
        buttons_url,
    } = props;


    const URL = projectsUrl + path + "/video";
    console.log(URL)
    const folderUrl = projectsUrl + path
    const video = `${folderUrl}/video/preview.mp4`;
    const poster = `${folderUrl}/video/poster.jpg`;
    const name = project_name.replace(/[^a-zA-Z0-9&']+/g, '_').toLowerCase()

    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (
        <Link to={`/projects/${name}`}
              className={`card-${size} projects__card flex end relative hover__card`}
              state={
                  {
                      folderUrl,
                      project_name,
                      description,
                      main_imgs,
                      gallery_imgs,
                      buttons_url,
                      options,
                  }
              }
              aria-label={`Go to project ${project_name}`}
              onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty("--color", randomColor());
              }}
        >
            <div className="video-cont">
                <video
                    className="video"
                    poster={poster}
                    src={video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="none"
                />
            </div>
            {/*<VideoSource path={projectsUrl + path + "/video"} name={"preview"} className="video-cont" width={[480,720,1080]}/>*/}
            <div className="absolute w-100">
                <span className="fs-20 white projects__text">{project_name.toUpperCase()}</span>
                {/*<div className="flex end space-b projects__btn">*/}
                {/*    <div className="flex center projects__text hide-text">*/}
                {/*        <span className="fs-20 white">{project_name.toUpperCase()}</span>*/}
                {/*    </div>*/}
                {/*    <Button color={true}/>*/}
                {/*</div>*/}
            </div>
        </Link>
    )
}
export default ProjectsCard
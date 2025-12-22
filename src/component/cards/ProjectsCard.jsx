import {Link} from "react-router-dom";
import {useUrl} from "../store/Urls";
import VideoSource from "./VideoSource";

const ProjectsCard = ({props, size}) => {
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

    const folderUrl = projectsUrl + path
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
            <VideoSource path={projectsUrl + path + "/video"} name={"preview"} className="video-cont" width={[320, 480, 720]}/>
            <div className="absolute w-100">
                <span className="fs-20 white projects__text">{project_name.toUpperCase()}</span>
            </div>
        </Link>
    )
}
export default ProjectsCard
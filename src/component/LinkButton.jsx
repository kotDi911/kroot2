import {ReactComponent as Arrow} from "../svg/arrow.svg";
import {Link} from "react-router-dom";

const LinkButton = ({link}) => {
    return(
        <Link to={link} target="_blank" className="link-btn btn">
            <Arrow className="arrow-long btn-img"/>
            <span className="btn-bg"/>
        </Link>
    )
}
export default LinkButton
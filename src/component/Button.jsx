import {ReactComponent as Arrow} from "../svg/arrow.svg";

const Button = ({color}) => {
    return (
        <div className={`btn ${color ? "bg" : ""}`}>
            <Arrow className="arrow-long btn-img"/>
            <span className={`btn-bg ${color && "white-bg"}`}/>
        </div>
    )
}
export default Button
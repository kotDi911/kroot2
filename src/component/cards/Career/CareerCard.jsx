import Button from "../../Button";
import {Link} from "react-router-dom";

const CareerCard = ({title, description, err}) => {
    return (
        !err ?
            <Link className="career__card hover__card flex end base mt-16" to="/">
                <div className="flex col w-100">
                    <p className="fs-14 orange">{title}</p>
                    <p className="regular gray mt-16" style={{cursor: "pointer"}}>{description}</p>
                </div>
                <Button color={false}/>
            </Link>
            :
            <div className="career__card hover__card flex mt-16 base">
                <p className="fs-14 gray" style={{margin: "4% auto"}}>{err}</p>
            </div>
    )
}
export default CareerCard
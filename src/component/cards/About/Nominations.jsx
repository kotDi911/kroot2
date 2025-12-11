import {useAbout} from "../../store/about";
import CardOptions from "../CardOptions";

const Nominations = () => {
    const nominations = useAbout((store) => store.nominations)
    return(
        <div className="flex col">
            <h3 className="h3 text-start ml-8r">
                Our Awards
            </h3>
            <div className="about__card mb-32">
                <CardOptions props={nominations} className="col"/>
            </div>
        </div>
    )
}
export default Nominations
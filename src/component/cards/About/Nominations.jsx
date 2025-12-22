import {useAbout} from "../../store/about";
import NominationOptions from "../About/NominationOptions";

const Nominations = () => {
    const nominations = useAbout((store) => store.nominations)
    return(
        <div className="flex col mb-32">
            <h3 className="h3 text-center">
                Our Awards
            </h3>
            <div className="about__card mb-32">
                <NominationOptions props={nominations} className="col"/>
            </div>
        </div>
    )
}
export default Nominations
import {useAbout} from "../../store/about";
import CardOptions from "../CardOptions";
import NumbersCard from "./NumbersCard";

const Skills = () => {
    const numbers = useAbout((store) => store.numbers)
    const options = useAbout((store) => store.options)
    return(
        <>
            {/*<div className="about__card flex col">*/}
            {/*    <h3 className="h3 text-end mr-8r">What we do</h3>*/}
            {/*    <CardOptions props={options} pl="pl-16"/>*/}
            {/*</div>*/}
            <div className="about__card flex col mt-32 mb-32">
                <h3 className="h3 text-center mb-32">
                    Skills
                </h3>
                <div className="about__grid-small flex">
                    {numbers.map((item, i) => <NumbersCard key={i} {...item}/>)}
                </div>
            </div>
        </>
    )
}
export default Skills
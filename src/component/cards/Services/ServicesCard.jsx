import ServicesOptions from "./ServicesOptions";
import {useEffect, useState} from "react";

const ServicesCard = ({props, count}) => {
    const {ico, title, desc, options} = props;
    const [pos, setPos] = useState("text-start")

    useEffect(() =>{
        if(count % 2 === 0) {
            setPos("text-start")
        }else {
            setPos("text-end end")
        }
    },[])
    return (
        <div className={`services__card flex col mt-16 ${pos}`}>
            <div className="services-row flex col">
                <h3 className="h3">{title}</h3>
            </div>
            <p className="regular white mt-16 mb-8">
                {desc}
            </p>
            {/*<div className="services__grid">*/}
            <div className={`flex col ${pos}`}>
                {options.map(item => <ServicesOptions key={item.id} props={item} />)}
            </div>
        </div>
    )
}
export default ServicesCard
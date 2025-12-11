import ServicesCard from "../Services/ServicesCard";
import {useServiceCard} from "../../store/services";

const OurServices = () => {
    const services = useServiceCard((store) => store.services)
    return(
        <div className="absolute nom">
            <h3 className="h3 text-center">
                Services
            </h3>
            <div className="services__grid mb-32">
                {services.map((item, i) => <ServicesCard key={i} props={item} count={i}/>)}
            </div>
        </div>
    )
}
export default OurServices
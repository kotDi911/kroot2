import BaseOptionsCard from "./BaseOptionsCard";
import {useGeneration} from "../../store/generation";

const WorkshopSection = () => {
    const workshopCards = useGeneration((store) => store.workshopCards);
  return(
      <section className="container-80">
          <h2 className="h2 gray mt-52 mb-32"><span className="orange">G.</span> Workshops</h2>
          <div className="generation__grid-cards">
              {workshopCards.map((item, i) => <BaseOptionsCard key={i} props={item}/>)}
          </div>
      </section>
  )
}
export default WorkshopSection
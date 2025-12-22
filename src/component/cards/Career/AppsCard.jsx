import {useCareer} from "../../store/career";

const AppsCard = () => {
    const apps = useCareer((store) => store.apps);
    return (
        <section className="apps__cont flex col p-25r">
            <div className="apps flex space-b mt-16">
                {
                    apps.map((app, i) => (
                        <div key={i} className="apps__img">
                            <img src={app.img} alt={app.name} className="img"/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default AppsCard
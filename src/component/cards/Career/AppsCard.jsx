import {useCareer} from "../../store/career";

const AppsCard = () => {
    const apps = useCareer((store) => store.apps);
    return (
        <div className="apps__cont flex col">
            {/*<h3 className="h3 text-center mb-8">Preferred Apps</h3>*/}
            <div className="flex space-b mt-16">
                {
                    apps.map((app, i) => (
                        <div key={i} className="apps__img">
                            <img src={app.img} alt={app.name} className="img"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AppsCard
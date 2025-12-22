// import LinkButton from "../../LinkButton";

const BaseOptionsCard = ({props}) => {
    const {symbol, title, options} = props;
    return (
        <div className={`${!symbol && "work__card"} flex col`}>
            <h3 className="h3 black w-100">{title}</h3>
            <div className="options flex col j-end">
                {options.map((item, i) =>
                    <div key={i} className="flex end space-b mt-16">
                        <div className="flex base">
                            <div className="round bg-black"></div>
                            <p className={`regular w-100 black`}>
                                {item.title && <span className="white">{item.title}</span>}
                                {item.name && item.name}
                            </p>
                        </div>
                        {/*{item.url && <LinkButton link={item.url}/>}*/}
                    </div>
                )}
            </div>
        </div>
    )
}
export default BaseOptionsCard
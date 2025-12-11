import LinkButton from "../LinkButton";

const CardOptions = ({props, className, pl}) => {
    return (
        <div className={`options flex ${className} j-end`}>
            {props.map((item, i) =>
                <div key={i} className="flex end space-b mt-16">
                    <div className={`flex base ${pl}`}>
                        <div className="round"></div>
                        <p className={`regular w-100 gray`}>
                            {item.title && <span className="white">{item.title} </span>}
                            {item.name && item.name}
                        </p>
                    </div>
                    {item.url && <LinkButton link={item.url}/>}
                </div>
            )}
        </div>
    )
}
export default CardOptions
const NominationOptions = ({props, className}) => {
    // const {year, img, title, nominated, project, status} = props;
    console.log(props)
    return (
        <div className={`options flex ${className} j-end mt-16`}>
            {props.map((item, i) =>
                <div key={i} className="flex end space-b mt-16 w-100 nomination-card">
                    <div className="flex center gap-16 w-100 text-center">
                        <span className="options-span white fs-20">{item.year}</span>
                        <img src={item.img} alt={item.alt} className="img nominate-logo"/>
                        <span className="options-span white fs-20">{item.title}</span>
                        <span className="options-span white fs-20">{item.nominated}</span>
                        <span className="options-span white fs-20">{item.project}</span>
                        <span className="options-span white fs-20">{item.status}</span>
                    </div>
                </div>
            )}
        </div>
    )
}
export default NominationOptions
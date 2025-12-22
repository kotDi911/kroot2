const Accordion = ({title, obj}) => {
    return (
        <section className="career__card-text">
            <h3 className="gray">{title}</h3>
            <ul className="vacancy-ul">
                {Object.values(obj).filter(Boolean)
                    .map((value, i) => (
                        <li key={i} className="fs-14 vacancy-li gray mt-8">
                            {value}
                        </li>
                    ))}
            </ul>
        </section>
    )
}
export default Accordion
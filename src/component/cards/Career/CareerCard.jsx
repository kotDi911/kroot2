import {useRef, useState} from "react";
import Accordion from "./Accordion";

const CareerCard = ({title, mustknow, responsibilities, err}) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    if (err) {
        return (
            <article className="career__card hover__card flex mt-16 base">
                <p className="fs-14 gray" style={{margin: "4% auto"}}>
                    {err}
                </p>
            </article>
        );
    }

    return (
        <article className="career__card flex col w-100 mt-16">
            <h2
                className={`orange accordion-trigger ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                role="button"
                aria-expanded={open}
                tabIndex={0}
            >
                {title}
                <span className="accordion-arrow"/>
            </h2>

            <div
                ref={contentRef}
                className={`accordion ${open ? "open" : ""}`}
                style={{
                    maxHeight: open
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0px",
                }}
            >
                <div className="accordion-inner">
                    {responsibilities.li && <Accordion title="Responsibilities" obj={responsibilities}/>}
                    {mustknow.li && <Accordion title="Must Know / Be Able To" obj={mustknow}/>}
                </div>
            </div>
        </article>
    )
}
export default CareerCard
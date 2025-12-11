import {Link} from "react-router-dom";

const ContactInfo = ({props})=>{
    const {img, img2, url, text}= props;
    const tel = (img, img2) => {
        return (
            <div className="contact2 flex center w-100">
                <div className="social__cont">
                    <span className="btn-bg"></span>
                    <img className="social__img" src={img} alt="icon"/>
                </div>
                <img className="img__tel" src={img2} alt="phone"/>
            </div>
        )
    }
    const email = (img, url, text) => {
        return (
            <Link className="contact flex center w-100" to={url}>
                <div className="social__cont">
                    <span className="btn-bg"></span>
                    <img className="social__img" src={img} alt="icon"/>
                </div>
                <p className="regular white">{text}</p>
            </Link>
        )
    }
    return(
        <>
            {img2 ? tel(img, img2) : email(img, url, text)}
        </>
    )
}
const TextCard = ({props, areaName}) => {
    return (
        props.map((item, i) =>
            <div key={i} className="contacts__text flex col space-b" style={{gridArea: areaName}}>
                <h3 className="h3 mb-8">{item.text}</h3>
                <hr/>
                <div className="flex col mb-16">
                    {item.options.map((option, i) => <p key={i} className="regular gray mt-16">{option.text}</p>)}
                </div>
                <div className="flex mt-16 contacts__cont">
                    {item.contacts ? item.contacts.map((contact, i) => (
                     <ContactInfo key={i} props={contact}/>
                    )) : <></>}
                </div>
            </div>
        )
    )
}
export default TextCard
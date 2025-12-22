import {Link} from "react-router-dom";
import LongButton from "../../LongButton";
import {useGeneration} from "../../store/generation";
import TextP from "../TextP";

const imdb = "https://www.imdb.com/name/nm6282617/?ref_=nv_sr_srsg_0";
const mtv = process.env.PUBLIC_URL +"/assets/images/mtv.jpg";

const KrootSection = () => {
    const linksCards = useGeneration((store) => store.linksCards);
    const krootText = useGeneration((store) => store.krootText);
    return (
        <section className="container-80">
            <h2 className="h2 gray mt-52 mb-32">
                <span className="orange">G.</span>
                Kroot
            </h2>
            {krootText.map((item, i) => <TextP key={i} text={item.text}/>)}
            <div className="generation__grid-links m-52">
                {linksCards.map((link) => (
                    <Link
                        key={link.id}
                        to={link.url}
                        className="generation__link flex col text-center gray">
                        <img src={link.img} alt="icon" className="generation__img mb-16"/>
                        {link.name}
                    </Link>
                ))}
            </div>
            <img src={mtv} alt="Mtv Award" className="img mb-32 g__img"/>
            <LongButton text="IMDB - link" url={imdb}/>
        </section>
    )
}
export default KrootSection
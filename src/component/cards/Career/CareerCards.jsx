import {useParams} from "react-router";
import CareerCard from "./CareerCard";
import {useCareer} from "../../store/career";
import {useEffect, useState} from "react";
import {Loader} from "../../Loader";

const CareerCards = () => {
    const {name} = useParams();
    const fetchVacancy = useCareer((store) => store.fetchVacancy);
    const vacancy = useCareer((store) => store.vacancy);
    const us = useCareer((store) => store.us);
    const ua = useCareer((store) => store.ua);
    const eu = useCareer((store) => store.eu);
    const error = useCareer((store) => store.error);
    const setError = useCareer((store) => store.setError);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    const ulFind = (arr) => {
        if (!arr.length) {
            setError(true)
        } else {
            setError(false)
        }
    }
    useEffect(() => {
        if (vacancy.length === 0) {
            setLoading(true);
            fetchVacancy().finally(() => setLoading(false));
        }
    }, [vacancy, fetchVacancy]);

    useEffect(() => {
        switch (name) {
            case "us":
                ulFind(us);
                setCards(us);
                break;
            case "ua":
                ulFind(ua);
                setCards(ua);
                break;
            case "eu":
                ulFind(eu);
                setCards(eu);
                break;
            default:
                setCards([]);
                break;
        }
    }, [name, us, ua, eu]);
    return (
        <section className="career__cards p-25r">
            {loading ?
                <Loader/>
                :
                error ?
                    <CareerCard err={error.msg}/>
                    :
                    cards.length > 0 && cards.map((card, i) => <CareerCard key={i} {...card} />)
            }
        </section>
    )
}
export default CareerCards
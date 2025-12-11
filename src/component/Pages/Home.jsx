import {useEffect, useMemo} from "react";
import {useHomeCard} from "../store/home";
import {Helmet} from "react-helmet-async";
import HomeCard from "../cards/HomeCard";

const Home = () => {
    const data = useHomeCard((store) => store.data)

    const cards = useMemo(() => {
        return (
            data.map((item) => <HomeCard key={item.id} props={item}/>)
        )
    }, [data])

// Определяем, когда карточка прилипает (top: 0)
//     useEffect(() => {
//         const cards = document.querySelectorAll(".home-video-cont");
//
//         const onScroll = () => {
//             cards.forEach((card, i) => {
//                 const next = cards[i + 1];
//                 if (!next) return;
//
//                 const rect = next.getBoundingClientRect();
//
//                 const max = window.innerHeight;
//                 const top = rect.top;
//
//                 // исходный прогресс 0 → 1
//                 let rawProgress = 1 - top / max;
//
//                 // начинаем затемнять только после 15% движения
//                 const threshold = 0.15;
//
//                 // смещённый прогресс
//                 let progress = (rawProgress - threshold) / (1 - threshold);
//
//                 // ограничиваем диапазон
//                 progress = Math.min(Math.max(progress, 0), 1);
//
//                 const opacity = progress // * 0.45 затемнение
//                 const blur = progress * 10;
//
//                 card.style.setProperty("--overlay-opacity", opacity);
//                 card.style.setProperty("--overlay-blur", `${blur}px`);
//             });
//         };
//
//         window.addEventListener("scroll", onScroll);
//         onScroll();
//
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

    return (
        <main className="home">
            <Helmet>
                <title>The Kroot - VFX and animation</title>
                <meta content="The Kroot" property="og:title"/>
                <meta content="The Kroot" property="twitter:title"/>
                <meta name="description"
                      content="The Kroot provides Unreal Engine, Character Animation, Traditional Animation,
          Beauty and other VFX services for tv show , music videos and commercial."
                />
                <meta
                    name="keywords"
                    content="Unreal Engine, VFX, Animation, TV shows, Music videos, Commercials, Character Animation, Traditional Animation"
                />
                <meta property="og:image" content="https://www.thekroot.com/logo512.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.thekroot.com/"/>
                <meta name="twitter:image" content="https://www.thekroot.com/logo512.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Helmet>
            <section className="home__flex">
                {cards}
            </section>
        </main>
    )
}
export default Home


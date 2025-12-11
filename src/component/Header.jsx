import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Social from "./Social";

const logo = process.env.PUBLIC_URL + "/assets/icon/Logo.svg";

const links = [
    {

    }
]
const Header = () => {
    const {pathname} = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pageName, setPageName] = useState("");
    const headName = () => {
        setIsMenuOpen(false);
    }
    useEffect(() => {
        // if (!pathname) return;

        // Берём первую часть пути
        const firstSegment = pathname.split("/")[1]; // ""projects" из "/projects/а1"

        if (firstSegment) {
            // Преобразуем в нормальный вид
            const formattedName = firstSegment
                .split("_")             // разделяем слова по _
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // делаем первую букву заглавной
                .join(" ");             // соединяем через пробел

            setPageName(formattedName);
        }
    }, [pathname]);

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo" onClick={()=> window.scroll(0,0)}>
                    <img className="logo-img" src={logo} alt="logo" />
                </Link>
                {/*<h1 className="h1">{pageName}</h1>*/}
                <button
                    className={`burger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="burger-span"></span>
                    <span className="burger-span"></span>
                    <span className="burger-span"></span>
                </button>
                <nav className={`menu ${isMenuOpen ? "open" : "close"}`}>
                    <Link className="menu__item" to="/about" onClick={() => headName()}>ABOUT</Link>
                    <Link className="menu__item" to="/projects" onClick={() => headName()}>PROJECTS</Link>
                    <Link className="menu__item" to="/career" onClick={() => headName()}>CAREER</Link>
                    <Link className="menu__item" to="/contacts" onClick={() => headName()}>CONTACTS</Link>
                    <Link className="menu__item" to="/get_in_touch" onClick={() => headName()}>Start your project</Link>
                    <div className="social flex mt-32 space-b">
                        <Social props="light"/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
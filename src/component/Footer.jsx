import {Link, useLocation} from "react-router-dom";
import Social from "./Social";
import {useEffect, useState} from "react";

const logo = process.env.PUBLIC_URL + "/assets/icon/LogoMini.svg"
const links = [
    {name: "home"},
    {name: "about"},
    {name: "projects"},
    {name: "career"},
    {name: "contacts"},
]

const Footer = () => {
    const {pathname} = useLocation();
    const reg = new RegExp('/projects*');
    const [isActive, setIsActive] = useState(reg.test(pathname))

    useEffect(() => {
        window.innerWidth > 991 ?
            setIsActive(reg.test(pathname))
            :
            setIsActive(false)
    }, [pathname])
    return (
        <footer className={`${isActive ? "/*active*/" : ""} footer flex col`}>
            <div className="flex center space-b">
                <Link className="logo-mini" to='/'>
                    <img className="logo-img" src={logo} alt="logo"/>
                </Link>
                <nav className="nav flex">
                    {links.map(link =>
                        <Link className="nav__link flex col center gray"
                              key={link.name} to={`/${link.name === "home" ? "" : link.name}`}>
                            <div className="small">
                                {link.name.toUpperCase()}
                            </div>
                            <div className="dot nav__dot"></div>
                        </Link>
                    )}
                </nav>
                <div className="social flex">
                    <Social props="light"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer
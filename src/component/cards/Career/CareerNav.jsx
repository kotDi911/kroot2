import {NavLink, useLocation} from "react-router-dom";
import {useEffect} from "react";

const links = [
    {
        name: "US",
        path: "/us",
    },
    {
        name: "UA",
        path: "/ua",
    },
    {
        name: "EU",
        path: "/eu",
    }
];

const desc = "Once you become a part of our team, you will discover" +
    " a new perspective on the world and begin to think differently." +
    " We teach not only creation but also self-improvement! " +
    "You are unique! Join our 'Generation Kroot' courses and start your path to success!"


const CareerNav = () => {
    // const {pathname} = useLocation();

    // useEffect(() => {
    //     const currentLink = links.find(link => pathname.includes(link.path));
    //     if (currentLink) {
    //         setDesc(currentLink.desc);
    //     }
    // }, [pathname]);

    return (
        <div className="nav__cont">
            <h3 className="h3 text-center gray">Location</h3>
            <nav className="nav flex space-a mt-16">
                {links.map((link, i) => (
                    <NavLink
                        to={`/career${link.path}`}
                        className={({isActive}) => isActive ? "nav__btn active" : "nav__btn"}
                        key={i}
                    >
                        {/*<span className="btn-bg"/>*/}
                        {link.name}
                    </NavLink>
                ))}
            </nav>
            <p className="nav__text regular gray mt-32">
                {desc}
            </p>
        </div>
    );
};

export default CareerNav;

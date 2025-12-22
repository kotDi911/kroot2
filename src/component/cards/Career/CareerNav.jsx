import {NavLink} from "react-router-dom";

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

const desc = "We work globally with distributed teams. " +
    "Each role below includes core knowledge, skills, and expectations required to work with us."

const CareerNav = () => {

    return (
        <section className="nav__cont p-25r">
            <h3 className="h3 text-center gray">Location</h3>
            <nav className="nav flex space-a mt-16">
                {links.map((link, i) => (
                    <NavLink
                        to={`/career${link.path}`}
                        className={({isActive}) => isActive ? "nav__btn active" : "nav__btn"}
                        key={i}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
            <p className="nav__text regular gray mt-32">
                {desc}
            </p>
        </section>
    );
};

export default CareerNav;

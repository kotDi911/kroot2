import {useLocation} from "react-router-dom";
import Footer from "../Footer";
import {useEffect, useMemo} from "react";
import Header from "../Header";

const RouterApp = ({props}) => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    const header = useMemo(() => {
        return (<Header path={pathname}/>)
    }, [pathname])
    const footer = useMemo(() => {
        return (<Footer/>)
    }, [])

    return (
        <>
            {header}
            {props}
            {pathname !== "/" && footer}
        </>
    );
}

export default RouterApp;
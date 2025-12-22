import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterApp from "./component/router/RouterApp";
// import {createHashRouter as Router, Navigate, RouterProvider} from "react-router-dom";
import {createBrowserRouter as Router, Navigate, RouterProvider} from "react-router-dom";
import Home from "./component/Pages/Home";
import ErrorPage from "./component/Pages/ErrorPage";
import Projects from "./component/Pages/Projects";
import Details from "./component/Pages/Details";
import Contacts from "./component/Pages/Contacts";
import Career from "./component/Pages/Career";
import CareerCards from "./component/cards/Career/CareerCards";
import Generation from "./component/Pages/Generation";
import GetInTouch from "./component/Pages/GetInTouch";
import {HelmetProvider} from "react-helmet-async";
import {loaderDetails} from "./component/loaders/LoaderDetails";
import About from "./component/Pages/About";

const router = Router([
    {
        path: "/",
        element: <RouterApp props={<Home/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/about",
        element: <RouterApp props={<About/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/projects",
        children: [
            {
                path: "",
                element: <RouterApp props={<Projects/>}/>,
            },
            {
                path: ":name",
                loader: loaderDetails,
                element: <RouterApp props={<Details/>}/>,
                errorElement: <RouterApp props={<ErrorPage/>}/>,
            },
        ],
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/contacts",
        element: <RouterApp props={<Contacts/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/career",
        element: <RouterApp props={<Career/>}/>,
        children: [
            {
                index: true,
                element: <Navigate to="us" replace />,
            },
            {
                path: ":name",
                element: <CareerCards/>,
            },
        ],
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/generation_kroot",
        element: <RouterApp props={<Generation/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/get_in_touch",
        element: <RouterApp props={<GetInTouch/>}/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "/error",
        element: <RouterApp props={<ErrorPage/>}/>,
    },
    {
        path: "*",
        element: <Navigate to='/error' replace/>,
        errorElement: <RouterApp props={<ErrorPage/>}/>,
    }
],
    // {
    //     basename: "/kroot2",
    // }
    );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <RouterProvider router={router}/>
        </HelmetProvider>
    </React.StrictMode>
);
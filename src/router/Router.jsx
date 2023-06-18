import React from 'react';

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Images from "../pages/Images";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Notes from "../pages/Notes";
import Blog from "../pages/Blog";
import Chat from "../pages/Chat";
import Palette from "../pages/Palette";
import Navigation from "../pages/Navigation";
import Gallery from "../pages/Gallery";
import CustomTimeLine from "../pages/CustomTimeLine"
import Message from "../pages/Message";

const loadingComponent = (component) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {component}
        </React.Suspense>
    );
}

const routers = [
    {
        path: '/',
        element: loadingComponent(<About/>)
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/notes',
                element: loadingComponent(<Notes/>)
            },
            {
                path: '/blog/:id',
                element: loadingComponent(<Blog/>)
            },
            {
                path: '/categories',
                element: loadingComponent(<Categories/>)
            },
            {
                path: '/images',
                element: loadingComponent(<Images/>)
            },
            {
                path: '/timeline',
                element: loadingComponent(<CustomTimeLine/>)
            },
            {
                path: '/message',
                element: loadingComponent(<Message/>)
            },
            {
                path: "/navigation",
                element: loadingComponent(<Navigation/>)
            },
            {
                path: "/palette",
                element: loadingComponent(<Palette/>)
            },
            {
                path: "/gallery",
                element: loadingComponent(<Gallery/>)
            }
        ]
    },
    {
        path: '/about',
        element: loadingComponent(<About/>)
    },
    {
        path: "/chat",
        element: loadingComponent(<Chat/>)
    },
    {
        path: "/register",
        element: loadingComponent(<Register/>),
    },
    {
        path: "/login",
        element: loadingComponent(<Login/>),
    },
]

export default routers;

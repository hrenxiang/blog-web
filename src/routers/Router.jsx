import Home from "../pages/Home";
import Single from "../pages/Single";
import Write from "../pages/Write";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "./Layout";
import Images from "../pages/Images";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Tag from "../pages/Tag";

const routers = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/single/:id',
                element: <Single/>
            },
            {
                path: '/tag',
                element: <Tag/>
            },
            {
                path: '/write',
                element: <Write/>
            },
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/images',
                element: <Images/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]

export default routers;
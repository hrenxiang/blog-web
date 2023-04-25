import Home from "../pages/Home";
import Write from "../pages/Write";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Images from "../pages/Images";
import Categories from "../pages/Categories";
import About from "../pages/About";
import Notes from "../pages/Notes";
import Blog from "../pages/Blog";
import Collection from "../pages/Collection";
import Chat from "../pages/Collection/Chat";
import Palette from "../pages/Collection/Palette";

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
                path: '/notes',
                element: <Notes/>
            },
            {
                path: '/blog/:id',
                element: <Blog/>
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
        path: '/collection',
        element: <Collection/>,
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

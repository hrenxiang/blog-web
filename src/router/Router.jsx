import Home from "../pages/Home";
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
import Navigation from "../pages/Collection/Navigation";
import Gallery from "../pages/Collection/Gallery";
import CustomTimeLine from "../pages/CustomTimeLine"
import CustomValine from "../pages/CustomValine";

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
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/images',
                element: <Images/>
            },
            {
                path: '/timeline',
                element: <CustomTimeLine/>
            },
            {
                path: '/message',
                element: <CustomValine/>
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
        children: [
            {
                path: "navigation",
                element: <Navigation/>
            },
            {
                path: "chat",
                element: <Chat/>
            },
            {
                path: "palette",
                element: <Palette/>
            },
            {
                path: "gallery",
                element: <Gallery/>
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

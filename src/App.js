import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routers from "./router/Router";

import "./style.css";
import {useEffect} from "react";
import {checkDarkTheme} from "./api/Theme/theme";

const router = createBrowserRouter(routers);

function App() {

    useEffect(() => {
        checkDarkTheme();
    }, []);

    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router}/>
            </div>
        </div>
);
}

export default App;

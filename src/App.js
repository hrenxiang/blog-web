import {createBrowserRouter, RouterProvider} from "react-router-dom";
import routers from "./router/Router";

import "./style.scss";

const router = createBrowserRouter(routers);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router}/>
            </div>
        </div>
);
}

export default App;

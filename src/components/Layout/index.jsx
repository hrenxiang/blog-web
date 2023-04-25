import Navbar from "../Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import SuspensionFrame from "../SuspensionFrame";
import React from "react";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <SuspensionFrame/>
            <Footer/>
        </>
    );
}

export default Layout;

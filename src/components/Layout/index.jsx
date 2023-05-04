import Navbar from "../Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../Footer";
import React from "react";
import FooterQuick from "../FooterQuick";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            {/*<SuspensionFrame/>*/}
            <FooterQuick/>
            <Footer/>
        </>
    );
}

export default Layout;

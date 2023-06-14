import React from 'react';

import "./style.css"
import AboutNavBar from "./AboutNavBar";
import AboutHome from "./AboutHome";
import AboutMe from "./AboutMe";
import AboutSkills from "./AboutSkills";
import AboutService from "./AboutService";
import AboutQualification from "./AboutQualification";
import AboutFooter from "./AboutFooter";
import FooterQuick from "../../components/FooterQuick";
import AboutContact from "./AboutContact";

function About(props) {

    return (
        <>
            <div className="about">
                <AboutNavBar/>
                <AboutHome/>
                <div className="about_hr">
                </div>
                <AboutMe/>
                <div className="about_hr">
                </div>
                <AboutSkills/>
                <div className="about_hr">
                </div>
                <AboutService/>
                <div className="about_hr">
                </div>
                <AboutQualification/>
                <div className="about_hr">
                </div>
                <AboutContact/>
                <AboutFooter/>
                <FooterQuick/>
            </div>
        </>
    );
}

export default About;

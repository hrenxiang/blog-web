import React from 'react';
import "./style.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const AboutHome = () => {
    return (
        <>
            <section id="about_home" className="about_home_section">
                <div className="about_home_container">
                    <div className="about_home_content">
                        <Social/>

                        <div className="about_home_img_container">
                            <div className="about_home_img"></div>
                        </div>

                        <Data/>
                    </div>
                    <ScrollDown/>
                </div>
            </section>
        </>
    );
};

export default AboutHome;
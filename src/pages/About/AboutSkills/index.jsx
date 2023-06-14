import React from 'react';
import "./style.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const AboutSkills = () => {
    return (
        <>
            <section className="about_skills_section" id="about_skills">
                <h2 className="about_skills_section_title">技术相关</h2>
                <span className="about_skills_section_subtitle">我的技术等级</span>

                <div className="about_skills_container">
                    <Frontend/>

                    <Backend/>
                </div>
            </section>
        </>
    );
};

export default AboutSkills;
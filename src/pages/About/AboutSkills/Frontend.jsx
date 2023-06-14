import React from 'react';
import {BiBadgeCheck} from "react-icons/bi";

const Frontend = () => {
    return (
        <>
            <div className="about_skills_content">
                <h3 className="about_skills_title">前端开发技术</h3>

                <div className="about_skills_box">
                    <div className="about_skills_group">
                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">HTML</h3>
                                <span className="about_skills_level">Basic</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">CSS</h3>
                                <span className="about_skills_level">Advanced</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">JavaScript</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div className="about_skills_group">
                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Bootstrap</h3>
                                <span className="about_skills_level">Basic</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">VUE</h3>
                                <span className="about_skills_level">Basic</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">React</h3>
                                <span className="about_skills_level">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Frontend;
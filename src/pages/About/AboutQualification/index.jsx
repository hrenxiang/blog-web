import React, {useState} from 'react';
import "./style.css";
import {
    UilBriefcaseAlt, UilCalendarAlt,
    UilGraduationCap,
} from "@iconscout/react-unicons";

const AboutQualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className="about_qualification_section" id="about_qualification">
                <h2 className="about_qualification_section_title">学历履历</h2>
                <span className="about_qualification_section_subtitle">我的人生过程</span>

                <div className="about_qualification_container">
                    <div className="about_qualification_tabs">
                        <div
                            className={`about_qualification_button ${toggleState === 1 ? "about_qualification_button_active" : ""}`}
                            onClick={() => toggleTab(1)}>
                            <i className="about_qualification_icon"><UilGraduationCap size={24}/></i> 教育经历
                        </div>
                        <div
                            className={`about_qualification_button ${toggleState === 2 ? "about_qualification_button_active" : ""}`}
                            onClick={() => toggleTab(2)}>
                            <i className="about_qualification_icon"><UilBriefcaseAlt size={24}/></i> 工作经历
                        </div>
                    </div>

                    <div className="about_qualification_sections">
                        <div
                            className={`about_qualification_content ${toggleState === 1 ? "about_qualification_content_active" : ""}`}>
                            <div className="about_qualification_data">
                                <div>
                                    <h3 className="about_qualification_title">大学 本科</h3>
                                    <span className="about_qualification_subtitle">信阳农林学院</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2017 - 2021
                                    </div>
                                </div>

                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                            </div>

                            <div className="about_qualification_data">
                                <div></div>
                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="about_qualification_title">高级 中学</h3>
                                    <span className="about_qualification_subtitle">暂不透露</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2014 - 2017
                                    </div>
                                </div>

                            </div>

                            <div className="about_qualification_data">
                                <div>
                                    <h3 className="about_qualification_title">初级 中学</h3>
                                    <span className="about_qualification_subtitle">暂不透露</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2011 - 2014
                                    </div>
                                </div>

                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                            </div>

                            <div className="about_qualification_data">
                                <div></div>
                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="about_qualification_title">初级 小学</h3>
                                    <span className="about_qualification_subtitle">暂不透露</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2005 - 2011
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div
                            className={`about_qualification_content ${toggleState === 2 ? "about_qualification_content_active" : ""}`}>
                            <div className="about_qualification_data">
                                <div>
                                    <h3 className="about_qualification_title">Java 后端开发工程师</h3>
                                    <span className="about_qualification_subtitle">郑州美书信息科技有限公司</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2023 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                            </div>

                            <div className="about_qualification_data">
                                <div></div>
                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                                <div>
                                    <h3 className="about_qualification_title">Java 后端开发工程师</h3>
                                    <span className="about_qualification_subtitle">上海泛宥信息有限公司</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> 2021 - 2023
                                    </div>
                                </div>

                            </div>

                            <div className="about_qualification_data">
                                <div>
                                    <h3 className="about_qualification_title">实习经历</h3>
                                    <span className="about_qualification_subtitle">******</span>
                                    <div className="about_qualification_calender">
                                        <i><UilCalendarAlt size={16}/></i> **** - ****
                                    </div>
                                </div>

                                <div>
                                    <span className="about_qualification_rounder"></span>
                                    <span className="about_qualification_line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutQualification;
import React, {useState} from 'react';
import "./style.css";
import {UilArrow, UilArrowRight, UilCheckCircle, UilEdit, UilTimes, UilWebGrid} from "@iconscout/react-unicons";

const AboutService = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className="about_service_section" id="about_services">
                <h2 className="about_service_section_title">服务范围</h2>
                <span className="about_service_section_subtitle">我能提供什么</span>

                <div className="about_service_containers">
                    <div className="about_service_container">
                        <div className="about_service_content">
                            <div>
                                <UilWebGrid/>
                                <h3 className="about_service_title">前端开发 <br/></h3>
                            </div>
                        </div>

                        <span className="about_service_button" onClick={() => toggleTab(1)}>View More <UilArrowRight/></span>

                        <div className={`about_service_model ${toggleState === 1 ? "about_service_model_active" : ""}`}>
                            <div className="about_service_modal_content">
                                <i className="about_service_modal_content_close" onClick={() => toggleTab(0)}><UilTimes/></i>

                                <h3 className="about_service_model_title">前端开发</h3>
                                <p className="about_service_model_description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I develop the user interface.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">Web page development.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I create ux element interactions.</p>
                                    </li>
                                </ul>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">I position your company brand.</p>
                                </li>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">Design and mockups of products for companies.</p>
                                </li>

                            </div>
                        </div>
                    </div>

                    <div className="about_service_container">
                        <div className="about_service_content">
                            <div>
                                <UilArrow/>
                                <h3 className="about_service_title">后端开发 <br/></h3>
                            </div>
                        </div>

                        <span className="about_service_button" onClick={() => toggleTab(2)}>View More <UilArrowRight/></span>

                        <div className={`about_service_model ${toggleState === 2 ? "about_service_model_active" : ""}`}>
                            <div className="about_service_modal_content">
                                <i className="about_service_modal_content_close" onClick={() => toggleTab(0)}><UilTimes/></i>

                                <h3 className="about_service_model_title">后端开发</h3>
                                <p className="about_service_model_description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I develop the user interface.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">Web page development.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I create ux element interactions.</p>
                                    </li>
                                </ul>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">I position your company brand.</p>
                                </li>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">Design and mockups of products for companies.</p>
                                </li>

                            </div>
                        </div>
                    </div>

                    <div className="about_service_container">
                        <div className="about_service_content">
                            <div>
                                <UilEdit/>
                                <h3 className="about_service_title">数据库设计与优化<br/></h3>
                            </div>
                        </div>

                        <span className="about_service_button" onClick={() => toggleTab(3)}>View More <UilArrowRight/></span>

                        <div className={`about_service_model ${toggleState === 3 ? "about_service_model_active" : ""}`}>
                            <div className="about_service_modal_content">
                                <i className="about_service_modal_content_close" onClick={() => toggleTab(0)}><UilTimes/></i>

                                <h3 className="about_service_model_title">数据库设计优化</h3>
                                <p className="about_service_model_description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I develop the user interface.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">Web page development.</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">I create ux element interactions.</p>
                                    </li>
                                </ul>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">I position your company brand.</p>
                                </li>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">Design and mockups of products for companies.</p>
                                </li>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutService;
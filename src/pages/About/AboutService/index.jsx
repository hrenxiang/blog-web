import React, {useState} from 'react';
import "./style.css";
import {UilArrow, UilArrowRight, UilCheckCircle, UilEdit, UilTimes, UilWebGrid} from "@iconscout/react-unicons";
import {AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";

const AboutService = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className="about_service_section" id="about_services">
                <h2 className="about_service_section_title">相关项目</h2>
                <span className="about_service_section_subtitle">我做过什么</span>

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
                                <p className="about_service_model_description">拥有前端经验的后端开发工程师，致力于为客户和公司提供高质量的工作。</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">熟练掌握各种前端技术和工具。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">将设计师提供的设计转化为交互性强、易用的网页界面。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">能够开发响应式的网页应用程序，无论是静态还是动态网站。</p>
                                    </li>
                                </ul>


                                <li className="about_service_model_service">
                                    <UilCheckCircle/>

                                    <p className="about_service_model_info">通过合理的动画和交互设计，提升用户对网站或应用程序的使用体验。</p>
                                </li>

                                <div className="about_service_model_description">
                                    我自主开发了以下几个前端应用：
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">个人博客: blog-web</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">博客后台: blog-admin</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">ChatAi: chat-ai-web</p>
                                    </li>
                                    <Link to="https://github.com/hrenxiang"><button className="about_service_model_service_button">查看相关代码和界面</button></Link>
                                </div>

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
                                <p className="about_service_model_description">作为一名后端开发工程师，我具备丰富的经验和技能，致力于为客户和公司提供高效可靠的后端解决方案。 以下是我在后端开发领域的专长和提供的服务：</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">熟悉Java编程语言及相关框架，能够开发出稳定高效的服务器端应用程序。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">拥有丰富的数据库设计和管理经验，能够设计和优化数据库架构，确保数据的完整性和性能。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">擅长设计和开发灵活可扩展的API接口，以实现应用程序的数据交互和功能集成。</p>
                                    </li>
                                </ul>

                                <div className="about_service_model_description">
                                    我参与开发了以下几个后端应用：
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">Fomall POS: 线下零售收银平台</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">智能管家: 托迈酷客 - 亚特兰蒂斯入住权益发放平台</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">多语言中台: 托迈酷客国际 - 中台模块</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">美书写字: 智能AI识别练字平台</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">个人博客后台: blog-server</p>
                                    </li>
                                    <li className="about_service_model_service">
                                        <AiOutlineStar/>

                                        <p className="about_service_model_info">个人SpringBoot整合应用: huangrx-demo</p>
                                    </li>
                                    <Link to="https://github.com/hrenxiang"><button className="about_service_model_service_button">查看相关代码和界面</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about_service_container">
                        <div className="about_service_content">
                            <div>
                                <UilEdit/>
                                <h3 className="about_service_title">服务器方向<br/></h3>
                            </div>
                        </div>

                        <span className="about_service_button" onClick={() => toggleTab(3)}>View More <UilArrowRight/></span>

                        <div className={`about_service_model ${toggleState === 3 ? "about_service_model_active" : ""}`}>
                            <div className="about_service_modal_content">
                                <i className="about_service_modal_content_close" onClick={() => toggleTab(0)}><UilTimes/></i>

                                <h3 className="about_service_model_title">服务器方向</h3>
                                <p className="about_service_model_description">具备服务器及云平台部署和管理的经验，能够将应用程序部署到云服务商平台，如利用Coding将应用部署到腾讯云。</p>

                                <ul className="about_service_model_services">
                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">熟悉各种服务器环境和配置管理工具，能够有效地进行服务器部署和配置，确保项目的顺利运行。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">具备故障排除的技能，能够快速定位和解决服务器故障。</p>
                                    </li>

                                    <li className="about_service_model_service">
                                        <UilCheckCircle/>

                                        <p className="about_service_model_info">进行性能优化，提升服务器的效率和响应速度。</p>
                                    </li>
                                </ul>

                                <Link to="https://blog.huangrx.cn/blog/11?title=Linux%20Centos7%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%E9%83%A8%E7%BD%B2&category=Linux&subcategory=%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2&create_time=2023-06-05%2014:42:13&cover=https://images.huangrx.cn/uploads/2023/06/05/pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255377.jpg&document_url=https://huangrx.cn/document/Linux%20Centos7%20%E7%BC%96%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%8F%8A%E9%A1%B9%E7%9B%AE%E4%B8%8A%E7%BA%BF%E9%83%A8%E7%BD%B2.md"><button className="about_service_model_service_button">服务器相关文章</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutService;
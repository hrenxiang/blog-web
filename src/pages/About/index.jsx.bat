import React from 'react';

import "./style.css"
import {Progress} from "antd";
import profileAnimation from "../../assets/animation/profile-person.json";
import {useLottie} from "lottie-react";

function About(props) {

    const profileOptions = {
        loop: true,
        autoplay: true,
        animationData: profileAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const {View: profileLottie} = useLottie(profileOptions);

    return (
        <div className="about">
            <div className="about-container">
                <div className="about-container-header">
                    <div className="about-container-header-lottie">
                        {profileLottie}
                    </div>
                    <h1>自我介绍</h1>
                </div>
                <div className="about-content">
                    <section className="about-content-header">
                        <div className="about-ch-image"></div>

                        <div className="about-ch-profile">
                            <div className="about-chp-top">
                                <h2>Huang rx</h2>
                                <p>后端开发工程师 💻</p>
                            </div>

                            <div className="about-chp-bottom">
                                <h3>简介</h3>
                                <p>一名工作时长一年半的活泼开朗大男孩！🙆‍♂️</p>
                                <p>主要负责设计和实现应用程序的后端逻辑和数据处理。</p>
                                <p>对Java语言和相关的技术栈如Spring等有深入的了解，并且掌握SQL数据库和NoSQL数据库的概念和使用方法，对这些技术的原理也有一些了解。</p>
                                <p>掌握代码版本控制工具如Git，以及相关的部署工具和流程。</p>
                                <p>对前端HTML、CSS、Js、Vue、React等也有相应的了解</p>
                                <p>此外，也具备良好的团队合作能力和沟通能力，能够与前端开发人员、产品经理和测试人员紧密合作，确保项目的高质量和及时交付。</p>
                            </div>
                        </div>
                    </section>

                    <div className="about-content-body">
                        <section className="about-content-left">
                            <div className="about-cl-education">
                                <h3>教育经历</h3>
                                <p>2017 - 2021 🎓</p>
                                <p>信阳农林学院·网络工程专业</p>
                            </div>
                            <div className="about-cl-contact">
                                <h3>联系方式</h3>
                                <div className="about-clc-item">
                                    <p>手机 📞</p>
                                    <p>暂时不便透漏，还请邮箱或留言</p>
                                </div>
                                <div className="about-clc-item">
                                    <p>邮箱 📬</p>
                                    <p>huang.rx.word@hotmail.com</p>
                                </div>
                                <div className="about-clc-item">
                                    <p>地址 🏚️</p>
                                    <p>现居：中国·河南</p>
                                </div>
                            </div>
                        </section>

                        <section className="about-content-right">
                            <div className="about-cr-experience">
                                <h3>工作经历</h3>
                                <div className="about-cre-item">
                                    <div>
                                        <p>xxxx - 至今 ⏰</p>
                                        <p>公司名称</p>
                                    </div>
                                    <div>
                                        <p>后端开发工程师</p>
                                        <p>暂不透漏</p>
                                    </div>
                                </div>
                                <div className="about-cre-item">
                                    <div>
                                        <p>xxxx - 至今 ⏰</p>
                                        <p>公司名称</p>
                                    </div>
                                    <div>
                                        <p>后端开发工程师</p>
                                        <p>暂不透漏</p>
                                    </div>
                                </div>
                                <div className="about-cre-item">
                                    <div>
                                        <p>xxxx - 至今 ⏰</p>
                                        <p>公司名称</p>
                                    </div>
                                    <div>
                                        <p>后端开发工程师</p>
                                        <p>暂不透漏</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about-cr-skill">
                                <h3>掌握技术</h3>
                                <div className="about-crs-item">
                                    <p>Java</p>
                                    <div>
                                        <Progress trailColor="white" percent={80} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>Js</p>
                                    <div>
                                        <Progress trailColor="white" percent={30} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>Mysql</p>
                                    <div>
                                        <Progress trailColor="white" percent={90} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>Spring</p>
                                    <div>
                                        <Progress trailColor="white" percent={80} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>Vue</p>
                                    <div>
                                        <Progress trailColor="white" percent={60} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>React</p>
                                    <div>
                                        <Progress trailColor="white" percent={60} size="small" />
                                    </div>
                                </div>
                                <div className="about-crs-item">
                                    <p>中间件</p>
                                    <div>
                                        <Progress trailColor="white" percent={60} size="small" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

import React, {useState} from 'react';
import {AiFillGithub} from "react-icons/ai";
import {RiQqLine, RiWechatLine} from "react-icons/ri";
import {useLottie} from "lottie-react";
import {Modal} from "antd";

import "./style.css"
import snowAnimation from "../../assets/animation/snow-beard.json";
// import treeAnimation from "../../assets/animation/christmas-tree.json";
import {Link} from "react-router-dom";


const Footer = () => {

    const snowOptions = {
        loop: true,
        autoplay: true,
        animationData: snowAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    // const treeOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: treeAnimation,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
    // const {View: treeLottie} = useLottie(treeOptions);

    const {View: snowLottie} = useLottie(snowOptions);

    const [state, setState] = useState({
        isModalOpen: false,
        isWeChat: false
    });

    const showModal = (param) => {
        let flag = state.isWeChat;

        if ("wechat" === param) {
            flag = true;
        }

        setState({
            isModalOpen: true,
            isWeChat: flag
        });
    };

    const handleOk = () => {
        setState({
            isModalOpen: false
        })
    };

    const handleCancel = () => {
        setState({
            isModalOpen: false
        })
    };


    return (
        <div className="footer">
            {/*<div className="footer-waves">*/}
            {/*    <div>*/}
            {/*        <svg className="footer-waves-body" xmlns="http://www.w3.org/2000/svg"*/}
            {/*             viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">*/}
            {/*            <defs>*/}
            {/*                <path id="gentle-wave"*/}
            {/*                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>*/}
            {/*            </defs>*/}
            {/*            <g className="footer-waves-parallax">*/}
            {/*                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7"/>*/}
            {/*                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)"/>*/}
            {/*                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)"/>*/}
            {/*                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,0,0)"/>*/}
            {/*            </g>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="footer-container">

                <div className="footer-emoticon footer-emoticon-left">
                    {snowLottie}
                </div>

                <div className="footer-record">
                    <div className="footer-record-body">
                        <div>
                            <h3 className="footer-record-body-title">Huangrx</h3>
                        </div>
                        <div className="footer-record-body-link">
                            <Link to="https://github.com/hrenxiang" target="_blank">
                                <button><AiFillGithub/></button>
                            </Link>
                            <button onClick={() => {
                                showModal("qq")
                            }}>
                                <RiQqLine/>
                            </button>
                            <button onClick={() => {
                                showModal("wechat")
                            }}>
                                <RiWechatLine/>
                            </button>
                        </div>

                        <div>
                            <Link to="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
                                <p className="footer-record-text">&copy; 豫ICP备2022017977号</p>
                            </Link>
                        </div>

                        <Modal title="天选的缘分！"
                               open={state.isModalOpen}
                               onOk={handleOk}
                               onCancel={handleCancel}
                               okText="命中注定"
                               cancelText="下次一定"
                        >
                            <div>
                                {
                                    state.isWeChat ?
                                        <img
                                            src="https://images.huangrx.cn/uploads/2023/05/01/66e7f6b3ed5be545c39ef15a5edae42.jpg"
                                            style={{width: "100%"}} alt="qq"/>
                                        :
                                        <img
                                            src="https://images.huangrx.cn/uploads/2023/05/01/1682924167357.png"
                                            style={{width: "100%"}} alt="wechat"/>
                                }
                            </div>
                        </Modal>

                    </div>
                </div>

                <div className="footer-emoticon footer-emoticon-right">
                    {/*{treeLottie}*/}
                </div>
            </div>

        </div>
    );
};

export default Footer;

import React from 'react';

import "./style.css"
import {useLottie} from "lottie-react";
import chatAnimation from "../../assets/animation/liuyanban-chat.json"
import Waline from "../../components/Waline";

const Message = () => {

    // 定义动画相关属性
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: chatAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const {View: lottie} = useLottie(defaultOptions);

    return (
        <div className="message">
            <div className="message-container">
                <header>
                    <div className="message-animation">{lottie}</div>
                    <h2>留 言 板</h2>
                </header>
                <div className="message-waline-body">
                    <Waline/>
                </div>
            </div>
        </div>
    );
};

export default Message;

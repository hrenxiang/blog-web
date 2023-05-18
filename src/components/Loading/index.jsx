import React from 'react';
import "./style.css";
import animation from "../../assets/animation/loading-gif-animation.json";
import {useLottie} from "lottie-react";

const Loading = () => {

    // 定义动画相关属性
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { View: lottie } = useLottie(defaultOptions);

    return (
        <div className="loading">
            <div className="loading-container">
                {lottie}
            </div>
        </div>
    );
};

export default Loading;
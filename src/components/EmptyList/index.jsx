import React from 'react';
import { useLottie } from "lottie-react"
import darkModeAnimation from "../../assets/animation/blog-not-found-dark.json"
import lightModeAnimation from "../../assets/animation/blog-not-found-light.json"

import './styles.css';

const EmptyList = () => {

    // 检测是否处于深色模式
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 根据检测结果选择不同的动画
    const animation = prefersDarkMode ? lightModeAnimation : darkModeAnimation;

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
        <div className='emptyList-wrap'>
            {lottie}
        </div>
    );

};

export default EmptyList;

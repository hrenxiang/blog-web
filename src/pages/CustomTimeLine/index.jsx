import React from 'react';

import "./style.css"
import timeAnimation from "../../assets/animation/time.json";
import {useLottie} from "lottie-react";

const CustomTimeLine = () => {

    // 定义动画相关属性
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: timeAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const { View: lottie } = useLottie(defaultOptions);

    const data = {
        "2023": [
            {
                "timeline_info": '2023-05-03 00:56:00',
                "timeline_title": '前端后端基本完工',
                "timeline_content": '今天对于我来说,是一个里程的结束.' +
                    '也算是谋划已久吧,这些年用git,github的pages,以及自己的服务器都部署过hexo静态博客,' +
                    '但总是感觉不满足,我总想自己动手去实现(可能我脑子有炮吧哈哈),不过最终来说,今天我算是实现了我自己博客的绝大的一部分.' +
                    '目前还剩下数据的补充和前后端的联调了,其实这部分内容目前来说并不多(因为需要的地方比极少),也就笔记、笔记分类、时间线、收藏中的导航及色卡数据的上传与获取.这个对本来就是后端的我来说,我认为并没有难度.所以,很开心,🎇!'
            }
        ]
    }

    // period
    return (
        <div className="custom-timeline">
            <div className="custom-timeline-container">
                <div className="custom-timeline-column">
                    <div className="custom-timeline-title">
                        <div className="custom-timeline-title-header">
                            <span className="custom-timeline-time-lottie">{lottie}</span>
                            <h2>时光机器</h2>
                        </div>
                        <p>“别把时间浪费在为别人活着上面，做自己喜欢的事情，就算不成功，也不会遗憾。” —— 卢梭</p>
                    </div>
                    <div>
                        <ul className="custom-timeline-body custom-timeline-split">
                            {
                                Object.entries(data).map(([year, value]) => (
                                    <div key={year}>
                                        <li className="custom-timeline-item period">
                                            <div className="period-timeline-info"></div>
                                            <div className="period-timeline-marker"></div>
                                            <div className="period-timeline-content">
                                                <h2 className="period-timeline-title">{year}</h2>
                                            </div>
                                        </li>
                                        {
                                            value.map((event, index) => (
                                                <li className="custom-timeline-item" key={event.timeline_info}>

                                                    <div className="timeline-item-glass">
                                                        <div className="custom-timeline-info">{event.timeline_info}</div>
                                                        <div className="custom-timeline-marker">
                                                        </div>
                                                        <div className="custom-timeline-content">
                                                            <h2 className="timeline-title">{event.timeline_title}</h2>
                                                            <p>{event.timeline_content}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTimeLine;
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
                "timeline_info": '2023-04-25 13:00:00',
                "timeline_title": '风和日丽的下午',
                "timeline_content": '你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！'
            },
            {
                "timeline_info": '2023-04-26 12:00:00',
                "timeline_title": '风和日丽的下午',
                "timeline_content": '你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！'
            }
        ],
        "2022": [
            {
                "timeline_info": '2022-04-29 12:00:00',
                "timeline_title": '风和日丽的下午',
                "timeline_content": '你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！'
            }
        ],
        "2021": [
            {
                "timeline_info": '2021-04-29 13:00:00',
                "timeline_title": '风和日丽的下午',
                "timeline_content": '你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！帅啊！！！你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！你真的很棒，我可真的是太喜欢你了，你能不能夸我一句你真帅啊！！！'
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
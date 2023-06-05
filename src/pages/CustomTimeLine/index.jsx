import React, {useEffect, useState} from 'react';

import "./style.css"
import timeAnimation from "../../assets/animation/time.json";
import {useLottie} from "lottie-react";
import {acquireTimeline} from "../../api/timeline/timeline";
import DOMPurify from 'dompurify';

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

    const [data, setData] = useState([]);

    useEffect(() => {
        acquireTimeline().then((res) => {
            setData(res.data)
        })
    }, [])

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
                                            value.map((event) => (
                                                <li className="custom-timeline-item" key={event.id}>

                                                    <div className="timeline-item-glass">
                                                        <div className="custom-timeline-info">{event.title}</div>
                                                        <div className="custom-timeline-marker">
                                                        </div>
                                                        <div className="custom-timeline-content">
                                                            <p className="timeline-title">{event.create_time}</p>
                                                            {/*<p>{event.content}</p>*/}
                                                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.content) }}/>
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
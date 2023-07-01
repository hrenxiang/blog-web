import React, {useEffect, useState} from 'react';

import "./style.css"
import timeAnimation from "../../assets/animation/time.json";
import {useLottie} from "lottie-react";
import {acquireTimeline} from "../../api/timeline/timeline";
import {Pagination} from "antd";
import LazyingImage from "../../components/LazyingImage";

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

    const [state, setState] = useState({
        data: [],
        pageNum: 1,
        pageSize: 6
    })

    useEffect(() => {
        acquireTimeline(state.pageNum, state.pageSize).then((res) => {
            if (res.data) {
                setState((prevState) => ({
                    data: res.data,
                    pageNum: prevState.pageNum,
                    pageSize: prevState.pageSize
                }))
            }
        })
    }, [state.pageNum, state.pageSize])

    function handlePageChange(currentPage, pageSize) {
        // 将页码发送给后端
        setState((prevState) => ({
            data: prevState.data,
            pageNum: currentPage,
            pageSize: pageSize
        }))
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
                    </div>
                    <div>
                        <ul className="custom-timeline-body custom-timeline-split">
                            {
                                state.data.records && state.data.records.length > 0 && Object.entries(state.data.records[0])?.map(([year, value]) => (
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
                                                            <p>{event.content}</p>
                                                            <div className="custom-timeline-item-illustration">
                                                                <LazyingImage src={event.illustration}/>
                                                            </div>
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

            <div className="timeline-pagination">
                <Pagination
                    onChange={handlePageChange}
                    total={state.data && state.data.total ? state.data.total : 0}
                    pageSize={6}
                    showSizeChanger={false}
                    showQuickJumper={false}
                    showLessItems
                />
            </div>
        </div>
    );
};

export default CustomTimeLine;
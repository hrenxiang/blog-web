import React from 'react';
import {BiAward, BiBriefcaseAlt, BiSupport} from "react-icons/bi";

const Info = () => {
    return (
        <>
            <div className="about_me_info">
                <div className="about_me_info_box">
                    <div>
                        <BiAward/>
                    </div>
                    <h3 className="about_me_info_title">工作年限</h3>
                    <span className="about_me_info_subtitle">2&nbsp;年</span>
                </div>

                <div className="about_me_info_box">
                    <div>
                        <BiBriefcaseAlt/>
                    </div>
                    <h3 className="about_me_info_title">已完成</h3>
                    <span className="about_me_info_subtitle">5&nbsp;+&nbsp;&nbsp;项目</span>
                </div>

                <div className="about_me_info_box">
                    <BiSupport/>
                    <h3 className="about_me_info_title">支持</h3>
                    <span className="about_me_info_subtitle">已上线 5/6</span>
                </div>
            </div>
        </>
    );
};

export default Info;
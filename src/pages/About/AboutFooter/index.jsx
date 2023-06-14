import React from 'react';

import "./style.css";
import {UilDribbble, UilGithubAlt, UilInstagram} from "@iconscout/react-unicons";

const AboutFooter = () => {
    return (
        <>
            <footer className="about_footer">
                <div className="about_footer_container">
                    <h1 className="about_footer_title">Huangrx</h1>

                    <ul className="about_footer_list">
                        <li>
                            <a href="#about_me" className="about_footer_link">基本情况</a>
                        </li>

                        <li>
                            <a href="#about_qualification" className="about_footer_link">学历履历</a>
                        </li>

                        <li>
                            <a href="#about_contact" className="about_footer_link">取得联系</a>
                        </li>

                        <li>
                            <a href="/home" className="about_footer_link">博客主页</a>
                        </li>
                    </ul>

                    <div className="about_footer_social">
                        <a href="https://github.com/hrenxiang" className="about_footer_social_icon" rel="noreferrer" target={"_blank"}>
                            <UilGithubAlt/>
                        </a>
                        <a href="https://www.instagram.com/" className="about_footer_social_icon" rel="noreferrer" target={"_blank"}>
                            <UilInstagram/>
                        </a>
                        <a href="https://dribbble.com/" className="about_footer_social_icon" rel="noreferrer" target={"_blank"}>
                            <UilDribbble/>
                        </a>
                    </div>

                    <span className="about_footer_copy"><a href="https://beian.miit.gov.cn/#/Integrated/index">&#169; 豫ICP备2022017977号</a></span>
                </div>
            </footer>
        </>
    );
};

export default AboutFooter;
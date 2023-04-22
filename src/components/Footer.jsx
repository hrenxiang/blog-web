import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {RiQqLine, RiWechatLine} from "react-icons/ri";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid">
                    <div className="footer-ul-1">
                        <ul>
                            <li><AiFillGithub/></li>
                            <li><RiQqLine/></li>
                            <li><RiWechatLine/></li>
                        </ul>
                    </div>

                    <p className="copyright">&copy; 豫ICP备2022017977号</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

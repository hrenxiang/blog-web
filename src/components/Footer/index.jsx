import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {RiQqLine, RiWechatLine} from "react-icons/ri";

import "./style.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-record">
                    <h5>&copy; 豫ICP备2022017977号</h5>
                    <Link to=""><button><AiFillGithub/></button></Link>
                    <Link to=""><button><RiQqLine/></button></Link>
                    <Link to=""><button><RiWechatLine/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;

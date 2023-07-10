import React, {useState} from 'react';
import {
    UilApps,
    UilBriefcase,
    UilEstate,
    UilFileAlt,
    UilMessage,
    UilScenery,
    UilTimes,
    UilUser
} from '@iconscout/react-unicons'

import "./style.css";

const AboutNavBar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <div className="about_navbar">
                <nav className="about_navbar_container">
                    <a href="/" className="about_navbar_logo">Huangrx</a>

                    <div className={`about_navbar_menu ${showMenu ? 'show_menu' : ''}`}>
                        <ul className="about_navbar_items">
                            <li className="about_navbar_item">
                                <a href="#about_home"
                                   className={`about_navbar_link ${toggleState === 1 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(1)}>
                                    <i className="about_navbar_item_icon">
                                        <UilEstate size={16}/>
                                    </i>
                                    <div>个人主页</div>
                                </a>
                            </li>

                            <li className="about_navbar_item">
                                <a href="#about_me"
                                   className={`about_navbar_link ${toggleState === 2 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(2)}>
                                    <i className="about_navbar_item_icon">
                                        <UilUser size={16}/>
                                    </i>
                                    <div>基本情况</div>
                                </a>
                            </li>

                            <li className="about_navbar_item">
                                <a href="#about_skills"
                                   className={`about_navbar_link ${toggleState === 3 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(3)}>
                                    <i className="about_navbar_item_icon">
                                        <UilFileAlt size={16}/>
                                    </i>
                                    <div>技术相关</div>
                                </a>
                            </li>

                            <li className="about_navbar_item">
                                <a href="#about_services"
                                   className={`about_navbar_link ${toggleState === 4 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(4)}>
                                    <i className="about_navbar_item_icon">
                                        <UilBriefcase size={16}/>
                                    </i>
                                    <div>相关项目</div>
                                </a>
                            </li>

                            <li className="about_navbar_item">
                                <a href="#about_qualification"
                                   className={`about_navbar_link ${toggleState === 5 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(5)}>
                                    <i className="about_navbar_item_icon">
                                        <UilScenery size={16}/>
                                    </i>
                                    <div>学历履历</div>
                                </a>
                            </li>

                            <li className="about_navbar_item">
                                <a href="#about_contact"
                                   className={`about_navbar_link ${toggleState === 6 ? 'about_navbar_link_active' : ''}`}
                                   onClick={() => toggleTab(6)}>
                                    <i className="about_navbar_item_icon">
                                        <UilScenery size={16}/>
                                    </i>
                                    <div>联系方式</div>
                                </a>
                            </li>

                            {/*<li className="about_navbar_item">*/}
                            {/*    <a href="/home"*/}
                            {/*       className={`about_navbar_link ${toggleState === 7 ? 'about_navbar_link_active' : ''}`}*/}
                            {/*       onClick={() => toggleTab(7)}>*/}
                            {/*        <i className="about_navbar_item_icon">*/}
                            {/*            <UilMessage size={16}/>*/}
                            {/*        </i>*/}
                            {/*        <div>博客主页📌</div>*/}
                            {/*    </a>*/}
                            {/*</li>*/}

                            <i className={`about_navbar_close`} onClick={handleShowMenu}>
                                <UilTimes size={16}/>
                            </i>
                        </ul>
                    </div>

                    <div className="about_navbar_toggle" onClick={handleShowMenu}>
                        <UilApps size={16}/>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default AboutNavBar;
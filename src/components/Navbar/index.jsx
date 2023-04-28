import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AntDesignOutlined} from '@ant-design/icons';
import {Avatar} from "antd";
import {LogoIcon} from "../../constants/IconConst";
import {TbMenu2} from "react-icons/tb";
import {IoClose} from "react-icons/io5";

import "./style.css";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    // 开关菜单
    const handlerToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="navbar">
            <header className="container">
                <div className="navbar-logo">
                    <Link to="/">
                        <Avatar
                            size={{xs: 24, sm: 32, md: 40, lg: 50, xl: 60, xxl: 60}}
                            icon={<AntDesignOutlined/>}
                            src={<img src={LogoIcon} alt="avatar"/>}
                        />
                    </Link>
                </div>
                <div className="navbar-toggle">
                    <button><TbMenu2 onClick={handlerToggle}/></button>
                </div>
            </header>
            <div className="navbar-collapse">
                <div className={`navbar-overlay ${toggle ? "overlay-active" : ""}`}></div>
                <nav className={`navbar-nav ${toggle ? "isActive" : ""}`}>
                    <button className="navbar-close">
                        <IoClose onClick={handlerToggle}/>
                    </button>
                    <ul>
                        <li>
                            <Link to="/" onClick={handlerToggle}>
                                首页 👀
                            </Link>
                        </li>
                        <li>
                            <Link to="/notes" onClick={handlerToggle}>
                                笔记 🏚️
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories" onClick={handlerToggle}>
                                分类 🍃
                            </Link>
                        </li>
                        <li>
                            <Link to="/images" onClick={handlerToggle}>
                                摄影 🍓
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handlerToggle}>
                                关于 🍉
                            </Link>
                        </li>
                        <li>
                            <Link to="/collection/navigation" onClick={handlerToggle}>
                                收藏 🍊
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

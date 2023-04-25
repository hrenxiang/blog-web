import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AntDesignOutlined } from '@ant-design/icons';
import {Avatar} from "antd";
import {AiOutlineClose} from "react-icons/ai";
import {BiMenuAltRight} from "react-icons/bi";
import {LogoIcon} from "../../constants/IconConst";

import "./style.scss"

const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
        menuToggleHandler();
        navigate("/login");
    };

    return (
        <header className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<AntDesignOutlined />}
                        src={<img src={LogoIcon} alt="avatar" />}
                    />
                </Link>
                <nav
                    className={`nav ${
                        menuOpen && size.width < 768 ? "isMenu" : ""}`}
                >
                    <ul>
                        <li>
                            <Link to="/" onClick={menuToggleHandler}>
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link to="/notes" onClick={menuToggleHandler}>
                                笔记
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories" onClick={menuToggleHandler}>
                                分类
                            </Link>
                        </li>
                        <li>
                            <Link to="/images" onClick={menuToggleHandler}>
                                摄影
                            </Link>
                        </li>
                        <li>
                            <Link to="/collection/chat" onClick={menuToggleHandler}>
                                收藏
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={menuToggleHandler}>
                                关于
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>登录</button>
                </nav>
                <div className="toggle">
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;

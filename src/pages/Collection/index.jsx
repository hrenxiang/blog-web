import React, {useState} from 'react';
import {Menu} from 'antd';
import {Link, Outlet} from "react-router-dom";
import {VscSymbolColor} from "react-icons/vsc";
import {BiNavigation} from "react-icons/bi";
import {LogoIcon} from "../../constants/IconConst";
import {RiGalleryLine} from "react-icons/ri";
import {IoArrowBackCircleOutline} from "react-icons/io5";

import "./style.css"
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";

const Collection = () => {

    const [opacity, setOpacity] = useState(false);

    const handlerShowMenu = () => {
        setOpacity(!opacity);
    }

    return (

        <div className="collection">
            <div className="collection-body">
                <div className="collection-layout">
                    <div className={`collection-layout-sider ${opacity ? 'collection-layout-sider-close' : ''}`}>
                        <div className={`collection-layout-sider-top`}>
                            <div>
                                <img src={LogoIcon} alt="logo"/>
                            </div>
                            <div className="collection-lst-right">
                                <p>收藏箱</p>
                                <AiOutlineMenuFold className="collection-lstr-icon" onClick={handlerShowMenu}/>
                            </div>


                        </div>
                        <div className={`collection-layout-sider-content`}>
                            <Menu className="collection-layout-sider-menu"
                                  defaultSelectedKeys={['2']}
                                  items={[
                                      {
                                          key: 1,
                                          icon: <IoArrowBackCircleOutline/>,
                                          label: '主页',
                                          to: '/'
                                      },
                                      {
                                          key: 2,
                                          icon: <BiNavigation/>,
                                          label: '导航',
                                          to: '/collection/navigation'
                                      },
                                      {
                                          key: 4,
                                          icon: <VscSymbolColor/>,
                                          label: '色卡',
                                          to: '/collection/palette'
                                      },
                                      {
                                          key: 5,
                                          icon: <RiGalleryLine/>,
                                          label: '图库',
                                          to: '/collection/gallery'
                                      },
                                  ].map(item => ({
                                      ...item,
                                      label: <Link to={item.to}>{item.label}</Link>

                                  }))}>
                            </Menu>
                        </div>
                        <div className={`collection-layout-sider-bottom`}>
                            <Link to="/register">注册</Link>
                            <Link to="/login">登录</Link>
                        </div>
                    </div>

                    <div className={`collection-layout-content ${opacity ? 'collection-lc-active' : ''}`}>
                        <div className={`collection-layout-sider-open ${opacity ? 'collection-lso-active' : ''}`}
                             onClick={handlerShowMenu}>
                            <AiOutlineMenuUnfold/>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Collection;

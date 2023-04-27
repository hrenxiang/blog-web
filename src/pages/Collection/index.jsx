import React, {useState} from 'react';
import {Button, Layout, Menu} from 'antd';
import {Link, Outlet} from "react-router-dom";
import {VscSymbolColor} from "react-icons/vsc";
import {BiNavigation} from "react-icons/bi";
import {LogoIcon} from "../../constants/IconConst";
import {RiGalleryLine} from "react-icons/ri";
import {BsRobot} from "react-icons/bs";
import {IoArrowBackCircleOutline} from "react-icons/io5";

import "./style.css"

const Collection = () => {

    const [opacity, setOpacity] = useState(false);

    const handlerShowMenu = () => {
        setOpacity(!opacity);
    }

    return (

        <div className="collection">
            <div className="collection-body">
                <Layout hasSider className="collection-layout">
                    <div className={`collection-layout-sider-logo ${opacity ? 'collection-layout-sider-show' : ''}`}>
                        <img src={LogoIcon} alt="logo"/>
                        <p>收藏箱</p>
                    </div>
                    <div className={`collection-layout-sider ${opacity ? 'collection-layout-sider-show' : ''}`}>
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
                                      key: 5,
                                      icon: <RiGalleryLine/>,
                                      label: '图库',
                                      to: '/collection/gallery'
                                  },
                                  {
                                      key: 3,
                                      icon: <BsRobot/>,
                                      label: '智能',
                                      to: '/collection/chat'
                                  },
                                  {
                                      key: 4,
                                      icon: <VscSymbolColor/>,
                                      label: '色卡',
                                      to: '/collection/palette'
                                  }
                              ].map(item => ({
                                  ...item,
                                  label: <Link to={item.to}>{item.label}</Link>

                              }))}>
                        </Menu>
                    </div>
                    <div className={`collection-layout-sider-bottom ${opacity ? 'collection-layout-sider-show' : ''}`}>
                        <Link to="/register" style={{pointerEvents: 'none'}}>注册</Link>
                        <Link to="/login">登录</Link>
                    </div>

                    <Layout className="collection-layout-content">
                        <div
                            className={`collection-layout-sider-button ${opacity ? 'collection-layout-sider-button-show' : ''}`}>
                            <Button icon={<IoArrowBackCircleOutline/>}
                                    onClick={handlerShowMenu}/>
                        </div>
                        <Outlet/>
                    </Layout>
                </Layout>
            </div>
        </div>


    );
};

export default Collection;

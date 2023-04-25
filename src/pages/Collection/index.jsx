import React from 'react';
import {Layout, Menu} from 'antd';

import "./style.css"
import {BsRobot} from "react-icons/bs";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
import {VscSymbolColor} from "react-icons/vsc";

const Collection = () => {

    const {Sider} = Layout;

    return (

        <div className="collection">
            <div className="collection-body">
                <Layout hasSider className="collection-layout">
                    <Sider className="collection-layout-sider"
                           breakpoint="lg"
                           collapsedWidth="0"
                           onBreakpoint={(broken) => {
                               console.log(broken);
                           }}
                           onCollapse={(collapsed, type) => {
                               console.log(collapsed, type);
                           }}>
                        <div className="logo"/>
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
                                      icon: <BsRobot/>,
                                      label: '智能',
                                      to: '/collection/chat'
                                  },
                                  {
                                      key: 3,
                                      icon: <VscSymbolColor/>,
                                      label: '颜色',
                                      to: '/collection/palette'
                                  }
                              ].map(item => ({
                                  ...item,
                                  label: <Link to={item.to}>{item.label}</Link>

                              }))}>
                        </Menu>
                    </Sider>
                    <Layout className="collection-layout-content">
                        <Outlet/>
                    </Layout>
                </Layout>
            </div>
        </div>


    );
};

export default Collection;

import React from 'react';
import {Layout, Menu} from 'antd';

import "./style.css"
import MenuItem from "antd/es/menu/MenuItem";
import {BsRobot} from "react-icons/bs";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
import {VscSymbolColor} from "react-icons/vsc";

const Collection = () => {

    const {Content, Sider} = Layout;

    const menuItems = (
        <>

        </>
    );

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
                           }}
                    >
                        <div className="logo"/>
                        <Menu className="collection-layout-sider-menu">
                            <Menu.Item key="1" icon={<IoArrowBackCircleOutline/>}> <Link to="/">GoBack</Link></>
                            <Menu.Item key="2" icon={<BsRobot/>}>ChatBot</Menu.Item>
                            <Menu.Item key="3" icon={<VscSymbolColor/>}>Palette</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="collection-layout">
                        <Content className="collection-layout-content">
                            <div>content</div>
                            <Outlet/>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </div>


    );
};

export default Collection;

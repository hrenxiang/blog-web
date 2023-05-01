import React from 'react';
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";

import "./style.css"
import {BiTagAlt} from "react-icons/bi";
import {Link} from "react-router-dom";

const Navigation = () => {

    const numbers1 = [1, 2, 3];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="navigation">
            <div className="navigation-container">
                {
                    numbers1.map(number1 => (
                        <div key={number1} className="navigation-body">
                            <p className="navigation-title"><BiTagAlt/> 导航标签</p>
                            <div className="navigation-body-item">
                                {
                                    numbers.map(number => (
                                        <Link to="https://www.baidu.com">
                                            <Card style={{height: 115, marginTop: 16}} key={number}>
                                                <Meta
                                                    avatar={<Avatar
                                                        src="https://cdn.jsdelivr.net/gh/Yafine/cdn@3.3.3/source/box/images/logo/justgetflux.png"/>}
                                                    title="Card title"
                                                    description={
                                                        <div className="navigation-body-card-description">
                                                            一款使用简单、功能强大的网络爬虫工具，完全可视化操作，无需编写代码，内置海量模板，支持任意网络数据抓取支持任意网络数据抓取支持任意网络数据抓取支持任意网络数据抓取
                                                        </div>
                                                    }
                                                />
                                            </Card>
                                        </Link>
                                    ))
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Navigation;
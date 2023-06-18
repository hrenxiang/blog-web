import React, {useEffect, useState} from 'react';
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {acquireNavData} from "../../api/navigation/navigation"

import "./style.css"
import {BiTagAlt} from "react-icons/bi";
import {Link} from "react-router-dom";

const Navigation = () => {

    const [state, setState] = useState({
        navData: null
    });

    useEffect(() => {
        acquireNavData().then((res) => {
            setState({
                navData: res.data
            })
        })
    }, [])

    return (
        <div className="navigation">
            <div className="navigation-container">
                {

                    state.navData &&
                    Object.keys(state.navData).map((category) => (
                        <div key={category} className="navigation-body">
                            <p className="navigation-title"><BiTagAlt/>{category}</p>
                            <div className="navigation-body-item">
                                {
                                    state.navData[category].map((item) => (
                                        <Link to={item.site_link} key={item.id} target="_blank">
                                            <Card style={{height: 115, marginTop: 16}}>
                                                <Meta
                                                    avatar={<Avatar src={item.site_avatar}/>}
                                                    title={item.site_name}
                                                    description={item.site_intro}
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
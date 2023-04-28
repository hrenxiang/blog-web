import React from 'react';
import {Avatar, Card, Progress, Row, Col} from "antd"
import {AiOutlineUser} from "react-icons/ai";
import {LogoIcon} from "../../constants/IconConst";

import "./style.css"

function About(props) {
    return (
        <div className="about">
            <div className="about-container">
                <div className="avatar">
                    <Avatar
                        icon={<AiOutlineUser/>}
                        src={<img src={LogoIcon} alt="avatar"/>}
                        size={120}
                    >
                    </Avatar>
                    <div className="introduce" style={{
                        marginTop: "20px"
                    }}>
                        <p>Hello！我叫huangrx，网络工程专业，坐标郑州。</p>
                        <p>目前可能没有那么强,但我相信明天的我总会比今天强!不积硅步无以至千里,不积小流无以成江海。</p>
                    </div>
                </div>
                <div className="progress-data">
                    <Row className="row-1">
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={85} size={60}/>
                            <p>Java</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={85} size={60}/>
                            <p>Mysql</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={85} size={60}/>
                            <p>Redis</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={85} size={60}/>
                            <p>Spring</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={85} size={60}/>
                            <p>SpringBoot</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={80} size={60}/>
                            <p>Vue</p>
                        </Col>
                        <Col xs={4} sm={1} style={{marginRight: "10px"}}>
                            <Progress type="circle" percent={70} size={60}/>
                            <p>React</p>
                        </Col>
                    </Row>
                </div>
                <div className="about-record">
                    <div className="about-record-item">
                        <Card title="喜欢" bordered={false}>
                            <p>我家小茜 ❤️</p>
                            <p>是编程啦 💻</p>
                            <p>当然有它 🎮</p>
                        </Card>
                    </div>
                    <div className="about-record-item">
                        <Card title="技能" bordered={false}>
                            <p>后端 （づ￣3￣）づ╭❤️～</p>
                            <p>前端 []~(￣▽￣)~*</p>
                        </Card>
                    </div>
                    <div className="about-record-item">
                        <Card title="为人" bordered={false}>
                            <p>本分</p>
                            <p>谦和</p>
                            <p>耐劳</p>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;

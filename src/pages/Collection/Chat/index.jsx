import React from 'react';

import "./style.css"
import {Button, Input, Space} from "antd";
import {BsSend} from "react-icons/bs";

const Chat = () => {
    return (
        <div className="chat">
            <p>Chat GPT</p>
            <div className="chat-body">

                <Space className="chat-body-space">
                    <Space.Compact>
                        <Input defaultValue="请输入您的内容"/>
                        <Button icon={<BsSend/>} className="chat-body-send-button"/>
                    </Space.Compact>
                </Space>
            </div>
        </div>
    );
};

export default Chat;

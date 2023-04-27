import React, {useRef, useState} from 'react';

import "./style.css"
import {Button, Input, List, Space} from "antd";
import {BsSend} from "react-icons/bs";

const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messageListRef = useRef(null);
    const inputRef = useRef(null);

    const handleInputPressEnter = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { content: inputValue }]);
            setInputValue('');
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    };

    return (
        <div className="chat">
            <p>Chat GPT</p>
            <div className="chat-body">

                <div className="chat-body-messages" ref={messageListRef}>
                    <List
                        dataSource={messages}
                        renderItem={(message) => (
                            <List.Item>
                                <div>{message.content}</div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <Space className="chat-body-space">
                <Space.Compact>
                    <Input defaultValue="请输入您的内容"
                           value = {inputValue}
                           onChange={(e) => setInputValue(e.target.value)}
                           onPressEnter={handleInputPressEnter}
                    />
                    <Button icon={<BsSend/>} className="chat-body-send-button" onClick={handleInputPressEnter}/>
                </Space.Compact>
            </Space>
        </div>
    );
};

export default Chat;

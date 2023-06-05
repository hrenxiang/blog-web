import React from 'react';

import "./style.css"

const Chat = () => {

    return (
        <div className="chat">
            {/*<section className="chat-side-bar">*/}
            {/*    <button>+ New chat</button>*/}
            {/*    <ul className="chat-history">*/}
            {/*        <li>生活常识</li>*/}
            {/*        <li>编程知识</li>*/}
            {/*        <li>营养搭配</li>*/}
            {/*        <li>运动健身</li>*/}
            {/*        <li>网站推荐</li>*/}
            {/*    </ul>*/}
            {/*    <nav>*/}
            {/*        <p>*/}
            {/*            Made By Huangrx*/}
            {/*        </p>*/}
            {/*    </nav>*/}
            {/*</section>*/}
            {/*<section className="chat-body">*/}
            {/*    <h1>Huangrx‘s GPT</h1>*/}
            {/*    <ul className="feed">*/}
            {/*        难受啊! 网络不通！！！！！！*/}
            {/*    </ul>*/}
            {/*    <div className="chat-body-input">*/}
            {/*        <div className="chat-input-container">*/}
            {/*            <input/>*/}
            {/*            <div className="chat-send-button">➢</div>*/}
            {/*        </div>*/}
            {/*        <div className="chat-body-input-bottom">*/}
            {/*            <p>*/}
            {/*                Free Research Preview.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <iframe src="https://chat.huangrx.cn" title="chat"  className="chat-iframe" sandbox="allow-scripts allow-forms allow-same-origin"/>
        </div>
    );
};

export default Chat;

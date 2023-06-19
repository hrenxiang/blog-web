import React, {useState} from 'react';
import {FloatButton} from "antd";

import "./style.css"
import {CgToolbox} from "react-icons/cg";
import {IoMdSwitch} from "react-icons/io";

const FooterQuick = () => {

    const [expanded, setExpanded] = useState(false);

    const handlerExpanded = () => {
        setExpanded(!expanded);
    }

    // 切换主题
    const toggleTheme = () => {
        let uuid = localStorage.getItem('theme_uuid');

        if (uuid) {
            localStorage.removeItem('theme_uuid')
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            uuid = generateUUID();
            localStorage.setItem('theme_uuid', uuid);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.toggle('light')
        }

    }

    // 生成UUID
    function generateUUID() {
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return ((c === 'x') ? r : ((r & 0x3) | 0x8)).toString(16);
        });
    }

    return (
        <div className="footer-quick">
            <FloatButton.Group shape="square" style={{right: 20, bottom: 20}}>
                <FloatButton icon={<CgToolbox/>} onClick={handlerExpanded}/>
                <FloatButton icon={<IoMdSwitch/>} className={expanded ? 'active' : ''} onClick={toggleTheme}/>
                <FloatButton.BackTop visibilityHeight={0} className={expanded ? 'active' : ''}/>
            </FloatButton.Group>
        </div>
    );
};

export default FooterQuick;
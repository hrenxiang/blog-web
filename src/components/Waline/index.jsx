import React, {useEffect} from 'react';
import {init} from '@waline/client/dist/waline.mjs';
import "@waline/client/dist/waline.css"
import "./style.css"

const Waline = () => {

    useEffect(() => {
        const locale = {
            link: '主页',
            placeholder: '也不知过了多久，才找到了你的踪迹...',
            meta: ['nick', 'mail', 'link', 'tag'],
        };

        init({
            el: '#waline',
            serverURL: 'https://waline.huangrx.cn',
            locale: locale,
            login: 'force'
        });
    }, [])

    return (
        <div id="waline">

        </div>
    );
};

export default Waline;

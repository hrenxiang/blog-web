import React, {useEffect} from 'react';
import {init} from '@waline/client/dist/waline.mjs';
import "@waline/client/dist/waline.css"
import "./waline.css"

const Waline = () => {

    useEffect(() => {
        const locale = {
            link: '主页',
            placeholder: '也不知过了多久，才找到了你的踪迹...',
            level0: '⚪️青铜',
            level1: '◻️黑铁',
            level2: '🤍白银',
            level3: '🔵铂金',
            level4: '🟦钴蓝',
            level5: '💙钯金',
            level6: '🟠秘银',
            level7: '🟧山铜',
            level8: '🟧精金',
            level9: '🧡钛金',
            level10: '🟪叶绿',
            level11: '🟥夜明',
            meta: ['nick', 'mail', 'link', 'tag'],
        };

        init({
            el: '#waline',
            serverURL: 'https://waline.huangrx.cn',
            locale: locale
        });
    }, [])

    return (
        <div id="waline">

        </div>
    );
};

export default Waline;

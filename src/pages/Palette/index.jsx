import React, {useEffect, useState} from 'react';

import "./style.css"
import {CopyToClipboard} from "react-copy-to-clipboard";
import {HiOutlineCheck} from "react-icons/hi";
import {notification} from "antd";
import {acquirePaletteData} from "../../api/palette/palette";

const Palette = (props) => {

    const [state, setState] = useState({
        paletteData: []
    });

    useEffect(() => {
        acquirePaletteData().then((res) => {
            setState({
                paletteData: res.data
            })
        })
    }, []);


    const [notificationApi, contextHolderNotification] = notification.useNotification();

    const handleCopy = () => {
        notificationApi.open({
            message: '已复制！',
            description:
                '颜色已经复制到剪贴板!',
            icon: <HiOutlineCheck/>,
            duration: 2,
        });
    };

    return (
        <div className="palette">
            {contextHolderNotification}

            <div className="palette-body">
                <div className="palettes">
                    {
                        state.paletteData ? state.paletteData.map((palette) => (
                            <CopyToClipboard text={palette.palette_from + " , " + palette.palette_to} onCopy={handleCopy}
                                             key={palette.id}>
                                <figure className="palette-figure" key={Math.random()}>
                                    <div className="aspect-ratio" style={{paddingTop: `${100}%`}}>
                                        <div
                                            style={{
                                                backgroundImage: `linear-gradient(135deg, ${palette.palette_from}, ${palette.palette_to})`
                                            }}
                                        />

                                    </div>
                                    <figcaption className="palette__caption">
                                        {palette.palette_from} – {palette.palette_to}
                                    </figcaption>
                                </figure>
                            </CopyToClipboard>
                        )) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Palette;

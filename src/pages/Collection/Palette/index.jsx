import React from 'react';

import "./style.css"
import {CopyToClipboard} from "react-copy-to-clipboard";
import {HiOutlineCheck} from "react-icons/hi";
import {notification} from "antd";

const Palette = (props) => {

    const palettes = [
        {
            from: "#a8edea",
            to: "#fed6e3"
        },
        {
            from: "#c1dfc4",
            to: "#deecdd"
        },
        {
            from: "#9890e3",
            to: "#b1f4cf"
        },
        {
            from: "#93a5cf",
            to: "#e4efe9"
        },
        {
            from: "#a8caba",
            to: "#5d4157"
        },
        {
            from: "#dad4ec",
            to: "#f3e7e9"
        },
        {
            from: "#ee9ca7",
            to: "#ffdde1"
        },
        {
            from: "#FFFEFF",
            to: "#D7FFFE"
        },
        {
            from: "#E3FDF5",
            to: "#FFE6FA"
        },
        {
            from: "#c1c161",
            to: "#d4d4b1"
        },
        {
            from: "#fc6076",
            to: "#ff9a44"
        },
        {
            from: "#9FACE6",
            to: "#74EBD5"
        },
        {
            from: "#74EBD5",
            to: "#FA709A"
        },
        {
            from: "#F6FFDE",
            to: "#E3F2C1"
        },
        {
            from: "#C9DBB2",
            to: "#AAC8A7"
        },
        {
            from: "#FFEBEB",
            to: "#FF6969"
        },
        {
            from: "#BFCCB5",
            to: "#7C96AB"
        },
        {
            from: "#4F4557",
            to: "#393646"
        },
        {
            from: "#6D5D6E",
            to: "#FFF4E0"
        },
        {
            from: "#E4D0D0",
            to: "#F5EBEB"
        },
        {
            from: "#a6c0fe",
            to: "#f68084"
        },
        {
            from: "#84fab0",
            to: "#8fd3f4"
        },
        {
            from: "#fad0c4",
            to: "#ffd1ff"
        },
        {
            from: "#ff9a9e",
            to: "#fad0c4"
        },
        {
            from: "#a18cd1",
            to: "#fbc2eb"
        },
        {
            from: "#f40076",
            to: "#df98fa"
        },
        {
            from: "#f06966",
            to: "#fad6a6"
        },
        {
            from: "#ff0076",
            to: "#590fb7"
        },
        {
            from: "#9055ff",
            to: "#13e2da"
        },
        {
            from: "#0b63f6",
            to: "#003cc5"
        },
        {
            from: "#d6ff7f",
            to: "#00b3cc"
        },
        {
            from: "#e233ff",
            to: "#ff6b00"
        },
        {
            from: "#df98fa",
            to: "#9055ff"
        },
        {
            from: "#ed7b84",
            to: "#9055ff"
        },
        {
            from: "#402565",
            to: "#30be96"
        },
        {
            from: "#402662",
            to: "#3900a6"
        },
        {
            from: "#f14658",
            to: "#dc2537"
        },
        {
            from: "#f40076",
            to: "#342711"
        },
        {
            from: "#000066",
            to: "#6699ff"
        },
        {
            from: "#cb5eee",
            to: "#4be1ec"
        },
        {
            from: "#fa7cbb",
            to: "#f14658"
        },
        {
            from: "#737dfe",
            to: "#ffcac9"
        },
        {
            from: "#2f80ed",
            to: "#b2ffda"
        }
    ];

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
                    {palettes.map((palette) => (
                        <CopyToClipboard text={palette.from + " , " +  palette.to} onCopy={handleCopy}>
                            <figure className="palette-figure" key={Math.random()}>
                                <div className="aspect-ratio" style={{paddingTop: `${100}%`}}>
                                    <div
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${palette.from}, ${palette.to})`
                                        }}
                                    />

                                </div>
                                <figcaption className="palette__caption">
                                    {palette.from} – {palette.to}
                                </figcaption>
                            </figure>
                        </CopyToClipboard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Palette;

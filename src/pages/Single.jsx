import React, {useState, useEffect} from 'react';
import {notification} from 'antd';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {HiOutlineCheck} from 'react-icons/hi'
import {duotoneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import 'github-markdown-css';

const Single = () => {

    const [notificationApi, contextHolderNotification] = notification.useNotification();

    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        // 读取 Markdown 文件内容
        fetch("/example.md")
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(error => console.log(error));
    }, []);

    const handleCopy = () => {
        notificationApi.open({
            message: '已复制！',
            description:
                '代码复制到剪贴板!',
            icon: <HiOutlineCheck/>,
            duration: 2,
        });
    };

    return (
        <div className='single'>
            <div className='container'>
                {contextHolderNotification}

                <ReactMarkdown
                    className="markdown-body"
                    remarkPlugins={[gfm]}
                    children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ?
                                (
                                    <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                                        <div className="code-wrapper">
                                            <SyntaxHighlighter
                                                style={duotoneLight}
                                                language={match[1]}
                                                PreTag="div"
                                                children={String(children).replace(/\n$/, '')}
                                                {...props}
                                            />
                                            <div className="copy-btn" onClick={handleCopy}>
                                                复制
                                            </div>
                                        </div>
                                    </CopyToClipboard>
                                )
                                :
                                (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Single;
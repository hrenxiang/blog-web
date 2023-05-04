import React, {useState, useEffect} from 'react';
import {notification} from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkToc from 'remark-toc';
import Toc from 'remark-toc'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {HiOutlineCheck} from 'react-icons/hi'
import {duotoneLight, atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {useLocation} from "react-router-dom";
import Chip from "../../components/Chip";
import EmptyList from "../../components/EmptyList";

import "./style.css"
import 'github-markdown-css';
import Waline from "../../components/Waline";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Blog = () => {

    const [notificationApi, contextHolderNotification] = notification.useNotification();

    const [markdown, setMarkdown] = useState('');

    const [isDarkMode, setIsDarkMode] = useState(false);

    let location = useLocation();
    let blog = location.state.blog;

    // markdown code template switch
    useEffect(() => {


        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const onChange = (e) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", onChange);
        return () => {
            mediaQuery.removeEventListener("change", onChange);
        };
    }, []);

    useEffect(() => {
        // 读取 Markdown 文件内容
        fetch(blog.document_url)
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(error => console.log(error));
    }, [blog.document_url]);

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
        <div className='blog'>
            <div className='blog-container'>
                {contextHolderNotification}

                {blog ?
                    (
                        <div className='blog-wrap'>

                            <header>
                                <div className="blog-cover">
                                    <img src={blog.cover} alt='cover'/>
                                </div>

                                <p className='blog-date'>上传日期 {blog.create_time}</p>
                                <h1>{blog.title}</h1>
                                <div className='blog-subCategory'>
                                    {/*{blog.category.map((category, i) => (*/}
                                    {/*    <div key={i}>*/}
                                    {/*        <Chip label={category}/>*/}
                                    {/*    </div>*/}
                                    {/*))}*/}
                                    <div>
                                        <Chip label={blog.category}/>
                                    </div>
                                    <div>
                                        <Chip label={blog.subcategory}/>
                                    </div>
                                </div>
                            </header>


                            {/*markdown 部分*/}
                            <ReactMarkdown
                                className="markdown-body"
                                plugins={remarkToc}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                children={markdown}
                                components={{
                                    code({node, inline, className, children, ...props}) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return !inline && match ?
                                            (
                                                <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                                                    <div className="code-wrapper">
                                                        <SyntaxHighlighter
                                                            style={isDarkMode ? duotoneLight : atomDark}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            children={String(children).replace(/\n$/, '')}
                                                            {...props}
                                                            className='code'
                                                        />
                                                        <div className="copy-btn" onClick={handleCopy}>
                                                            复制
                                                        </div>
                                                    </div>
                                                </CopyToClipboard>
                                            )
                                            :
                                            (

                                                <span className="code code-not-language">
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </span>

                                            );
                                    },
                                }}
                            />
                        </div>
                    ) :
                    (
                        <EmptyList/>
                    )
                }
                <Waline/>
            </div>
            <div className="toc-container">
                <Toc className="toc" />
            </div>
        </div>
    );
};

export default Blog;

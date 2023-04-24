import React, {useState, useEffect} from 'react';
import {notification} from 'antd';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {HiOutlineCheck} from 'react-icons/hi'
import {duotoneLight, atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {useParams} from "react-router-dom";
import Chip from "../../components/Chip";
import EmptyList from "../../components/EmptyList";
import {blogList} from "../../assets/config/data";

import "./style.scss"
import 'github-markdown-css';

const Blog = () => {

    const [notificationApi, contextHolderNotification] = notification.useNotification();

    const [markdown, setMarkdown] = useState('');

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [blog, setBlog] = useState(null);

    const {id} = useParams();

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

    // 临时读取文件内容
    useEffect(() => {
        // 读取 Markdown 文件内容
        fetch("/example.md")
            .then(response => response.text())
            .then(text => setMarkdown(text))
            .catch(error => console.log(error));
    }, []);

    // 临时获取对应文章
    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, [id]);

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

                {blog ? (
                    <div className='blog-wrap'>

                        <header>
                            <p className='blog-date'>Published {blog.createdAt}</p>
                            <h1>{blog.title}</h1>
                            <div className='blog-subCategory'>
                                {blog.subCategory.map((category, i) => (
                                    <div key={i}>
                                        <Chip label={category}/>
                                    </div>
                                ))}
                            </div>
                        </header>
                        <img src={blog.cover} alt='cover'/>

                        {/*markdown 部分*/}
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
                                                        style={isDarkMode ? atomDark : duotoneLight}
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
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        );
                                },
                            }}
                        />
                    </div>
                ) : (
                    <EmptyList/>
                )}


            </div>
        </div>
    );
};

export default Blog;

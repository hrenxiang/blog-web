import React, {useEffect, useRef, useState} from 'react';
import {notification} from 'antd';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {HiOutlineCheck} from 'react-icons/hi'
import {duotoneLight, atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import Chip from "../../components/Chip";
import EmptyList from "../../components/EmptyList";
import "./style.css"
import 'github-markdown-css';
import Waline from "../../components/Waline";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {MarkdownNavbar} from "markdown-navbar";
import {useSelector} from "react-redux";
import LazyingImage from "../../components/LazyingImage";

const Blog = () => {

    // 代码块复制通知
    const [notificationApi, contextHolderNotification] = notification.useNotification();

    // 文章内容
    const [markdown, setMarkdown] = useState('');

    // 预处理后的文章目录内容
    const [tocMarkdown, setTocMarkdown] = useState('');

    const [blog, setBlog] = useState({
        cover: '',
        title: '',
        documentUrl: '',
        category: '',
        subcategory: '',
        createTime: ''
    })

    // TODO：代码块颜色模式，目前待定
    const [currentMode] = useState('');

    // 参数传递 url拼接 或 redux
    // const location = useLocation();
    const blogParameters = useSelector(state => state.blogParameterReducer);

    useEffect(() => {
        // 获取url后的拼接数据
        // const searchParams = new URLSearchParams(location.search);
        // 获取参数的值
        // const title = searchParams.get('title');
        // const category = searchParams.get('category');
        // const subcategory = searchParams.get('subcategory');
        // const createTime = searchParams.get('create_time');
        // const cover = searchParams.get('cover');
        // const documentUrl = searchParams.get('document_url');

        setBlog(() => ({
            cover: blogParameters.cover,
            title: blogParameters.title,
            documentUrl: blogParameters.document_url,
            category: blogParameters.category,
            subcategory: blogParameters.subcategory,
            createTime: blogParameters.create_time
        }))

        // 读取 Markdown 文件内容
        if (blog.documentUrl) {
            fetch(blog.documentUrl)
                .then(response => response.text())
                .then(text => {
                    setMarkdown(text)

                    // 预处理markdown内容，将代码块全部删除，以防止代码块中的#误使markdown-navbar生成标题。
                    const processedText = text.replace(/```[\s\S]*?```/g, '');
                    setTocMarkdown(processedText);
                })
                .catch(error => console.log(error));
        }
    }, [blogParameters, blog.documentUrl]);

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

                {blog && markdown ?
                    (
                        <>
                            <div className="blog-container-header">
                                <p className='blog-date'>上传日期 {blog.createTime}</p>
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
                            </div>

                            <div className="blog-container-body">
                                <div className='blog-wrap'>
                                    {/*markdown 部分*/}
                                    <ReactMarkdown
                                        className="markdown-body"
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        children={markdown}
                                        components={{
                                            code({node, inline, className, children, ...props}) {
                                                const match = /language-(\w+)/.exec(className || '');
                                                return inline ?
                                                    (
                                                        <span className="code code-not-language">
                                                            <code className={className} {...props}>
                                                                {children}
                                                            </code>
                                                        </span>
                                                    )
                                                    :
                                                    (
                                                        match ?
                                                            (
                                                                <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                                                                    <div className="code-wrapper">
                                                                        <SyntaxHighlighter
                                                                            style={currentMode === "light" ? duotoneLight : atomDark}
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
                                                                <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                                                                    <div className="code-wrapper">
                                                                        <SyntaxHighlighter
                                                                            style={currentMode === "light" ? duotoneLight : atomDark}
                                                                            language={"bash"}
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
                                                    )
                                            },
                                        }}
                                    />

                                    <Waline/>
                                </div>

                                {tocMarkdown ?
                                    <div className="blog-markdown-toc">
                                        <div className="blog-markdown-toc-sticky">
                                            <MarkdownNavbar className='blog-markdown-toc-container' source={tocMarkdown} headingTopOffset={0}
                                                            ordered={false}/>

                                            <div className="blog-cover">
                                                <LazyingImage src={blog.cover} alt='cover'/>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    ''
                                }
                            </div>
                        </>
                    ) :
                    (
                        <EmptyList/>
                    )
                }

            </div>
        </div>
    );
};

export default Blog;

import React, {useEffect, useState} from 'react';

import "./style.css"
import {Link} from "react-router-dom";
import {acquireQuote} from "../../api/quote";
import {acquireArticle} from "../../api/article_generate";
import {TbChevronsDown, TbChevronsUp} from "react-icons/tb";


const Home = () => {

    const [quote, setQuote] = useState('失败乃是成功之母！');
    const [article, setArticle] = useState({
        author: '',
        content: '',
        title: ''
    })

    // 展开更多或收起
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {

        acquireQuote().then(res => {
            let hitokoto = res.data.hitokoto;
            if (hitokoto !== null) {
                setQuote(hitokoto);
            }
        }).catch((err) => {
            console.log(err)
        })

        toggleArticle();

    }, [])

    const toggleArticle = () => {
        acquireArticle().then((res) => {
            // console.log(res)
            let data = res.data.data;
            if (data !== null) {
                setArticle(() => ({
                    author: data.author,
                    content: data.content,
                    title: data.title
                }))
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    // 展开 收起按钮
    const toggleExpand = () => {
        if (isExpanded) {
            setIsExpanded(false);
        } else {
            setIsExpanded(true);
        }
    };


    return (
        <div className="home">
            <div className="home-container">

                {/*视频*/}
                <section className="home-banner">
                    <video autoPlay="autoplay" loop="loop" muted="muted" src="https://huangrx.cn/video/home-video.mp4"></video>
                    <div className="inner">
                        <h1>Huangrx</h1>
                        <p>{quote}</p>
                        <Link to="/about">
                            <button className="inner-button"><span>了解更多</span></button>
                        </Link>
                    </div>
                </section>

                {/*文章*/}
                <section className="home-article">
                    <div className="home-article-all">
                        <div className="home-article-inner">
                            <header>
                                <h2>每日一文</h2>
                                <p>{quote}</p>
                            </header>
                            <br/>
                            <div className="article-body">
                                <div className="article-title">
                                    《{article.title}》
                                    <span className="article-toggle" onClick={toggleArticle}>换一篇</span>
                                </div>
                                <div className="article-content">
                                    <br/>
                                    <br/>
                                    作者：{article.author}
                                    <br/>
                                    <div
                                        className={`article-content-html ${isExpanded ? "article-content-html-more" : ""}`}
                                        dangerouslySetInnerHTML={{__html: article.content.replace(/^"+|"+$/g, '')}}/>
                                </div>
                                <div className="article-content-html-btn">
                                    {!isExpanded ? <button onClick={toggleExpand}>展开更多 <TbChevronsDown/></button> :
                                        <button onClick={toggleExpand}>收起 <TbChevronsUp/></button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*自我说明*/}
                <section className="home-hero home-section">
                    <div className="home-hero-body">
                        <div className="home-hero-split">
                            <div className="home-hero-split-left">
                                <img src="https://images.huangrx.cn/uploads/2023/04/29/1682699341079.png" className="home-hero-image-3" alt="home-3"/>
                                <br/>
                                <div>
                                    <p> 我是一名程序员，我热爱我的工作，每天都有新的挑战等着我去解决。</p>
                                    <p> 在编写代码的过程中，我深入思考、不断学习，以确保我的代码具有高可读性、高可维护性和高可靠性。</p>
                                    <p>当我解决了一个难题或者优化了一个算法，我会感到自己取得了进步，这也让我更加热爱我的工作。</p>
                                    <p>与此同时，我也喜欢和同事合作，通过合作实现更高效的开发。</p>
                                    <p>我坚信，我的代码可以让世界变得更好，所以我会继续不断地挑战自己，不断学习，成为更好的程序员。</p>
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <img src="/assets/images/3d-1.png" alt="" className="home-hero-image-4"/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>

                {/*博客*/}
                <section className="home-document">
                    <div className="home-document-body">
                        <div className="home-document-inner">
                            <div className="home-document-item">
                                <div className="home-document-item-image">
                                    <img src="https://images.huangrx.cn/uploads/2023/04/29/1682699075719.png"/>
                                </div>
                                <div className="home-document-item-content">
                                    <header>
                                        <h3>111</h3>
                                        <p>1231111111</p>
                                    </header>
                                    <p>123123123123</p>
                                </div>
                            </div>

                            <div className="home-document-item">
                                <div className="home-document-item-image">
                                    <img src="https://images.huangrx.cn/uploads/2023/04/29/1682699075719.png"/>
                                </div>
                                <div className="home-document-item-content">
                                    <header>
                                        <h3>111</h3>
                                        <p>1231111111</p>
                                    </header>
                                    <p>123123123123</p>
                                </div>
                            </div>

                            <div className="home-document-item">
                                <div className="home-document-item-image">
                                    <img src="https://images.huangrx.cn/uploads/2023/04/29/1682699075719.png"/>
                                </div>
                                <div className="home-document-item-content">
                                    <header>
                                        <h3>地址地址</h3>
                                        <p>地址   地址</p>
                                    </header>
                                    <p>
                                        尹街06680号, 开封, 辽 210599
                                        傅街8597号, 诸暨, 青 201436
                                        尹街06680号, 开封, 辽 210599
                                        傅街8597号, 诸暨, 青 201436
                                        尹街06680号, 开封, 辽 210599
                                        傅街8597号, 诸暨, 青 201436
                                        尹街06680号, 开封, 辽 210599
                                        傅街8597号, 诸暨, 青 201436
                                        尹街06680号, 开封, 辽 210599
                                        傅街8597号, 诸暨, 青 201436
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home-images home-section">
                    <div className="home-images-body">
                        <div>
                            <h1>当我站在风景之中，抬头望着苍穹，心中涌动着无限的激情。</h1>
                            <p>我不仅是一个程序员，更是一位捕捉美好的梦想家。我用相机记录下每一次的闪光瞬间，尽情地展现出世界的美丽，</p>
                            <p>那些被镜头定格的画面让人感受到时光与自然的交织，也让我感受到生命的无限可能。</p>
                            <p>我相信，我的镜头能够记录下这个世界的点点滴滴，用心传递每一份美好，这就是我作为一个摄影师的梦想。</p>
                            <br/>
                            <Link to="/images">看看我的技术如何</Link>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;
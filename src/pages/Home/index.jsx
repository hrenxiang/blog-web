import React, {useEffect, useState} from 'react';

import "./style.css"
import {Link} from "react-router-dom";
import {acquireQuote} from "../../api/quote/quote";
import {acquireArticle} from "../../api/article/article_generate";
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
            let data = res.data;
            if (data !== null) {
                setArticle(() => ({
                    author: data.author,
                    content: data.content,
                    title: data.title
                }))
            }
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
                    <video autoPlay="autoplay" loop="loop" muted="muted" src="https://huangrx.cn/video/home_video_2.mp4"></video>
                    <div className="inner">
                        <h1>Huangrx</h1>
                        <p>{quote}</p>
                        <Link to="https://blog.huangrx.cn">
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
                                    <p>我是一名程序员, 我热爱我的工作, 每天都有新的挑战等着我去解决!</p>
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <img src="/assets/images/3d-1.png" alt="" className="home-hero-image-4"/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>

                {/*动画*/}
                <section className="home-like">
                    <div className="like-header">
                        <p>一些喜欢</p>
                    </div>
                    <div className="like-body">
                        <div>
                            <a href="https://www.bilibili.com/cheese/category?first=89" target="_blank" rel="noopener noreferrer"
                               className="card">
                                <div className="thumb"
                                     style={{backgroundImage: "url(https://images.huangrx.cn/uploads/2023/04/29/1682764591454.jpg)"}}></div>
                                <article>
                                    <h1>实时的技术</h1>
                                    <p>
                                        学习实时技术对我来说非常重要，因为它可以让我不断掌握最新的技术知识，从而不断提高自己的技能水平。
                                        在编程方面，实时技术可以帮助我了解并使用最新的框架、库、API等，从而更好地解决现实生活中的问题。
                                        此外，通过学习实时技术，我还可以更好地了解行业趋势和发展方向，从而更好地规划和发展自己的职业生涯。
                                    </p>
                                    <span>HUANG RX</span>
                                </article>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.bilibili.com/anime/index/"  target="_blank" rel="noopener noreferrer"
                               className="card">
                                <div className="thumb"
                                     style={{backgroundImage: "url('https://images.huangrx.cn/uploads/2023/04/29/home-haimian-baby.jpg')"}}></div>
                                <article>
                                    <h1>动画 动漫</h1>
                                    <p>
                                        喜欢动画和动漫是很多人的爱好之一，因为它们可以让我们沉浸在另一个世界中，感受到不同的情感和体验。作为一个追番党，我很享受每一部动画或动漫的故事情节、画风、配乐等元素。
                                        每一部作品都是一个独特的艺术品，让人无法忘怀。 除了享受观看的过程，还是享受。总的来说，追番是一种能够让我获得快乐和知识的爱好。
                                    </p>
                                    <span>HUANG RX</span>
                                </article>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.bilibili.com/video/BV12441167ru/"  target="_blank" rel="noopener noreferrer"
                               className="card">
                                <div className="thumb"
                                     style={{backgroundImage: "url(https://images.huangrx.cn/uploads/2023/04/29/1682765854067.jpg)"}}></div>
                                <article>
                                    <h1>骑行的快乐</h1>
                                    <p>
                                        我很喜欢骑行，这基本是一项我每天都要进行的运动。当我骑着自行车在城市中穿梭时，我可以感受到风吹拂我的脸庞，享受着自由和快乐的感觉。
                                        骑行也是一种探索城市的方式，让我可以看到更多的地方，体验更多的文化和生活方式。
                                        每次骑行结束时，虽然很累，但是都会感觉到不一样的轻松和舒适，这让我感到非常愉悦。
                                        骑行也是一项很好的锻炼方式，可以帮助我保持健康的身体和心态，我享受着这种活动带来的乐趣和挑战。
                                    </p>
                                    <span>HUANG RX</span>
                                </article>
                            </a>
                        </div>
                    </div>
                </section>


                <section className="home-images home-section">
                    <div className="home-images-body">
                        <div>
                            <h1>风景</h1>
                            <p>当我站在风景之中，抬头望着苍穹，心中涌动着无限的激情!</p>
                            <br/>
                            <Link to="/images">看下好看的照片吧</Link>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;
import React, {useEffect, useRef, useState} from 'react';

import "./style.scss"
import {Link} from "react-router-dom";


const Home = () => {

    const sectionRef = useRef(null);

    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const currentSectionRef = sectionRef.current;

        const observer = new IntersectionObserver(([entry]) => {

            setIsIntersecting(entry.isIntersecting);

        });

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, [sectionRef]);


    return (
        <div className="home">
            <section className="home-hero">
                <img src="/assets/circle half.png" className="home-circle-one" alt="half"/>
                <img src="/assets/Ellipse 2.png" className="home-circle-two" alt="Ellipse"/>
                <div className="home-container">
                    <div className="home-split">
                        <div className="home-hero-left">
                            <img src="/assets/images2/3d-5.png" className="home-hero-image-3" alt="home--3"/>
                            <br/>
                            <div>
                                <p> 我是一名程序员，我热爱我的工作，每天都有新的挑战等着我去解决。</p>
                                <p> 在编写代码的过程中，我深入思考、不断学习，以确保我的代码具有高可读性、高可维护性和高可靠性。</p>
                                <p>当我解决了一个难题或者优化了一个算法，我会感到自己取得了进步，这也让我更加热爱我的工作。</p>
                                <p>与此同时，我也喜欢和同事合作，通过合作实现更高效的开发。</p>
                                <p>我坚信，我的代码可以让世界变得更好，所以我会继续不断地挑战自己，不断学习，成为更好的程序员。</p>
                            </div>
                            <div className="home-btn-wrap">
                                <Link to="/notes">我的人生</Link>
                                &nbsp;|&nbsp;
                                <Link to="/about">关于我</Link>
                            </div>
                        </div>
                        <div className="home-hero-right">
                            <img src="/assets/images2/3d-1.png" alt="" className="home-hero-image-4"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-images">
                <div className="home-container">

                    <img src="/assets/images2/3d-2.png" alt="ss" className="home-images-image-3"/>
                    <h1>当我站在风景之中，抬头望着苍穹，心中涌动着无限的激情。</h1>
                    <p>我不仅是一个程序员，更是一位捕捉美好的梦想家。我用相机记录下每一次的闪光瞬间，尽情地展现出世界的美丽，</p>
                    <p>那些被镜头定格的画面让人感受到时光与自然的交织，也让我感受到生命的无限可能。</p>
                    <p>我相信，我的镜头能够记录下这个世界的点点滴滴，用心传递每一份美好，这就是我作为一个摄影师的梦想。</p>
                    <Link to="/images">看看我的技术如何</Link>
                </div>
            </section>

            <section className="home-code" ref={sectionRef}>
                <div className="home-container">
                    <div className="home-split">
                        <div className="home-code-left">
                            你好
                        </div>
                        <div className="home-code-middle">
                                1232131232
                        </div>
                        <div className="home-code-right">
                            {/*<img src="/assets/images2/3d-4.png" alt=""*/}
                            {/*     className={isIntersecting ? "home-code-image" : ""}/>*/}

                            你好
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
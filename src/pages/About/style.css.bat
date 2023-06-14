
@import "../../style.css";

.about {
    width: 100%;
    background-color: var(--black-1b);
    color: var(--white);
    font-family: var(--zhuziawan);
    overflow: hidden;
    min-height: 100vh;
}

.about-container {
    /*margin: var(--padding-td);*/
}

.about-container-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 2rem;
    justify-content: center;
    align-items: center;

    padding: var(--padding-lr) 0;
}

.about-container-header-lottie {
    justify-self: end;
}

.about-container-header > h1 {
    justify-self: start;
    margin: 2rem;
    font-weight: bold;
}

.about-container-header-lottie > div {
    height: 6rem;
    width: 6rem;
}

.about-content {
    width: 65%;
    margin: 0 auto;
    padding: 2rem;

    display: grid;
    grid-template-rows: 1fr 2fr;
    border-radius: 1rem;
    overflow: hidden;
}

.about-content-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2rem;
}

.about-ch-image {
    background-image: url("https://images.huangrx.cn/uploads/2023/05/01/1682880897904.jpg");
    background-size: cover;
    background-position: top center;
    border-radius: 0.5rem;
}

.about-ch-profile h2 {
    font-weight: bold;
}

.about-chp-top {
    margin-bottom: 1rem;
}

.about-chp-bottom p {
    line-height: 2;
}

.about h3 {
    /*border-bottom: 2px solid black;*/
    position: relative;
    line-height: 3rem;
}

.about h3:before {
    position: absolute;
    background: transparent;
    content: "";
    width: 3rem;
    border-bottom: 3px solid var(--white);

    bottom: 0;
}

.about-content-body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 2rem 0;

    grid-gap: 2rem;
}

.about-content-left, .about-content-right {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;
}

.about-cl-education,
.about-cl-contact,
.about-cr-experience,
.about-cr-skill {
    height: 100%;
    background-color: var(--black-2b);
    box-shadow: 0 0 3px 1px var(--white-219-30);
    padding: 2rem;
}

.about-cre-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.about-clc-item {
    margin-bottom: 2rem;
}

.about-crs-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.about-crs-item .ant-progress-text {
    color: var(--white);
}

@media screen and (max-width: 1450px) {
    .about-content {
        width: 90%;
    }
}

@media screen and (max-width: 990px) {
    .about-content {
        width: 100%;
    }

    .about-content {
        grid-template-rows: 1fr 1.5fr;
        padding: 1rem 1rem;
    }

    .about-content-header {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    .about-content-body {
        grid-template-columns: repeat(1, 1fr);
    }

    .about-content-left, .about-content-right {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 2rem;
    }
}

@media only screen and (max-width: 786px) {
    .about-container-header {
        grid-template-columns: repeat(1, 1fr);
    }

    .about-container-header-lottie, .about-container-header h1 {
        justify-self: center;
    }
}

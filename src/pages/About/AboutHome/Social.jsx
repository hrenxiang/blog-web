import React from 'react';
import {UilDribbble, UilGithubAlt, UilInstagram} from "@iconscout/react-unicons";

const Social = () => {
    return (
        <>
            <div className="about_home_social">
                <a href="https://github.com/hrenxiang" className="about_home_social_icon" rel="noreferrer" target={"_blank"}>
                    <UilGithubAlt/>
                </a>
                <a href="https://www.instagram.com/" className="about_home_social_icon" rel="noreferrer" target={"_blank"}>
                    <UilInstagram/>
                </a>
                <a href="https://dribbble.com/" className="about_home_social_icon" rel="noreferrer" target={"_blank"}>
                    <UilDribbble/>
                </a>
            </div>
        </>
    );
};

export default Social;
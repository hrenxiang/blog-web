import React from 'react';
import {BiBadgeCheck} from "react-icons/bi";

const Backend = () => {
    return (
        <>
            <div className="about_skills_content">
                <h3 className="about_skills_title">后端开发技术</h3>

                <div className="about_skills_box">
                    <div className="about_skills_group">
                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Java</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Sql</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Python</h3>
                                <span className="about_skills_level">Basic</span>
                            </div>
                        </div>
                    </div>

                    {/*<div className="about_skills_group">*/}
                    {/*    <div className="about_skills_data">*/}
                    {/*        <BiBadgeCheck/>*/}

                    {/*        <div>*/}
                    {/*            <h3 className="about_skills_name">Spring</h3>*/}
                    {/*            <span className="about_skills_level">Intermediate</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="about_skills_data">*/}
                    {/*        <BiBadgeCheck/>*/}

                    {/*        <div>*/}
                    {/*            <h3 className="about_skills_name">Redis</h3>*/}
                    {/*            <span className="about_skills_level">Intermediate</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="about_skills_data">*/}
                    {/*        <BiBadgeCheck/>*/}

                    {/*        <div>*/}
                    {/*            <h3 className="about_skills_name">MQ</h3>*/}
                    {/*            <span className="about_skills_level">Intermediate</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="about_skills_group">
                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Git</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Docker</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>

                        <div className="about_skills_data">
                            <BiBadgeCheck/>

                            <div>
                                <h3 className="about_skills_name">Server</h3>
                                <span className="about_skills_level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Backend;
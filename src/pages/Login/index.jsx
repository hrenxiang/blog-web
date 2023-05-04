import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Form, Input, message} from 'antd';
import {PasswordRegExp, EmailRegExp} from "../../constants/RegExpConst";
import {RiEyeLine, RiEyeOffLine, RiQqLine, RiWechatLine, RiSmartphoneLine} from "react-icons/ri";
import TsParticles from "../../components/TsParticles";

import "./style.css"
import {login} from "../../api/login/login";

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        eyeState: false
    });

    const [messageApi, contextHolder] = message.useMessage();

    const handleEyeClick = () => {
        setState((prevState) => (
                {
                    email: prevState.email,
                    password: prevState.password,
                    eyeState: !prevState.eyeState
                }
            )
        );
    };

    const handleChange = (event) => {
        // console.log('handleChange target', event.target)
        // console.log('handleChange target name', event.target.name)
        // console.log('handleChange target value', event.target.value)

        setState((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value
            }
        ));
    }

    const handleOk = () => {
        if (!state.email) {
            messageApi.error('邮箱不能为空！').then(() => {
            });
        } else if (!EmailRegExp.test(state.email)) {
            messageApi.error('请输入格式正确的邮箱！').then(() => {
            });
        } else if (!state.password) {
            messageApi.error('密码不能为空').then(() => {
            });
        } else if (!PasswordRegExp.test(state.password)) {
            messageApi.error('请输入格式正确的密码！').then(() => {
            });
        } else {
            let params = {
                username: state.email,
                password: state.password
            }

            // 调用登录方法
            login(params).then((res) => {
                if (res.code === 0) {
                    messageApi.info("登录成功").then(() => {
                    });
                } else {
                    messageApi.error(res.message).then(() => {
                    });
                }
            });
        }
    }

    return (
        <div className="auth">

            <TsParticles/>

            <div className="auth-container">

                {contextHolder}

                <div className="login">

                    <div className="hero">
                        <h2>很高兴见到你！</h2>
                        <p>如果你没有账号，可以 <Link to='/register'>进行注册</Link>.</p>
                    </div>

                    <div className="main">
                        <Form className='form'>
                            <p>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="邮箱"
                                    onChange={handleChange}
                                />
                            </p>

                            <p className="password">
                                <Input
                                    type={state.eyeState ? 'text' : 'password'}
                                    name="password"
                                    placeholder="密码"
                                    onChange={handleChange}
                                />

                                <i onClick={handleEyeClick}>{state.eyeState ? <RiEyeLine/> : <RiEyeOffLine/>}</i>

                                <Link to='/register'>找回密码</Link>
                            </p>

                            <p>
                                <Input
                                    type="submit"
                                    className="submit"
                                    value="登录"
                                    onClick={handleOk}
                                />
                            </p>
                        </Form>

                        <div className="options">
                            <div className="separator">
                                <p>使用其他方式登录</p>
                            </div>
                            <ul>
                                <li><Link to='/register'><RiQqLine className="ri-2x"/></Link></li>
                                <li><Link to='/register'><RiWechatLine className="ri-2x"/></Link></li>
                                <li><Link to='/register'><RiSmartphoneLine className="ri-2x"/></Link></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};


export default Login;

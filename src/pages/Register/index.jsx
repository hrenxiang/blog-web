import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Form, Input, message, notification} from 'antd';
import {EmailRegExp, PasswordRegExp} from "../../constants/RegExpConst";
import TsParticles from "../../components/TsParticles";
import {RiEmotionLine, RiEyeLine, RiEyeOffLine, RiQqLine, RiWechatLine, RiSmartphoneLine} from "react-icons/ri";
import {toRegister} from "../../api/login/login"

import "./style.css"

const Register = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        eyeState: false
    });

    const [messageApi, contextHolder] = message.useMessage();

    const [notificationApi, contextHolderNotification] = notification.useNotification();

    const navigate = useNavigate();

    const handleEyeClick = () => {
        setState((prevState) => (
                {
                    ...prevState,
                    email: prevState.email,
                    password: prevState.password,
                    confirmPassword: prevState.confirmPassword,
                    eyeState: !prevState.eyeState
                }
            )
        );
    };

    const openNotification = () => {
        let notificationKey = 'password-notification';

        notificationApi.destroy(notificationKey);

        notificationApi.open({
            message: '密码规范',
            description:
                '密码长度最少6位，包括至少1个大写字母，1个小写字母，1个数字。',
            icon: <RiEmotionLine/>,
            duration: 6,
            key: notificationKey
        });
    };

    const handleChange = (event) => {
        setState((prevState) => (
                {
                    ...prevState,
                    [event.target.name]: event.target.value
                }
            )
        );
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
        } else if (!state.confirmPassword) {
            messageApi.error('请确认你的密码').then(() => {
            });
        } else if (state.confirmPassword !== state.password) {
            messageApi.error('两次输入的密码不匹配！').then(() => {
            });
        } else {
            let params = {
                username: state.email,
                password: state.password
            }
            // 调用注册方法
            toRegister(params).then((res) => {
                if (res.code === 0) {
                    messageApi.info("注册成功").then(() => {
                    });
                    let timer = setTimeout(() => {
                        navigate("/login");
                        clearTimeout(timer);
                    }, 2000);

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
                {contextHolderNotification}

                <div className="login">

                    <div className="hero">
                        <h2>很高兴见到你！</h2>
                        <p>如果你已有账号，可以 <Link to='/login'>进行登录</Link>.</p>
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
                                    onClick={openNotification}
                                />

                                <i onClick={handleEyeClick}>{state.eyeState ? <RiEyeLine/> : <RiEyeOffLine/>}</i>
                            </p>

                            <p className="password">
                                <Input
                                    type={state.eyeState ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="确认密码"
                                    onChange={handleChange}
                                    onClick={openNotification}
                                />

                                <i onClick={handleEyeClick}>{state.eyeState ? <RiEyeLine/> : <RiEyeOffLine/>}</i>
                            </p>

                            <p>
                                <Input
                                    type="submit"
                                    className="submit"
                                    value="注册"
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


export default Register;

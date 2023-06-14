import React, { useRef } from 'react';
import "./style.css";
import {BiMailSend, BiPhoneCall, BiRightArrowAlt} from "react-icons/bi";
import {BsTencentQq} from "react-icons/bs";
import emailjs from '@emailjs/browser';
import {message} from "antd";

const AboutContact = () => {

    const form = useRef();

    const [messageApi, contextHolderMessage] = message.useMessage();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rmndb53', 'template_o3db1ge', form.current, 'ExHaXhI5qhI_zx9ju')
            .then((result) => {
                console.log(result.text);
                handleSaveApikeySuccess();
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSaveApikeySuccess = () => {
        messageApi.open({
            type: 'success',
            content: '消息发送成功！',
        }).then(() => {
        });
    };

    return (
        <>
            {contextHolderMessage}
            <section className="about_contact_section" id="about_contact">
                <h2 className="about_contact_section_title">联系方式</h2>
                <span className="about_contact_section_subtitle">尽情联系我</span>

                <div className="about_contact_container">
                    <div className="about_contact_content">
                        <h3 className="about_contact_title">和我谈谈</h3>
                        <div className="about_contact_info">
                            <div className="about_contact_card">
                                <i className="about_contact_card_icon"><BiMailSend/></i>
                                <h3 className="about_contact_card_title">邮箱</h3>
                                <span className="about_contact_card_data">huang.rx.life@hotmail.com</span>

                                <a href="/" className="about_contact_button">写给我 <i
                                    className="about_contact_card_icon"><BiRightArrowAlt/></i></a>
                            </div>

                            <div className="about_contact_card">
                                <i className="about_contact_card_icon"><BiPhoneCall/></i>
                                <h3 className="about_contact_card_title">电话</h3>
                                <span className="about_contact_card_data">152 - ****** - 27</span>

                                <a href="/" className="about_contact_button">打给我 <i
                                    className="about_contact_card_icon"><BiRightArrowAlt/></i></a>
                            </div>

                            <div className="about_contact_card">
                                <i className="about_contact_card_icon"><BsTencentQq/></i>
                                <h3 className="about_contact_card_title">QQ</h3>
                                <span className="about_contact_card_data">2295701930</span>

                                <a href="/" className="about_contact_button">添加好友 <i
                                    className="about_contact_card_icon"><BiRightArrowAlt/></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="about_contact_content">
                        <h3 className="about_contact_title">把你的计划写下来</h3>

                        <form ref={form} onSubmit={sendEmail} className="about_contact_form">
                            <div className="about_contact_form_div">
                                <label className="about_contact_form-tag">名称</label>
                                <input type="text"
                                       name="name"
                                       className="about_contact_form_input"
                                       placeholder="填写你的名称！"/>
                            </div>

                            <div className="about_contact_form_div">
                                <label className="about_contact_form-tag">邮箱</label>
                                <input type="email"
                                       name="email"
                                       className="about_contact_form_input"
                                       placeholder="填写你的名称！"/>
                            </div>

                            <div className="about_contact_form_div about_contact_form_area">
                                <label className="about_contact_form-tag">计划</label>
                                <textarea
                                    name="project"
                                    className="about_contact_form_input"
                                    cols={30}
                                    rows={10}
                                    placeholder="请写你的信息！">
                                </textarea>
                            </div>

                            <button className="about_home_button">
                                发送邮件
                                <svg
                                    className="button__icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                        fill="var(--black-1b)"
                                    ></path>
                                    <path
                                        d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                        fill="var(--black-1b)"
                                    ></path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContact;
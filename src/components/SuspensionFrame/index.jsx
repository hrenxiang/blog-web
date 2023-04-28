import React, {useState} from 'react';
import {Button} from 'antd';
import {HiArrowSmRight} from "react-icons/hi"
import {useNavigate} from "react-router-dom";
import "./style.css"
import {LogoIcon} from "../../constants/IconConst";
import {AiOutlineMenu} from "react-icons/ai";
import {RiArrowGoBackFill, RiMoreLine} from "react-icons/ri";
import {IoMdSwitch} from "react-icons/io";



const SuspensionFrame = () => {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const goBack = (num) => {
        navigate(num);
    }

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const switchTemplate = () => {
        document.documentElement.classList.toggle('dark-mode')
    }


    return (
        <div className="profile">
            <div className="photo">
                <img src={LogoIcon} alt="n"/>
            </div>
            <div className="content">
                <div className="text">
                    Quick！
                </div>
                <div className="btn"  onClick={toggleActive}>

                    {isActive ? <Button type="primary" icon={<HiArrowSmRight/>}/> :
                        <Button type="primary" icon={<AiOutlineMenu/>}/>}

                </div>
            </div>
            <div className={`sf-expansion ${isActive ? "active" : ""}`}>

                <Button  shape="circle" icon={<RiArrowGoBackFill/>} onClick={() => {goBack(-1)}} />
                <Button  shape="circle" icon={<IoMdSwitch/>} onClick={switchTemplate} />
                <Button  shape="circle" icon={<RiMoreLine/>}  />

            </div>
        </div>
    );
};

export default SuspensionFrame;
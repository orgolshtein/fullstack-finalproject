import { useState } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import * as AppColor from "../../styles/Colors";
import AppLogo from "../AppLogo";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");

    const forgotClickHandler = () => {
        setHeaderMsg("Temporary Message! Need to create Forgot Password Component");
        setTimeout(()=>{
            setHeaderMsg("");
        }, 3000);
    }

    const loginClickHandler = () =>{
        setHeaderMsg("Username/Email or Password does not exist");
        setTimeout(()=>{
            setHeaderMsg("");
        }, 20000);
    };

    const joinClickHandler = () => {
        setHeaderMsg("Temporary Message! Need to create Registration Popup Component");
        setTimeout(()=>{
            setHeaderMsg("");
        }, 3000);
    };

    return (
        <HeaderDiv>
            <AppLogo res="10" zindex="2" cursor="pointer" alt="mainlogo" />
            <div>
                <input
                type="text"
                placeholder="Username / Email"
                />
                <input
                type="text"
                placeholder="Password:"
                />
                <button className="loginButton" onClick={loginClickHandler}>Login</button>
                <span></span>
                <span className="msgContainer">{headerMsg}</span>
                <span><a onClick={forgotClickHandler}>Forgotten Password?</a></span>
                <button className="joinButton" onClick={joinClickHandler}>Join Now</button>
            </div>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    background-color: ${AppColor.MainDark};
    font-weight: 300;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40rem;
    padding: 0.7rem 5rem 1.15rem;
    height: 7.8rem;
    z-index: 100;

    div {
        display: grid;
        grid-template-columns: 12rem 12rem 8rem;
        grid-template-rows: 2rem 0.1rem 1rem;
        position: relative;
        top: 1rem;
        gap: 0.7rem;
    }

    a{
        font-weight: 550;
        text-decoration: underline;
        cursor: pointer;
        transition: color .15s ease-out;
    }

    a:hover {
        color: ${darken(0.2, AppColor.MainText)};
    }

    a:active {
        color: ${lighten(0.2, AppColor.MainText)};
    }

    input{
        font-size: 1rem;
        border-radius: 0;
        border-color: ${AppColor.InputBorder};
        box-shadow: none;
        color: ${AppColor.InputText};
        border-width: 1px;
        padding: 0 2.5em 0 0.56em;
        display: inline-block;
        margin: 0;
        width: 100%;
        font-weight: 530;
        border-style: solid;
        background: ${AppColor.InputBackground};
        transition: box-shadow 100ms,border 100ms;
        line-height: 1;
    }

    .msgContainer{
        color: ${AppColor.ErrorText};
        font-weight: 100;
        font-size: 90%;
    }

    .loginButton{
        background-color: ${AppColor.LoginBtn};
        color: ${AppColor.ButtonText};
        min-width: 7.5rem;
        font-size: .786rem;
        text-transform: uppercase;
        font-weight: 700;
        border: 0;
        border-radius: 0.1rem;
        text-align: center;
        cursor: pointer;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
        transition: background-color .15s ease-out;
        transition: color .15s ease-out;
    }

    .loginButton:hover{
        background-color: ${darken(0.2, AppColor.LoginBtn)};
    }

    .loginButton:active {
        color: ${darken(0.8, AppColor.ButtonText)};
        background-color: ${lighten(0.1, AppColor.LoginBtn)};
    }

    .joinButton{
        background-color: ${AppColor.JoinBtn};
        color: ${AppColor.ButtonText};
        min-width: 7.5rem;
        font-size: .786rem;
        text-transform: uppercase;
        font-weight: 700;
        border: 0;
        border-radius: 0.1rem;
        text-align: center;
        cursor: pointer;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
        transition: background-color .15s ease-out;
        transition: color .15s ease-out;
    }

    .joinButton:hover {
        background-color: ${darken(0.1, AppColor.JoinBtn)};
    }

    .joinButton:active {
        color: ${darken(0.8, AppColor.ButtonText)};
        background-color: ${lighten(0.1, AppColor.JoinBtn)};
    }
`
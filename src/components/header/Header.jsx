import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { lighten, darken } from "polished";
import * as AppColor from "../../styles/Colors";
import AppLogo from "../AppLogo";
import { AppContext } from "../../state/AppContext";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [loginInputDisabled, setLoginInputDisabled] = useState(false);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { updateforgotPasswordDisplay, updateRegBlockDisplay } = useContext(AppContext);

    let userInput = useRef();
    let passInput = useRef();

    const passwordIconClickHandler = () => {
        if (passwordInputType === "password") {
            setPasswordInputType("text");
            setPasswordIcon("/src/assets/icons/password_visible_icon.svg");
          } else {
            setPasswordInputType("password");
            setPasswordIcon("/src/assets/icons/password_invisible_icon.svg");
          }
    };

    const forgotClickHandler = () => {
        updateforgotPasswordDisplay("flex");
    };

    const loginClickHandler = () =>{
        if (userInput.current.value === "" || passInput.current.value === "") {
            setHeaderMsg("");
            setHeaderMsg("Username/Email and Password are required");
        } else {
            setHeaderMsg("");
            setLoginInputDisabled(true);
            setLoginBackgroundColor(AppColor.DisbledInputBackground);
            setLoginBtnActive(true);
            setTimeout(()=>{
                setHeaderMsg("Username/Email or Password does not exist");
                setLoginInputDisabled(false);
                setLoginBackgroundColor(AppColor.InputBackground);
                setLoginBtnActive(false);
            }, Math.floor(Math.random() * (5000-1000)+1000));
        }
    };

    const joinClickHandler = () => {
        setJoinBtnActive(true);
        setTimeout(()=>{
            updateRegBlockDisplay("flex");
            setJoinBtnActive(false);
            setTimeout(()=>{
                updateRegBlockDisplay("none");
            }, 3000)
        }, Math.floor(Math.random() * (2000-1000)+1000));
    };

    return (
        <HeaderDiv>
            <div>
                <AppLogo 
                    $res="10" 
                    $pos="sticky" 
                    $left="5rem" 
                    $zindex="2" 
                    cursor="pointer" 
                    alt="mainlogo" 
                />
                <div>
                    <span className="inputContainer">
                        <input
                        type="text"
                        placeholder="Username / Email"
                        disabled={loginInputDisabled}
                        background={loginBackgroundColor}
                        ref={userInput}
                        />
                    </span> 
                    <span className="inputContainer">
                        <input
                        type={passwordInputType}
                        placeholder="Password:"
                        disabled={loginInputDisabled}
                        background={loginBackgroundColor}
                        ref={passInput}
                        />
                        {
                            loginBtnActive ?
                            <img src={passwordIcon} cursor={"arrow"}/> :
                            <img src={passwordIcon} cursor={"pointer"} onClick={passwordIconClickHandler}/>
                        }
                    </span>       
                    {
                        loginBtnActive ?
                        <button className="loginButtonActive">Login</button> :
                        <button className="loginButton" onClick={loginClickHandler}>Login</button>
                    }
                    <span></span>
                    <span className="msgContainer">{headerMsg}</span>
                    <span><a onClick={forgotClickHandler}>Forgotten Password?</a></span>
                    {
                        joinBtnActive ?
                        <button className="joinButtonActive">Join Now</button> :
                        <button className="joinButton" onClick={joinClickHandler}>Join Now</button>
                    }
                </div>
            </div>
        </HeaderDiv>
    );
};

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: ${AppColor.MainDark};
    height: 7.8rem;
    width: 100%;
    font-weight: 300;
    position: fixed;
    top: 0;
    z-index: 101;
    
    div{
        width: 90rem;
        display: block;
        padding: 0.7rem 5rem 1.15rem;
        height: 7.8rem;
        position: fixed;
    
        div {
            display: grid;
            grid-template-columns: 12rem 12rem 8rem;
            grid-template-rows: 2rem 0.1rem 1rem;
            position: absolute;
            top: 1rem;
            left: 49rem;
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
    
        .inputContainer{
            font-size: 1rem;
            border-radius: 0;
            border-color: ${AppColor.InputBorder};
            box-shadow: none;
            color: ${AppColor.InputText};
            border-width: 1px;
            display: inline-block;
            width: 100%;
            font-weight: 530;
            border-style: solid;
            background: ${(props)=>(props.background)};
            transition: box-shadow 100ms,border 100ms;
            line-height: 1;
            
            input{
                border:none;
                width: 100%;
                padding: 0 2.5em 0 0.56em;
                height: 100%;
            }

            img{
                display: inline-block;
                height: 100%;
                min-height: 100%;
                max-height: 100%;
                width: 1.2em;
                min-width: initial;
                margin-right: 0.285em;
                background-size: contain;
                opacity: .60;
                top: -2.2rem;
                vertical-align: middle;
                overflow: hidden;
                text-align: left;
                text-indent: -3000px;
                position: absolute;
                left: 27.5rem;
                font-size: 1.25rem;
                cursor: ${(props) => props.cursor};
            }
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
    
        .loginButtonActive {
            color: ${darken(0.3, AppColor.ButtonText)};
            background-color: ${darken(0.4, AppColor.LoginBtn)};
            text-transform: uppercase;
            font-size: .786rem;
            font-weight: 700;
            border: 0;
            border-radius: 0.1rem;
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
    
        .joinButtonActive {
            color: ${darken(0.3, AppColor.ButtonText)};
            background-color: ${darken(0.4, AppColor.JoinBtn)};
            text-transform: uppercase;
            font-size: .786rem;
            font-weight: 700;
            border: 0;
            border-radius: 0.1rem;
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 2;
            grid-row-end: 4;
        }
    }
`
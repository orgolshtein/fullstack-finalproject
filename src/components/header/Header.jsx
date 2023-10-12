import { useContext, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import styled from "styled-components";
import { darken } from "polished";
import * as AppColor from "../../styles/Colors";
import AppLogo from "../AppLogo";
import { LoginHeaderBtn, LoginHeaderBtnActive, JoinHeaderBtn, JoinHeaderBtnActive } from "../../styles/Buttons";
import { InputHeader, InputContainerHeader } from "../../styles/Inputs";
import { PasswordVisIcon } from "../../styles/Elements";

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
            }, 4000)
        }, Math.floor(Math.random() * (2000-1000)+1000));
    };

    return (
        <HeaderDiv>
            <div className="headerContent">
                <AppLogo 
                    $res="10" 
                    $pos="sticky" 
                    $left="5rem" 
                    $zindex="2" 
                    cursor="pointer" 
                    alt="mainlogo" 
                />
                <div className="authGrid">
                    <InputContainerHeader>
                        <InputHeader
                        type="text"
                        placeholder="Username / Email"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={userInput}
                        />
                    </InputContainerHeader> 
                    <InputContainerHeader>
                        <InputHeader
                        type={passwordInputType}
                        placeholder="Password:"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={passInput}
                        />
                        {
                            loginBtnActive ?
                            <PasswordVisIcon src={passwordIcon} cursor={"arrow"}/> :
                            <PasswordVisIcon src={passwordIcon} cursor={"pointer"} onClick={passwordIconClickHandler}/>
                        }
                    </InputContainerHeader>       
                    {
                        loginBtnActive ?
                        <LoginHeaderBtnActive>Login</LoginHeaderBtnActive> :
                        <LoginHeaderBtn onClick={loginClickHandler}>Login</LoginHeaderBtn>
                    }
                    <span></span>
                    <span className="msgContainer">{headerMsg}</span>
                    <span><a onClick={forgotClickHandler}>Forgotten Password?</a></span>
                    {
                        joinBtnActive ?
                        <JoinHeaderBtnActive>Join Now</JoinHeaderBtnActive> :
                        <JoinHeaderBtn onClick={joinClickHandler}>Join Now</JoinHeaderBtn>
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
    
    .headerContent{
        width: 90rem;
        display: block;
        padding: 0.7rem 5rem 1.15rem;
        height: 7.8rem;
        position: fixed;
    
        .authGrid {
            display: grid;
            grid-template-columns: 12rem 12rem 8rem;
            grid-template-rows: 2rem 0.1rem 1rem;
            position: absolute;
            top: 1.7rem;
            left: 54rem;
            gap: 0.7rem;
        }
    
        a {
            font-weight: 550;
            text-decoration: underline;
            cursor: pointer;
            transition: color .15s ease-out;
            
            &:hover {
                color: ${darken(0.2, AppColor.MainText)};
            }
        }
    
        .msgContainer{
            color: ${AppColor.ErrorText};
            font-weight: 100;
            font-size: 90%;
        }
    }
`
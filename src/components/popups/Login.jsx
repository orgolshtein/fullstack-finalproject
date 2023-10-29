import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import styled from "styled-components";
import { lighten } from "polished";
import * as AppColor from "../../styles/Colors";
import loadingIcon from "../../assets/icons/loading.gif";
import { PopupDiv } from "../../styles/Containers";
import { LoginPopupBtn, LoginPopupBtnActive, JoinPopupBtn, JoinPopupBtnActive, PopupCloseBtn } from "../../styles/Buttons";
import { InputContainerLogin, InputLogin } from "../../styles/Inputs";
import WelcomeBonusOverlay from "../WelcomeBonusOverlay"
import { PasswordVisIcon } from "../../styles/Elements";
import UserIcon from "../../assets/icons/login_user_icon.svg";
import PassIcon from "../../assets/icons/login_password_icon.svg";

export default function Login () {
    const [loginMsg, setLoginMsg] = useState("");
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { 
        isLoginDisplayed, 
        updateLoginDisplay,
        updateforgotPasswordDisplay,
        updateRegBlockDisplay
    } = useContext(AppContext);

    let userInput = useRef();
    let passInput = useRef();
    let loginRef = useRef();

    isLoginDisplayed ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateLoginDisplay(false);
        setLoginMsg("");
        userInput.current.value = "";
        passInput.current.value = "";
    };

    const passwordIconClickHandler = () => {
        if (passwordInputType === "password") {
            setPasswordInputType("text");
            setPasswordIcon("/src/assets/icons/password_visible_icon.svg");
          } else {
            setPasswordInputType("password");
            setPasswordIcon("/src/assets/icons/password_invisible_icon.svg");
          }
    };

    const loginClickHandler = () =>{
        setLoginMsg("");
        if (userInput.current.value === "" || passInput.current.value === "") {
            setLoginMsg("Username/Email and Password are required");
        } else {
            setLoginMsg(<img src={loadingIcon} width="30rem" height="30rem" />);
            setInputDisabled(true);
            setInputBackgroundColor(AppColor.DisbledInputBackground);
            setLoginBtnActive(true);
            setTimeout(()=>{
                setLoginMsg("Username or Password not valid");
                setInputDisabled(false);
                setInputBackgroundColor(AppColor.InputBackground);
                setLoginBtnActive(false);
            }, Math.floor(Math.random() * (5000-1000)+1000));
        }
    };

    const forgotPassClickHandler = () =>{
        updateforgotPasswordDisplay(true);
    };

    const joinClickHandler = () =>{
        setJoinBtnActive(true);
        setTimeout(()=>{
            updateRegBlockDisplay(true);
            setJoinBtnActive(false);
        }, Math.floor(Math.random() * (2000-1000)+1000));
    };

    const inputActive = () => {
        setLoginMsg("");
    };

    useEffect(()=>{
        loginMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    },[loginMsg]);

    const outsideClickHandler = (event) => {
        if (loginRef.current && !loginRef.current.contains(event.target)){
            closeClickHandler();
        }
    };

    return (
        <>
        {
            isLoginDisplayed ?
            <PopupDiv width="26rem" $zindex="106" onClick={outsideClickHandler}>
                <div className="flexContainer">
                    <div className="inner" ref={loginRef}>
                        <PopupCloseBtn onClick={closeClickHandler} $url="src/assets/icons/cross_gray_icon.svg"></PopupCloseBtn>
                        <div className="content">
                            <LoginDiv>
                                <form action="">
                                    <InputContainerLogin $inputbor={inputBorder}>
                                        <img className="inputIcon" src={UserIcon} onClick={()=>{
                                            userInput.current.focus();
                                        }}/>
                                        <InputLogin 
                                            type="text"
                                            placeholder="Username / Email" 
                                            disabled={inputDisabled}
                                            onClick={inputActive}
                                            $background={inputBackgroundColor} 
                                            ref={userInput}
                                        />
                                    </InputContainerLogin>
                                    <InputContainerLogin $inputbor={inputBorder}>
                                        <img className="inputIcon" src={PassIcon} onClick={()=>{
                                            passInput.current.focus();
                                        }}/>
                                        <InputLogin type={passwordInputType}
                                            placeholder="Password:" 
                                            disabled={inputDisabled}
                                            onClick={inputActive}
                                            $background={inputBackgroundColor}
                                            ref={passInput}
                                        />
                                        {
                                        loginBtnActive ?
                                        <PasswordVisIcon width="1.9rem" src={passwordIcon} cursor={"arrow"}/> :
                                        <PasswordVisIcon width="1.9rem" src={passwordIcon} cursor={"pointer"} onClick={passwordIconClickHandler}/>
                                        }
                                    </InputContainerLogin>
                                    {
                                    loginBtnActive ?
                                    <LoginPopupBtnActive>Login</LoginPopupBtnActive> :
                                    <LoginPopupBtn onClick={loginClickHandler} type="button">Login</LoginPopupBtn>
                                    }
                                    {
                                    loginMsg !== "" ?
                                    <div>{loginMsg}</div> : null                          
                                    }
                                </form>
                                <div className="forgotPassLink" onClick={forgotPassClickHandler}>Lost your log in details?</div>
                                <hr />
                                <div className="joinLink">You don't have an account?</div>
                                <WelcomeBonusOverlay 
                                width="13rem"
                                alt="Welcome Bonus"
                            />
                            {
                                joinBtnActive ?
                                <JoinPopupBtnActive>Register</JoinPopupBtnActive> :
                                <JoinPopupBtn onClick={joinClickHandler}>Register</JoinPopupBtn>
                            }
                            </LoginDiv>
                        </div>
                    </div>
                </div>
            </PopupDiv> : null
        }
        </>
    );
}


const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 35rem;
    padding: 2rem;

    form{
        width: 100%;

        div{
            font-size: 1rem;
            color: ${AppColor.ErrorText};
            margin: .5rem 0;
            height: 1rem;
            text-align: center;
            font-weight: bold;
        }

        .inputIcon{
            left: 0.5rem;
            top: 1.2rem;
            width: 1.214em;
            position: absolute;
            display: inline-block;
            opacity: .65;
            transform: translate3d(0,-50%,0);
            cursor: pointer;
        }
    }

    .forgotPassLink{
        font-size: 1.4rem;
        text-decoration: underline;
        cursor: pointer;

        &:hover{
            color: ${lighten(0.3, AppColor.PopupMainText)};
        }
    }

    hr {
        height: 0.5px;
        background-color: ${AppColor.PopupMainText};;
        border: none;
        z-index: 200;
        width: 100%;
    }

    .joinLink{
        font-weight: 300;
        font-size: 1.1rem;
    }
`;
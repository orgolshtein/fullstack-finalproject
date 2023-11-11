import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import { PopupDiv } from "../../styles/containersMain";
import { LoginDiv } from "../../styles/containersPopUp";
import LoadingIcon from "../LoadingIcon";
import { LoginPopupBtn, LoginPopupBtnActive, JoinPopupBtn, JoinPopupBtnActive, PopupCloseBtn } from "../../styles/buttons";
import { InputContainerLogin, InputLogin } from "../../styles/inputs";
import WelcomeBonusOverlay from "../WelcomeBonusOverlay"
import { PasswordVisIcon } from "../../styles/elements";
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
            setLoginMsg(<LoadingIcon $size="2rem" />);
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
        useOuterClick(event,loginRef,closeClickHandler)
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
                            <div className="joinText">You don't have an account?</div>
                            <WelcomeBonusOverlay 
                            $widthwide="13rem"
                            $display="none"
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
};

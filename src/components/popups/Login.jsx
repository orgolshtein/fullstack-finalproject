import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import { PopupDiv } from "../../styles/containersMain";
import { LoginDiv } from "../../styles/containersPopUp";
import { LoginPopupBtn, LoginPopupBtnActive, JoinPopupBtn, JoinPopupBtnActive, PopupCloseBtn } from "../../styles/buttons";
import { InputContainerLogin, InputLogin } from "../../styles/inputs";
import { WelcomeBonusOverlay, PasswordVisIcon } from "../../styles/elements";
import UserIcon from "../../assets/icons/login_user_icon.svg";
import PassIcon from "../../assets/icons/login_password_icon.svg";

export default function Login () {
    const [loginMsg, setLoginMsg] = useState("");
    const [passInputType, setPassInputType] = useState("password");
    const [passIcon, setPassIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { 
        isLoginDisplayed, 
        setIsLoginDisplayed,
        setIsForgotPassDisplayed,
        passIconVisToggle,
        onSubmit,
        openRegBlockPopup
    } = useContext(AppContext);

    let userInput = useRef(null);
    let passInput = useRef(null);
    let loginRef = useRef(null);

    useImpDisableScrollHandler(isLoginDisplayed);

    useEffect(()=>{
        loginMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    },[loginMsg]);

     const loginClickHandler = () =>{
        onSubmit({
            msg: setLoginMsg,
            required: "Username/Email and Password are required",
            notfound: "Username or Password not valid",
            userinput: userInput, 
            passinput: passInput,
            inputdisabled: setInputDisabled,
            bgcolor: setInputBackgroundColor,
            buttonactive: setLoginBtnActive,
            loadersize: "2rem"
        })
    };

    const passIconClickHandler = () =>{
        passIconVisToggle(passInputType, setPassInputType, setPassIcon);
    }

    const outsideClickHandler = (event) => {
        useOuterClick(event,loginRef,() =>{
            setIsLoginDisplayed(false);
            setLoginMsg("");
            userInput.current.value = "";
            passInput.current.value = "";
        })
    };

    return (
        <>
        {
        isLoginDisplayed ?
        <PopupDiv width="26rem" $zindex="106" onClick={outsideClickHandler}>
            <div className="flexContainer">
                <div className="inner" ref={loginRef}>
                    <PopupCloseBtn onClick={() =>{
                        setIsLoginDisplayed(false);
                        setLoginMsg("");
                        userInput.current.value = "";
                        passInput.current.value = "";
                    }} 
                    $url="src/assets/icons/cross_gray_icon.svg" />
                    <div className="content">
                        <LoginDiv>
                            <form action="">
                                <InputContainerLogin $inputbor={inputBorder}>
                                    <img className="inputIcon" src={UserIcon} onClick={()=>{
                                        userInput.current.focus();
                                    }}/>
                                    <InputLogin 
                                        type="text"
                                        autoComplete="on"
                                        placeholder="Username / Email" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setLoginMsg("");
                                        }}
                                        $background={inputBackgroundColor} 
                                        ref={userInput}
                                    />
                                </InputContainerLogin>
                                <InputContainerLogin $inputbor={inputBorder}>
                                    <img className="inputIcon" src={PassIcon} onClick={()=>{
                                        passInput.current.focus();
                                    }}/>
                                    <InputLogin 
                                        type={passInputType}
                                        autoComplete="on"
                                        placeholder="Password:" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setLoginMsg("");
                                        }}
                                        $background={inputBackgroundColor}
                                        ref={passInput}
                                    />
                                    {
                                    loginBtnActive ?
                                    <PasswordVisIcon width="1.9rem" src={passIcon} cursor={"arrow"}/> :
                                    <PasswordVisIcon 
                                        width="1.9rem" 
                                        src={passIcon} 
                                        cursor={"pointer"} 
                                        onClick={passIconClickHandler}
                                    />
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
                            <div className="forgotPassLink" onClick={() =>{
                                setIsForgotPassDisplayed(true);
                            }}>Lost your log in details?</div>
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
                            <JoinPopupBtn onClick={()=>openRegBlockPopup(setJoinBtnActive)}>Register</JoinPopupBtn>
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

import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import * as L from "../../styles/popups";
import { WelcomeBonusOverlay, PasswordVisIcon } from "../../styles/global";
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

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        clearErrors,
        formState: { errors }
      } = useForm();

    const loginRef = useRef();

    useImpDisableScrollHandler(isLoginDisplayed);

    useEffect(()=>{
        loginMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    },[loginMsg]);

     const submitHandler = () =>{
        onSubmit({
            msg: setLoginMsg,
            notfound: "Username or Password not valid",
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
            setValue("username", "");
            setValue("password", "");
            clearErrors();
        })
    };

    return (
        <>
        {
        isLoginDisplayed ?
        <L.PopupDiv width="26rem" $zindex="106" onClick={outsideClickHandler}>
            <div className="flexContainer">
                <div className="inner" ref={loginRef}>
                    <L.PopupCloseBtn onClick={() =>{
                        setIsLoginDisplayed(false);
                        setLoginMsg("");
                        setValue("username", "");
                        setValue("password", "");
                        clearErrors();
                    }} 
                    $url="src/assets/icons/cross_gray_icon.svg" />
                    <div className="content">
                        <L.LoginDiv>
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <L.InputContainerLogin>
                                    <img className="inputIcon" src={UserIcon} onClick={()=>{
                                        setFocus("username");
                                    }}/>
                                    <L.InputLogin 
                                        type="text"
                                        autoComplete="on"
                                        placeholder="Username / Email" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setLoginMsg("");
                                        }}
                                        $background={inputBackgroundColor} 
                                        $inputbor={inputBorder}
                                        $error_styled={errors.username}
                                        {...register("username", {
                                        required: "Username/Email is required",
                                        minLength: { value:3, message: "Username/Email is too short" }
                                        })}
                                    />
                                </L.InputContainerLogin>
                                <p>{errors.username?.message}</p>
                                <L.InputContainerLogin>
                                    <img className="inputIcon" src={PassIcon} onClick={()=>{
                                        setFocus("password");;
                                    }}/>
                                    <L.InputLogin
                                        type={passInputType}
                                        autoComplete="on"
                                        placeholder="Password:" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setLoginMsg("");
                                        }}
                                        $background={inputBackgroundColor}
                                        $inputbor={inputBorder}
                                        $error_styled={errors.password}
                                        {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 3, message: "Password is too short" }
                                        })}
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
                                </L.InputContainerLogin>
                                <p>{errors.password?.message}</p>
                                {
                                loginBtnActive ?
                                <L.LoginPopupBtnActive disabled={true}>Login</L.LoginPopupBtnActive> :
                                <L.LoginPopupBtn>Login</L.LoginPopupBtn>
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
                            <L.JoinPopupBtnActive>Register</L.JoinPopupBtnActive> :
                            <L.JoinPopupBtn onClick={()=>openRegBlockPopup(setJoinBtnActive)}>Register</L.JoinPopupBtn>
                        }
                        </L.LoginDiv>
                    </div>
                </div>
            </div>
        </L.PopupDiv> : null
        }
        </>
    );
};

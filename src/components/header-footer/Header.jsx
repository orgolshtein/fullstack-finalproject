import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import * as AppColor from "../../styles/colors";
import { HeaderDiv, LoginHeaderBtn, JoinHeaderBtn, InputHeader } from "../../styles/header.footer";
import { AppLogo, PasswordVisIcon } from "../../styles/global";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");
    const [passInputType, setPassInputType] = useState("password");
    const [passwordIcon, setPassIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [loginInputBorder, setLoginInputBorder] = useState(AppColor.InputBorder);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState(AppColor.InputBackground);
    const [isLoginInputDisabled, setIsLoginInputDisabled] = useState(false);
    const [isLoginBtnActive, setIsLoginBtnActive] = useState(false);
    const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);
    const { 
        setIsForgotPassDisplayed, 
        setIsGameOverlayDisplayed,
        passIconVisToggle,
        openLoginPopup,
        onSubmit,
        openRegBlockPopup
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors }
      } = useForm();

    useEffect(()=>{
        headerMsg.length > 0 ?
        setLoginInputBorder(AppColor.InputErrorBorder) :
        setLoginInputBorder(AppColor.InputBorder)
    }, [headerMsg]);

    const passVisClickHandler = () => {
        passIconVisToggle(passInputType, setPassInputType, setPassIcon, setIsGameOverlayDisplayed)
    };

    const submitHandler = () =>{
        onSubmit({
            msg: setHeaderMsg,
            notfound: "Username/Email or Password does not exist",
            inputdisabled: setIsLoginInputDisabled,
            bgcolor: setLoginBackgroundColor,
            buttonactive: setIsLoginBtnActive,
            loadersize: "2.7rem",
            loaderleft: "4.5rem",
            displaygameoverlay: setIsGameOverlayDisplayed
        })
    };

    return (
    <HeaderDiv>
        <div className="headerContent">
            <Link to="/" onClick={()=>setIsGameOverlayDisplayed(false)}>
                <AppLogo 
                    $size="10"
                    $sizemedium="6"  
                    $position="sticky" 
                    $leftwide="5"
                    $left="4"
                    $zindex="2" 
                    cursor="pointer" 
                    alt="Main Logo"
                />
            </Link>
            <form className="authGrid" onSubmit={handleSubmit(submitHandler)}>
                <span className="inputContainer">
                    <InputHeader 
                        $inputbor={loginInputBorder}
                        type="text"
                        autoComplete="on"
                        placeholder="Username / Email"
                        disabled={isLoginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
                            clearErrors();
                        }}
                        $error_styled={errors.username}
                        {...register("username", {
                        required: "Username/Email is required",
                        minLength: { value:3, message: "Username/Email is too short" }
                        })}
                    />
                </span> 
                <span className="inputContainer">
                    <InputHeader 
                        $inputbor={loginInputBorder}
                        type={passInputType}
                        autoComplete="on"
                        placeholder="Password:"
                        disabled={isLoginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
                            clearErrors();
                        }}
                        $error_styled={errors.password}
                        {...register("password", {
                        required: "Password is required",
                        minLength: { value:3, message: "Password is too short" }
                        })}
                    />
                    <PasswordVisIcon 
                        width="1.2em" 
                        src={passwordIcon} 
                        cursor={isLoginBtnActive ? "arrow" : "pointer"} 
                        onClick={isLoginBtnActive ? null : passVisClickHandler}
                    />
                </span>  
                <LoginHeaderBtn disabled={isLoginBtnActive ? true : false}>Login</LoginHeaderBtn>
                {errors.username?<p>{errors.username.message}</p> :<span></span> }
                {errors.password?
                <p>{errors.password.message}</p> :
                <span className="msgContainer">{headerMsg}</span> }
                <span><a onClick={() => {
                    setIsGameOverlayDisplayed(false);
                    setIsForgotPassDisplayed(true);
                }}>Forgotten Password?</a></span>
                <span></span>
                <JoinHeaderBtn 
                    type="button" 
                    disabled={isJoinBtnActive ? true : false} 
                    onClick={()=>openRegBlockPopup(setIsJoinBtnActive, setIsGameOverlayDisplayed)}
                >Join Now</JoinHeaderBtn>
            </form>
            <div className="authResponsive">
                <LoginHeaderBtn onClick={() => {
                    openLoginPopup();
                }}>Login</LoginHeaderBtn>
                <JoinHeaderBtn 
                    disabled={isJoinBtnActive ? true : false}
                    onClick={()=>openRegBlockPopup(setIsJoinBtnActive, setIsGameOverlayDisplayed)}
                >Join Now</JoinHeaderBtn>
            </div>
        </div>
    </HeaderDiv>
    );
};

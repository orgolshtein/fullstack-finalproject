import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import * as AppColor from "../../styles/colors";
import { HeaderDiv, LoginHeaderBtn, JoinHeaderBtn, InputHeader } from "../../styles/header.footer";
import { AppLogo, PasswordVisIcon } from "../../styles/global";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";

export default function Header (){
    const [submitErrMsg, setSubmitErrMsg] = useState("");
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

    useInputBorderToggle(submitErrMsg, setLoginInputBorder, AppColor.InputErrorBorder, AppColor.InputBorder);

    return (
    <HeaderDiv>
        <div className="headerContent">
            <Link to="/" onClick={()=>setIsGameOverlayDisplayed(false)}>
                <AppLogo 
                    $size="10"
                    $size_medium="6"  
                    $position="sticky" 
                    $left_wide="5"
                    $left="4"
                    $z_index="2" 
                    cursor="pointer" 
                    alt="Main Logo"
                />
            </Link>
            <form className="authGrid" onSubmit={handleSubmit(() =>{
                onSubmit({
                    msg: setSubmitErrMsg,
                    notfound: "Username/Email or Password does not exist",
                    inputdisabled: setIsLoginInputDisabled,
                    bgcolor: setLoginBackgroundColor,
                    buttonactive: setIsLoginBtnActive,
                    loadersize: "2.7rem",
                    loaderleft: "4.5rem",
                    displaygameoverlay: setIsGameOverlayDisplayed
                })
            })}>
                <span className="inputContainer">
                    <InputHeader 
                        $input_border={loginInputBorder}
                        type="text"
                        autoComplete="on"
                        placeholder="Username / Email"
                        disabled={isLoginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setSubmitErrMsg("");
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
                        $input_border={loginInputBorder}
                        type={passInputType}
                        autoComplete="on"
                        placeholder="Password:"
                        disabled={isLoginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setSubmitErrMsg("");
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
                        cursor={isLoginBtnActive ? "default" : "pointer"} 
                        onClick={isLoginBtnActive ? null : () => {
                            passIconVisToggle(
                                passInputType, 
                                setPassInputType, 
                                setPassIcon, 
                                setIsGameOverlayDisplayed
                            )
                        }}
                    />
                </span>  
                <LoginHeaderBtn disabled={isLoginBtnActive ? true : false}>Login</LoginHeaderBtn>
                {errors.username?<p>{errors.username.message}</p> :<span></span> }
                {
                    errors.password ?
                    <p>{errors.password.message}</p> :
                    <span className="msgContainer">{submitErrMsg}</span>
                 }
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

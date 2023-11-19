import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as AppColor from "../../styles/colors";
import { HeaderDiv } from "../../styles/containersMain";
import { AppLogo } from "../../styles/elements";
import { LoginHeaderBtn, LoginHeaderBtnActive, JoinHeaderBtn, JoinHeaderBtnActive } from "../../styles/buttons";
import { InputContainerHeader, InputHeader } from "../../styles/inputs";
import { PasswordVisIcon } from "../../styles/elements";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");
    const [passInputType, setPassInputType] = useState("password");
    const [passwordIcon, setPassIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [loginInputBorder, setLoginInputBorder] = useState(AppColor.InputBorder);
    const [loginInputDisabled, setLoginInputDisabled] = useState(false);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
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
        setValue,
        setFocus,
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
            inputdisabled: setLoginInputDisabled,
            bgcolor: setLoginBackgroundColor,
            buttonactive: setLoginBtnActive,
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
                    alt="mainlogo"
                />
            </Link>
            <form className="authGrid" onSubmit={handleSubmit(submitHandler)}>
                <InputContainerHeader >
                    <InputHeader $inputbor={loginInputBorder}
                        type="text"
                        autoComplete="on"
                        placeholder="Username / Email"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
                        }}
                        $error_styled={errors.username}
                        {...register("username", {
                        required: "Username/Email is required",
                        minLength: { value:3, message: "Username/Email is too short" }
                        })}
                    />
                </InputContainerHeader> 
                <InputContainerHeader>
                    <InputHeader $inputbor={loginInputBorder}
                        type={passInputType}
                        autoComplete="on"
                        placeholder="Password:"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
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
                        cursor={loginBtnActive ? "arrow" : "pointer"} 
                        onClick={loginBtnActive ? null : passVisClickHandler}
                    />
                </InputContainerHeader>  
                {
                loginBtnActive ?
                <LoginHeaderBtnActive disabled={true}>Login</LoginHeaderBtnActive> :
                <LoginHeaderBtn>Login</LoginHeaderBtn>
                }
                {errors.username?<p>{errors.username.message}</p> :<span></span> }
                {errors.password?<p>{errors.password.message}</p> :<span className="msgContainer">{headerMsg}</span> }
                <span><a onClick={() => {
                    setIsGameOverlayDisplayed(false);
                    setIsForgotPassDisplayed(true);
                }}>Forgotten Password?</a></span>
                <span></span>
                {
                joinBtnActive ?
                <JoinHeaderBtnActive type="button" >Join Now</JoinHeaderBtnActive> :
                <JoinHeaderBtn type="button" onClick={()=>openRegBlockPopup(setJoinBtnActive, setIsGameOverlayDisplayed)}>Join Now</JoinHeaderBtn>
                }
            </form>
            <div className="authResponsive">
                <LoginHeaderBtn onClick={() => {
                    openLoginPopup(null);
                }}>Login</LoginHeaderBtn>
                {
                joinBtnActive ?
                <JoinHeaderBtnActive>Join Now</JoinHeaderBtnActive> :
                <JoinHeaderBtn onClick={
                    ()=>openRegBlockPopup(setJoinBtnActive, setIsGameOverlayDisplayed)
                }>Join Now</JoinHeaderBtn>
                }
            </div>
        </div>
    </HeaderDiv>
    );
};

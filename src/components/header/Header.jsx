import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { Link } from "react-router-dom";
import * as AppColor from "../../styles/colors";
import { HeaderDiv } from "../../styles/containersMain";
import AppLogo from "../AppLogo";
import LoadingIcon from "../LoadingIcon"
import { LoginHeaderBtn, LoginHeaderBtnActive, JoinHeaderBtn, JoinHeaderBtnActive } from "../../styles/buttons";
import { InputContainerHeader, InputHeader } from "../../styles/inputs";
import { PasswordVisIcon } from "../../styles/elements";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [loginInputBorder, setLoginInputBorder] = useState(AppColor.InputBorder);
    const [loginInputDisabled, setLoginInputDisabled] = useState(false);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { 
        updateforgotPasswordDisplay, 
        updateRegBlockDisplay, 
        updateGameOverlayDisplay, 
        updateLoginDisplay 
    } = useContext(AppContext);

    let userInput = useRef();
    let passInput = useRef();

    const logoClickHandler = () => {
        updateGameOverlayDisplay(false);
    };

    const passwordIconClickHandler = () => {
        updateGameOverlayDisplay(false);
        passwordInputType === "password" ? 
            setPasswordInputType("text") : 
            setPasswordInputType("password");
        passwordInputType === "password" ? 
            setPasswordIcon("/src/assets/icons/password_visible_icon.svg") : 
            setPasswordIcon("/src/assets/icons/password_invisible_icon.svg");
    };

    const forgotClickHandler = () => {
        updateGameOverlayDisplay(false);
        updateforgotPasswordDisplay(true);
    };

    const loginClickHandler = () =>{
        updateGameOverlayDisplay(false);
        setHeaderMsg("");
        userInput.current.value === "" || passInput.current.value === "" ? 
            setHeaderMsg("Username/Email and Password are required") :
        (() => {
            setHeaderMsg(<LoadingIcon $size="2.7rem" $marginleft="4.5rem" />);
            setLoginInputDisabled(true);
            setLoginBackgroundColor(AppColor.DisbledInputBackground);
            setLoginBtnActive(true);
            setTimeout(()=>{
                setHeaderMsg("Username/Email or Password does not exist");
                setLoginInputDisabled(false);
                setLoginBackgroundColor(AppColor.InputBackground);
                setLoginBtnActive(false);
            }, Math.floor(Math.random() * (5000-1000)+1000));
        })();
    };

    const loginResponsiveClickHandler = () => {
        updateGameOverlayDisplay(false);
        updateLoginDisplay(true);
    }

    const joinClickHandler = () => {
        setJoinBtnActive(true);
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
            updateRegBlockDisplay(true);
            setJoinBtnActive(false);
        }, Math.floor(Math.random() * (2000-1000)+1000));
    };

    const inputActive = () => {
        updateGameOverlayDisplay(false);
        setHeaderMsg("");
    };

    useEffect(()=>{
        headerMsg.length > 0 ?
        setLoginInputBorder(AppColor.InputErrorBorder) :
        setLoginInputBorder(AppColor.InputBorder)
    }, [headerMsg])

    return (
    <HeaderDiv>
        <div className="headerContent">
            <Link to="/" onClick={logoClickHandler}>
                <AppLogo 
                    $res="10"
                    $resmedium="6"  
                    $pos="sticky" 
                    $leftwide="5rem"
                    $left="4rem"
                    $zindex="2" 
                    cursor="pointer" 
                    alt="mainlogo"
                />
            </Link>
            <div className="authGrid">
                <InputContainerHeader $inputbor={loginInputBorder}>
                    <InputHeader
                        type="text"
                        placeholder="Username / Email"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={userInput}
                        onClick={inputActive}
                    />
                </InputContainerHeader> 
                <InputContainerHeader $inputbor={loginInputBorder}>
                    <InputHeader
                        type={passwordInputType}
                        placeholder="Password:"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={passInput}
                        onClick={inputActive}
                    />
                    <PasswordVisIcon 
                        width="1.2em" 
                        src={passwordIcon} 
                        cursor={loginBtnActive ? "arrow" : "pointer"} 
                        onClick={loginBtnActive ? null : passwordIconClickHandler}
                    />
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
            <div className="authResponsive">
                <LoginHeaderBtn onClick={loginResponsiveClickHandler}>Login</LoginHeaderBtn>
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

import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
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
        loginAttempt,
        openRegBlockPopup
    } = useContext(AppContext);

    let userInput = useRef(null);
    let passInput = useRef(null);

    useEffect(()=>{
        headerMsg.length > 0 ?
        setLoginInputBorder(AppColor.InputErrorBorder) :
        setLoginInputBorder(AppColor.InputBorder)
    }, [headerMsg]);

    const passVisClickHandler = () => {
        passIconVisToggle(passInputType, setPassInputType, setPassIcon, setIsGameOverlayDisplayed)
    };

    const loginClickHandler = () =>{
        loginAttempt({
            setMsg: setHeaderMsg,
            msgBlank: "Username/Email and Password are required",
            msgError: "Username/Email or Password does not exist",
            userInput: userInput, 
            passInput: passInput,
            setInputDisabled: setLoginInputDisabled,
            setBgColor: setLoginBackgroundColor,
            setBtnActive: setLoginBtnActive,
            size: "2.7rem",
            mleft: "4.5rem",
            overlayDisplayed: setIsGameOverlayDisplayed
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
            <div className="authGrid">
                <InputContainerHeader $inputbor={loginInputBorder}>
                    <InputHeader
                        type="text"
                        autoComplete="on"
                        placeholder="Username / Email"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={userInput}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
                        }}
                    />
                </InputContainerHeader> 
                <InputContainerHeader $inputbor={loginInputBorder}>
                    <InputHeader
                        type={passInputType}
                        autoComplete="on"
                        placeholder="Password:"
                        disabled={loginInputDisabled}
                        $background={loginBackgroundColor}
                        ref={passInput}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            setHeaderMsg("");
                        }}
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
                <LoginHeaderBtnActive>Login</LoginHeaderBtnActive> :
                <LoginHeaderBtn onClick={loginClickHandler}>Login</LoginHeaderBtn>
                }
                <span></span>
                <span className="msgContainer">{headerMsg}</span>
                <span><a onClick={() => {
                    setIsGameOverlayDisplayed(false);
                    setIsForgotPassDisplayed(true);
                }}>Forgotten Password?</a></span>
                {
                joinBtnActive ?
                <JoinHeaderBtnActive>Join Now</JoinHeaderBtnActive> :
                <JoinHeaderBtn onClick={()=>openRegBlockPopup(setJoinBtnActive, setIsGameOverlayDisplayed)}>Join Now</JoinHeaderBtn>
                }
            </div>
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

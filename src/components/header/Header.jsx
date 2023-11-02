import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { darken } from "polished";
import * as AppColor from "../../styles/Colors";
import loadingIcon from "../../assets/icons/loading.gif"
import AppLogo from "../AppLogo";
import { LoginHeaderBtn, LoginHeaderBtnActive, JoinHeaderBtn, JoinHeaderBtnActive } from "../../styles/Buttons";
import { InputContainerHeader, InputHeader } from "../../styles/Inputs";
import { PasswordVisIcon } from "../../styles/Elements";

export default function Header (){
    const [headerMsg, setHeaderMsg] = useState("");
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [loginInputBorder, setLoginInputBorder] = useState(AppColor.InputBorder);
    const [loginInputDisabled, setLoginInputDisabled] = useState(false);
    const [loginBackgroundColor, setLoginBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { width, updateforgotPasswordDisplay, updateRegBlockDisplay, updateGameOverlayDisplay, updateLoginDisplay } = useContext(AppContext);

    let userInput = useRef();
    let passInput = useRef();

    const logoClickHandler = () => {
        updateGameOverlayDisplay(false);
    };

    const passwordIconClickHandler = () => {
        updateGameOverlayDisplay(false);
        if (passwordInputType === "password") {
            setPasswordInputType("text");
            setPasswordIcon("/src/assets/icons/password_visible_icon.svg");
          } else {
            setPasswordInputType("password");
            setPasswordIcon("/src/assets/icons/password_invisible_icon.svg");
          }
    };

    const forgotClickHandler = () => {
        updateGameOverlayDisplay(false);
        updateforgotPasswordDisplay(true);
    };

    const loginClickHandler = () =>{
        updateGameOverlayDisplay(false);
        setHeaderMsg("");
        if (userInput.current.value === "" || passInput.current.value === "") {
            setHeaderMsg("Username/Email and Password are required");
        } else {
            setHeaderMsg(<img src={loadingIcon} width="30rem" height="30rem" style={{ marginLeft: "5rem" }}/>);
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

    const loginClickHandlerSmall = () => {
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
    <>
    {
    width > 1024 ?
    <StaticHeaderDiv>
        <div className="headerContent">
            <Link onClick={logoClickHandler} className="homeIcon" to="/">
                <AppLogo 
                    $res="10" 
                    $pos="sticky" 
                    $left="5rem" 
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
                        {
                        loginBtnActive ?
                        <PasswordVisIcon width="1.2em" src={passwordIcon} cursor={"arrow"}/> :
                        <PasswordVisIcon width="1.2em" src={passwordIcon} cursor={"pointer"} onClick={passwordIconClickHandler}/>
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
    </StaticHeaderDiv>
    :
    <ResponsiveHeaderDiv>
        <Link onClick={logoClickHandler} className="homeIcon" to="/">
            <AppLogo 
                $res={width > 768 ? "10" : "6"} 
                $pos="absolute" 
                $zindex="2" 
                $left="4rem"
                cursor="pointer" 
                alt="mainlogo"
            />
        </Link>
        <div className="authResponsive">
            <LoginHeaderBtn onClick={loginClickHandlerSmall}>Login</LoginHeaderBtn>
            {
            joinBtnActive ?
            <JoinHeaderBtnActive>Join Now</JoinHeaderBtnActive> :
            <JoinHeaderBtn onClick={joinClickHandler}>Join Now</JoinHeaderBtn>
            }
        </div>
    </ResponsiveHeaderDiv>
    }
    </>
    );
};

const StaticHeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: ${AppColor.MainTheme1};
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
            right: 2%;
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

const ResponsiveHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${AppColor.MainTheme1};
    height: 7.8rem;
    width: 100%;
    font-weight: 300;
    position: fixed;
    top: 0;
    z-index: 101;
    padding: 0.7rem 3rem 1.15rem;

    @media only screen and (max-width: 768px){
        height: 5rem;
    }
    
        .authResponsive{
            display:flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
        }
`
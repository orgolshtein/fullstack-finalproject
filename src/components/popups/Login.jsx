import { useContext, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import styled from "styled-components";
import { lighten } from "polished";
import * as AppColor from "../../styles/Colors";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import { LoginPopupBtn, LoginPopupBtnActive, JoinPopupBtn, JoinPopupBtnActive, PopupCloseBtn } from "../../styles/Buttons";
import { InputContainerLogin } from "../../styles/Inputs";
import { PopupDiv } from "../../styles/Containers";
import WelcomeBonusOverlay from "../WelcomeBonusOverlay"
import { PasswordVisIcon } from "../../styles/Elements";
import UserIcon from "../../assets/icons/login_user_icon.svg"
import PassIcon from "../../assets/icons/login_password_icon.svg"

export default function Login () {
    const [loginMsg, setLoginMsg] = useState("");
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("/src/assets/icons/password_invisible_icon.svg");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [loginBtnActive, setLoginBtnActive] = useState(false);
    const [joinBtnActive, setJoinBtnActive] = useState(false);
    const { 
        loginDisplay, 
        updateLoginDisplay,
        updateforgotPasswordDisplay,
        updateRegBlockDisplay
    } = useContext(AppContext);

    let userInput = useRef();
    let passInput = useRef();

    loginDisplay === "flex" ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateLoginDisplay("none");
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
        if (userInput.current.value === "" || passInput.current.value === "") {
            setLoginMsg("");
            setLoginMsg("Username/Email and Password are required");
            setTimeout(()=>{
                setLoginMsg("");
            }, 5000)
        } else {
            setLoginMsg("");
            setInputDisabled(true);
            setInputBackgroundColor(AppColor.DisbledInputBackground);
            setLoginBtnActive(true);
            setTimeout(()=>{
                setLoginMsg("Username or Password not valid");
                setInputDisabled(false);
                setInputBackgroundColor(AppColor.InputBackground);
                setLoginBtnActive(false);
                setTimeout(()=>{
                    setLoginMsg("");
                }, 5000)
            }, Math.floor(Math.random() * (5000-1000)+1000));
        }
    };

    const forgotPassClickHandler = () =>{
        updateforgotPasswordDisplay("flex");
    };

    const joinClickHandler = () =>{
        setJoinBtnActive(true);
        setTimeout(()=>{
            updateRegBlockDisplay("flex");
            setJoinBtnActive(false);
            setTimeout(()=>{
                updateRegBlockDisplay("none");
            }, 4000)
        }, Math.floor(Math.random() * (2000-1000)+1000));
    };

    return (
        <PopupDiv display={loginDisplay} width="26rem" $zindex="106">
            <div className="flexContainer">
                <div className="inner">
                    <PopupCloseBtn onClick={closeClickHandler} $url="src/assets/icons/cross_gray_icon.svg"></PopupCloseBtn>
                    <div className="content">
                        <LoginDiv>
                            <form action="">
                                <InputContainerLogin>
                                    <img className="inputIcon" src={UserIcon} />
                                    <input type="text"
                                    placeholder="Username / Email" 
                                    disabled={inputDisabled}
                                    background={inputBackgroundColor}
                                    ref={userInput}
                                    />
                                </InputContainerLogin>
                                <InputContainerLogin>
                                    <img className="inputIcon" src={PassIcon} />
                                    <input type={passwordInputType}
                                    placeholder="Password:" 
                                    disabled={inputDisabled}
                                    background={inputBackgroundColor}
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
                                <div>{loginMsg}</div>                      
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
        </PopupDiv>
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
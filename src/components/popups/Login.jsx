import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { assetUrl } from "../../api/app.api";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import * as LoginStyles from "../../styles/popups";
import { WelcomeBonusOverlay, PasswordVisIcon } from "../../styles/global";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";

export default function Login () {
    const [submitErrMsg, setSubmitErrMsg] = useState("");
    const [passInputType, setPassInputType] = useState("password");
    const [passIcon, setPassIcon] = useState(`${assetUrl}/icons/password_invisible_icon.svg`);
    const [inputDisabled, setInputDisabled] = useState(false);
    const inputBorder = useInputBorderToggle(submitErrMsg);
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

    const closeLogin = () =>{
        setIsLoginDisplayed(false);
        setSubmitErrMsg("");
        setValue("username", "");
        setValue("password", "");
        clearErrors();
    };

     return (
        <>
        {
        isLoginDisplayed ?
        <LoginStyles.PopupDiv width="26rem" $z_index="106" onClick={(event) => {
            useOuterClick(event,loginRef,closeLogin)
        }}>
            <div className="flexContainer">
                <div className="inner" ref={loginRef}>
                    <LoginStyles.PopupCloseBtn onClick={closeLogin} 
                    $url={`${assetUrl}/icons/cross_gray_icon.svg`} />
                    <div className="content">
                        <LoginStyles.LoginFlexDiv>
                            <LoginStyles.PopupForm onSubmit={handleSubmit(() =>{
                                onSubmit({
                                    msg: setSubmitErrMsg,
                                    notfound: "Username or Password not valid",
                                    inputdisabled: setInputDisabled,
                                    bgcolor: setInputBackgroundColor,
                                    buttonactive: setLoginBtnActive,
                                    loadersize: "2rem"
                                })
                            })}>
                                <LoginStyles.PopupInputContainer>
                                    <img 
                                        className="inputIcon" 
                                        src={`${assetUrl}/icons/login_user_icon.svg`} 
                                        onClick={()=>{
                                            setFocus("username");
                                    }}/>
                                    <LoginStyles.PopupInput 
                                        type="text"
                                        autoComplete="on"
                                        placeholder="Username / Email" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setSubmitErrMsg("");
                                            clearErrors();
                                        }}
                                        $background={inputBackgroundColor} 
                                        $input_border={inputBorder}
                                        $error_styled={errors.username}
                                        {...register("username", {
                                        required: "Username/Email is required",
                                        minLength: { value:3, message: "Username/Email is too short" }
                                        })}
                                    />
                                </LoginStyles.PopupInputContainer>
                                <p>{errors.username?.message}</p>
                                <LoginStyles.PopupInputContainer>
                                    <img 
                                        className="inputIcon" 
                                        src={`${assetUrl}/icons/login_password_icon.svg`} 
                                        onClick={()=>{
                                            setFocus("password");;
                                    }}/>
                                    <LoginStyles.PopupInput
                                        type={passInputType}
                                        autoComplete="on"
                                        placeholder="Password:" 
                                        disabled={inputDisabled}
                                        onClick={() => {
                                            setSubmitErrMsg("");
                                            clearErrors();
                                        }}
                                        $background={inputBackgroundColor}
                                        $input_border={inputBorder}
                                        $error_styled={errors.password}
                                        {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 3, message: "Password is too short" }
                                        })}
                                    />
                                    <PasswordVisIcon 
                                        width="1.9rem" 
                                        src={passIcon} 
                                        cursor={loginBtnActive ? "default" : "pointer"} 
                                        onClick={loginBtnActive ? null : () =>{
                                            passIconVisToggle(passInputType, setPassInputType, setPassIcon);
                                        }}
                                    />
                                </LoginStyles.PopupInputContainer>
                                <p>{errors.password?.message}</p>
                                <LoginStyles.PopupCtaBtn 
                                    disabled={loginBtnActive ? true : false}
                                    $background={AppColor.LoginBtn}
                                >Login</LoginStyles.PopupCtaBtn>
                                {
                                submitErrMsg !== "" ?
                                <p>{submitErrMsg}</p> : null                          
                                }
                            </LoginStyles.PopupForm>
                            <div className="forgotPassLink" onClick={() =>{
                                setIsForgotPassDisplayed(true);
                            }}>Lost your log in details?</div>
                            <hr />
                            <div className="joinText">You don't have an account?</div>
                            <WelcomeBonusOverlay 
                                $width_wide="13rem"
                                $display="none"
                                alt="Welcome Bonus"
                            />
                            <LoginStyles.PopupCtaBtn 
                                type="button" 
                                disabled={joinBtnActive ? true : false}
                                $background={AppColor.JoinBtn}
                                onClick={()=>openRegBlockPopup(setJoinBtnActive)}
                            >Register</LoginStyles.PopupCtaBtn>
                        </LoginStyles.LoginFlexDiv>
                    </div>
                </div>
            </div>
        </LoginStyles.PopupDiv> : null
        }
        </>
    );
};

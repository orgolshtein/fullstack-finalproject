import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { assetUrl } from "../../api/app.api";
import * as AppColor from "../../styles/colors";
import * as LoginStyles from "../../styles/popups";
import { WelcomeBonusOverlay, PasswordVisIcon, Loader } from "../../styles/global";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";
import usePassIconToggle from "../../hooks/usePassIconToggle";
import useSubmit from "../../hooks/useSubmit";

export default function Login () {
    const submit = useSubmit(
        AppColor.InputBackground, 
        AppColor.DisbledInputBackground,
        <Loader $size="2rem" />,
        "Username or Password not valid"
    )
    const inputBorder = useInputBorderToggle(
        submit.submitErrMsg, 
        AppColor.InputBorder, 
        AppColor.InputErrorBorder
    );
    const passIcon = usePassIconToggle(
        `${assetUrl}/icons/password_visible_icon.svg`,
        `${assetUrl}/icons/password_invisible_icon.svg`
    )
    const { 
        isLoginDisplayed, 
        setIsLoginDisplayed,
        setIsForgotPassDisplayed,
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
        submit.setSubmitErrMsg("");
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
                                submit.onSubmit();
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
                                        disabled={submit.isInputDisabled}
                                        onClick={() => {
                                            submit.setSubmitErrMsg("");
                                            clearErrors();
                                        }}
                                        $background={submit.inputBackgroundColor} 
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
                                        type={passIcon.passInputType}
                                        autoComplete="on"
                                        placeholder="Password:" 
                                        disabled={submit.isInputDisabled}
                                        onClick={() => {
                                            submit.setSubmitErrMsg("");
                                            clearErrors();
                                        }}
                                        $background={submit.inputBackgroundColor}
                                        $input_border={inputBorder}
                                        $error_styled={errors.password}
                                        {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 3, message: "Password is too short" }
                                        })}
                                    />
                                    <PasswordVisIcon 
                                        width="1.9rem" 
                                        src={passIcon.passwordIcon} 
                                        cursor={submit.isBtnActive ? "default" : "pointer"} 
                                        onClick={submit.isBtnActive ? null : () =>{
                                            passIcon.toggle();
                                        }}
                                    />
                                </LoginStyles.PopupInputContainer>
                                <p>{errors.password?.message}</p>
                                <LoginStyles.PopupCtaBtn 
                                    disabled={submit.isBtnActive ? true : false}
                                    $background={AppColor.LoginBtn}
                                >Login</LoginStyles.PopupCtaBtn>
                                {
                                submit.submitErrMsg !== "" ?
                                <p>{submit.submitErrMsg}</p> : null                          
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
                                disabled={submit.isJoinBtnActive ? true : false}
                                $background={AppColor.JoinBtn}
                                onClick={()=>openRegBlockPopup(submit.setIsJoinBtnActive)}
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

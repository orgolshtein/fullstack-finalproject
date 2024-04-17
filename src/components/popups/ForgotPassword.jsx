import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { assetUrl } from "../../api/app.api";
import { AppLogo, Loader } from "../../styles/global";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import * as ForgotPassStyles from "../../styles/popups";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";
import useSubmit from "../../hooks/useSubmit";

export default function ForgotPassword () {
    const submit = useSubmit(
        AppColor.InputBackground, 
        AppColor.DisbledInputBackground,
        <Loader $size="2rem" />,
        "User not found"
    )
    const inputBorder = useInputBorderToggle(
        submit.submitErrMsg, 
        AppColor.InputBorder, 
        AppColor.InputErrorBorder
    );
    const { isForgotPassDisplayed, setIsForgotPassDisplayed } = useContext(AppContext);
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors }
      } = useForm();

    const forgotPassRef = useRef();

    useImpDisableScrollHandler(isForgotPassDisplayed);

    const closeForgotPassword = () => {
        setIsForgotPassDisplayed(false);
        submit.setSubmitErrMsg("");
        setValue("user", "");
        clearErrors();
    };

    return (
        <>
        {
        isForgotPassDisplayed ?
        <ForgotPassStyles.PopupDiv 
            width="24rem" 
            $z_index="110" 
            $titlebox_height="12rem" 
            onClick={(event) => {
                useOuterClick(event,forgotPassRef,closeForgotPassword)
            }}
        >
            <div className="flexContainer">
                <div className="inner" ref={forgotPassRef}>
                    <ForgotPassStyles.PopupCloseBtn onClick={closeForgotPassword} 
                    $url={`${assetUrl}/icons/cross_white_icon.svg`} />
                    <div className="content">
                        <div className="titlebox">
                            <AppLogo $size="6" alt="popuplogo"/>
                            <div>Forgot user / password assistance</div>
                        </div>
                        <ForgotPassStyles.PopupForm onSubmit={handleSubmit(() =>{
                            submit.onSubmit();
                        })}>
                            <div>Please insert one of the following</div>
                            <ForgotPassStyles.PopupInput 
                                type="text"
                                autoComplete="on"
                                placeholder="Enter user or email address" 
                                disabled={submit.isInputDisabled}
                                $input_border={inputBorder}
                                $background={submit.inputBackgroundColor}
                                onClick={() => {
                                    submit.setSubmitErrMsg("");
                                    clearErrors();
                                }}
                                $error_styled={errors.user}
                                {...register("user", {
                                required: "User or email address is required",
                                minLength: { value:3, message: "Input is too short" }
                                })}
                            />
                            {errors.user?<p>{errors.user.message}</p> : null}
                            {
                                submit.submitErrMsg !== "" ?
                                <p>{submit.submitErrMsg}</p> : null                          
                            }
                            <ForgotPassStyles.PopupCtaBtn 
                                disabled={submit.isBtnActive ? true : false}
                                $background={AppColor.LoginBtn}
                                $margin="1rem auto"
                            >continue</ForgotPassStyles.PopupCtaBtn>
                        </ForgotPassStyles.PopupForm>
                    </div>
                </div>
            </div>
        </ForgotPassStyles.PopupDiv> : null
        }
        </>
    );
};

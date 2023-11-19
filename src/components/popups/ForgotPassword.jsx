import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useForm } from "react-hook-form";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import { PopupDiv } from "../../styles/containersMain";
import { ForgotPasswordForm } from "../../styles/containersPopUp";
import { AppLogo } from "../../styles/elements";
import { ForgotPassInput } from "../../styles/inputs";
import { ForgotPasswordCta, ForgotPasswordCtaActive, PopupCloseBtn } from "../../styles/buttons";

export default function ForgotPassword () {
    const [ctaMsg, setCtaMsg] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [ctaActive, setCtaActive] = useState(false);
    const { isForgotPassDisplayed, setIsForgotPassDisplayed, onSubmit } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        clearErrors,
        formState: { errors }
      } = useForm();

    let forgotPassRef = useRef();

    useImpDisableScrollHandler(isForgotPassDisplayed);

    useEffect(()=>{
        ctaMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    }, [ctaMsg]);

    const submitHandler = () =>{
        onSubmit({
            msg: setCtaMsg,
            notfound: "User not found",
            inputdisabled: setInputDisabled,
            bgcolor: setInputBackgroundColor,
            buttonactive: setCtaActive,
            loadersize: "2rem"
        })
    };

    const outsideClickHandler = (event) => {
        useOuterClick(event,forgotPassRef,() =>{
            setIsForgotPassDisplayed(false);
            setCtaMsg("");
            setValue("user", "");
            clearErrors();
        })
    };

    return (
        <>
        {
        isForgotPassDisplayed ?
        <PopupDiv width="24rem" $zindex="110" $titleboxheight="12rem" onClick={outsideClickHandler}>
            <div className="flexContainer">
                <div className="inner" ref={forgotPassRef}>
                    <PopupCloseBtn onClick={() =>{
                        setIsForgotPassDisplayed(false);
                        setCtaMsg("");
                        setValue("user", "");
                        clearErrors();
                    }} 
                    $url="src/assets/icons/cross_white_icon.svg" />
                    <div className="content">
                        <div className="titlebox">
                            <AppLogo $size="6" alt="popuplogo"/>
                            <div>Forgot user / password assistance</div>
                        </div>
                        <ForgotPasswordForm onSubmit={handleSubmit(submitHandler)}>
                            <div>Please insert one of the following</div>
                            <ForgotPassInput 
                                type="text"
                                autoComplete="on"
                                placeholder="Enter user or email address" 
                                disabled={inputDisabled}
                                $inputbor={inputBorder}
                                $background={inputBackgroundColor}
                                onClick={() => setCtaMsg("")}
                                $error_styled={errors.user}
                                {...register("user", {
                                required: "User or email address is required",
                                minLength: { value:3, message: "Input is too short" }
                                })}
                            />
                            {errors.user?<span>{errors.user.message}</span> : null}
                            {
                                ctaMsg !== "" ?
                                <span>{ctaMsg}</span> : null                          
                            }
                            {
                                ctaActive ?
                                <ForgotPasswordCtaActive disabled={true}>continue</ForgotPasswordCtaActive> :
                                <ForgotPasswordCta>continue</ForgotPasswordCta>
                            }
                        </ForgotPasswordForm>
                    </div>
                </div>
            </div>
        </PopupDiv> : null
        }
        </>
    );
};

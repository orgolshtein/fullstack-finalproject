import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { AppLogo } from "../../styles/global";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import * as FP from "../../styles/popups";

export default function ForgotPassword () {
    const [ctaMsg, setCtaMsg] = useState("");
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [isCtaActive, setIsCtaActive] = useState(false);
    const { isForgotPassDisplayed, setIsForgotPassDisplayed, onSubmit } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors }
      } = useForm();

    const forgotPassRef = useRef();

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
            inputdisabled: setIsInputDisabled,
            bgcolor: setInputBackgroundColor,
            buttonactive: setIsCtaActive,
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
        <FP.PopupDiv width="24rem" $zindex="110" $titleboxheight="12rem" onClick={outsideClickHandler}>
            <div className="flexContainer">
                <div className="inner" ref={forgotPassRef}>
                    <FP.PopupCloseBtn onClick={() =>{
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
                        <FP.ForgotPasswordForm onSubmit={handleSubmit(submitHandler)}>
                            <div>Please insert one of the following</div>
                            <FP.ForgotPassInput 
                                type="text"
                                autoComplete="on"
                                placeholder="Enter user or email address" 
                                disabled={isInputDisabled}
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
                            <FP.ForgotPasswordCta 
                                disabled={isCtaActive ? true : false}
                            >continue</FP.ForgotPasswordCta>
                        </FP.ForgotPasswordForm>
                    </div>
                </div>
            </div>
        </FP.PopupDiv> : null
        }
        </>
    );
};

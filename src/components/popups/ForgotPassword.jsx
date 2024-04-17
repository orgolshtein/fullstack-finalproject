import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { assetUrl } from "../../api/app.api";
import { AppLogo } from "../../styles/global";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import * as ForgotPassStyles from "../../styles/popups";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";

export default function ForgotPassword () {
    const [submitErrMsg, setSubmitErrMsg] = useState("");
    const inputBorder = useInputBorderToggle(submitErrMsg);
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

    const closeForgotPassword = () => {
        setIsForgotPassDisplayed(false);
        setSubmitErrMsg("");
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
                            onSubmit({
                                msg: setSubmitErrMsg,
                                notfound: "User not found",
                                inputdisabled: setIsInputDisabled,
                                bgcolor: setInputBackgroundColor,
                                buttonactive: setIsCtaActive,
                                loadersize: "2rem"
                            })
                        })}>
                            <div>Please insert one of the following</div>
                            <ForgotPassStyles.PopupInput 
                                type="text"
                                autoComplete="on"
                                placeholder="Enter user or email address" 
                                disabled={isInputDisabled}
                                $input_border={inputBorder}
                                $background={inputBackgroundColor}
                                onClick={() => {
                                    setSubmitErrMsg("");
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
                                submitErrMsg !== "" ?
                                <p>{submitErrMsg}</p> : null                          
                            }
                            <ForgotPassStyles.PopupCtaBtn 
                                disabled={isCtaActive ? true : false}
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

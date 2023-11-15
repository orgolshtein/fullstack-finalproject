import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import useImpDisableScrollHandler from "../../hooks/useImperativeDisableScroll";
import useOuterClick from "../../hooks/useOuterClick";
import * as AppColor from "../../styles/colors";
import { PopupDiv } from "../../styles/containersMain";
import { ForgotPasswordDiv } from "../../styles/containersPopUp";
import { AppLogo } from "../../styles/elements";
import { ForgotPassInput } from "../../styles/inputs";
import { ForgotPasswordCta, ForgotPasswordCtaActive, PopupCloseBtn } from "../../styles/buttons";

export default function ForgotPassword () {
    const [ctaMsg, setCtaMsg] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [ctaActive, setCtaActive] = useState(false);
    const { isForgotPassDisplayed, setIsForgotPassDisplayed, loginAttempt } = useContext(AppContext);

    let userInput = useRef(null);
    let forgotPassRef = useRef(null);

    useImpDisableScrollHandler(isForgotPassDisplayed);

    useEffect(()=>{
        ctaMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    }, [ctaMsg]);

    const forgotCtaClickHandler = () =>{
        loginAttempt({
            setMsg: setCtaMsg,
            msgBlank: "User or email address is required",
            msgError: "User not found",
            userInput: userInput,
            passInput: userInput,
            setInputDisabled: setInputDisabled,
            setBgColor: setInputBackgroundColor,
            setBtnActive: setCtaActive,
            size: "2rem"
        })
    };

    const outsideClickHandler = (event) => {
        useOuterClick(event,forgotPassRef,() =>{
            setIsForgotPassDisplayed(false);
            setCtaMsg("");
            userInput.current.value = "";
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
                        userInput.current.value = "";
                    }} 
                    $url="src/assets/icons/cross_white_icon.svg" />
                    <div className="content">
                        <div className="titlebox">
                            <AppLogo $size="6" alt="popuplogo"/>
                            <div>Forgot user / password assistance</div>
                        </div>
                        <ForgotPasswordDiv >
                            <div>Please insert one of the following</div>
                            <ForgotPassInput 
                                type="email"
                                autoComplete="on"
                                placeholder="Enter user or email address" 
                                disabled={inputDisabled}
                                $inputbor={inputBorder}
                                $background={inputBackgroundColor}
                                onClick={() => setCtaMsg("")}
                                ref={userInput}
                            />
                            {
                                ctaMsg !== "" ?
                                <span>{ctaMsg}</span> : null                          
                            }
                            {
                                ctaActive ?
                                <ForgotPasswordCtaActive>continue</ForgotPasswordCtaActive> :
                                <ForgotPasswordCta onClick={forgotCtaClickHandler}>continue</ForgotPasswordCta>
                            }
                        </ForgotPasswordDiv>
                    </div>
                </div>
            </div>
        </PopupDiv> : null
        }
        </>
    );
};

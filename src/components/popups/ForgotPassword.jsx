import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import { AppContext } from "../../state/AppContext";
import AppLogo from "../AppLogo";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import { ForgotPasswordCta, ForgotPasswordCtaActive, PopupCloseBtn } from "../../styles/Buttons";
import { ForgotPassInput } from "../../styles/Inputs";
import { PopupDiv } from "../../styles/Containers";

export default function ForgotPassword () {
    const [ctaMsg, setCtaMsg] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [ctaActive, setCtaActive] = useState(false);
    const { 
        forgotPasswordDisplay, 
        updateforgotPasswordDisplay
    } = useContext(AppContext);

    let userInput = useRef();

    forgotPasswordDisplay === "flex" ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateforgotPasswordDisplay("none");
        setCtaMsg("");
        userInput.current.value = "";
    };

    const ctaClickHandler = () =>{
        setCtaMsg("");
        setInputDisabled(true);
        setInputBackgroundColor(AppColor.DisbledInputBackground);
        setCtaActive(true);
        setTimeout(()=>{
            setCtaMsg("User not found");
            setInputDisabled(false);
            setInputBackgroundColor(AppColor.InputBackground);
            setCtaActive(false);
        }, (3000-1000)+1000);
    };

    return (
        <PopupDiv display={forgotPasswordDisplay} width="24rem" $zindex="110" $titleboxheight="12rem">
            <div className="flexContainer">
                <div className="inner">
                    <PopupCloseBtn onClick={closeClickHandler} $url="src/assets/icons/cross_white_icon.svg"></PopupCloseBtn>
                    <div className="content">
                        <div className="titlebox">
                            <AppLogo $res={"6"} alt="popuplogo"/>
                            <div>Forgot user / password assistance</div>
                        </div>
                        <ForgotPasswordDiv>
                            <div>Please insert one of the following</div>
                            <ForgotPassInput type="email"
                            placeholder="Enter user or email address" 
                            disabled={inputDisabled}
                            $background={inputBackgroundColor}
                            ref={userInput}
                            />
                            {
                                ctaMsg !== "" ?
                                <span>{ctaMsg}</span> : null                          
                            }
                            {
                                ctaActive ?
                                <ForgotPasswordCtaActive>continue</ForgotPasswordCtaActive> :
                                <ForgotPasswordCta onClick={ctaClickHandler}>continue</ForgotPasswordCta>
                            }
                        </ForgotPasswordDiv>
                    </div>
                </div>
            </div>
        </PopupDiv>
    );
}


const ForgotPasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: block;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    span{
        font-size: 1rem;
        color: ${AppColor.ErrorText};
        margin: 1rem 0;
        line-height: 1;
        font-weight: bold;
    }
`;
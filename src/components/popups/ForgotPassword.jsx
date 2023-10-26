import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../state/AppContext";
import useImperativeDisableScroll from "../../hooks/useImperativeDisableScroll";
import styled from "styled-components";
import * as AppColor from "../../styles/Colors";
import loadingIcon from "../../assets/icons/loading.gif";
import { PopupDiv } from "../../styles/Containers";
import AppLogo from "../AppLogo";
import { ForgotPassInput } from "../../styles/Inputs";
import { ForgotPasswordCta, ForgotPasswordCtaActive, PopupCloseBtn } from "../../styles/Buttons";

export default function ForgotPassword () {
    const [ctaMsg, setCtaMsg] = useState("");
    const [inputDisabled, setInputDisabled] = useState(false);
    const [inputBorder, setInputBorder] = useState(AppColor.InputBorder);
    const [inputBackgroundColor, setInputBackgroundColor] = useState(AppColor.InputBackground);
    const [ctaActive, setCtaActive] = useState(false);
    const { 
        isForgotPassDisplayed, 
        updateforgotPasswordDisplay
    } = useContext(AppContext);

    let userInput = useRef();
    let forgotPassRef = useRef();

    isForgotPassDisplayed ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateforgotPasswordDisplay(false);
        setCtaMsg("");
        userInput.current.value = "";
    };

    const ctaClickHandler = () =>{
        setCtaMsg("");
        if (userInput.current.value === "") {
            setCtaMsg("User or email address is required");
            setInputBorder(AppColor.InputErrorBorder)
        } else{
            setCtaMsg(<img src={loadingIcon} width="30rem" height="30rem" />)
            setInputDisabled(true);
            setInputBackgroundColor(AppColor.DisbledInputBackground);
            setCtaActive(true);
            setTimeout(()=>{
                setCtaMsg("User not found");
                setInputDisabled(false);
                setInputBackgroundColor(AppColor.InputBackground);
                setCtaActive(false);
            }, (3000-1000)+1000);
        }
    };

    const inputActive = () => {
        setCtaMsg("");
    };

    useEffect(()=>{
        ctaMsg.length > 0 ?
        setInputBorder(AppColor.InputErrorBorder) :
        setInputBorder(AppColor.InputBorder)
    }, [ctaMsg]);

    const outsideClickHandler = (event) => {
        if (forgotPassRef.current && !forgotPassRef.current.contains(event.target)){
            closeClickHandler();
        }
    };

    return (
        <>
        {
            isForgotPassDisplayed ?
            <PopupDiv width="24rem" $zindex="110" $titleboxheight="12rem" onClick={outsideClickHandler}>
                <div className="flexContainer">
                    <div className="inner" ref={forgotPassRef}>
                        <PopupCloseBtn onClick={closeClickHandler} $url="src/assets/icons/cross_white_icon.svg"></PopupCloseBtn>
                        <div className="content">
                            <div className="titlebox">
                                <AppLogo $res={"6"} alt="popuplogo"/>
                                <div>Forgot user / password assistance</div>
                            </div>
                            <ForgotPasswordDiv >
                                <div>Please insert one of the following</div>
                                <ForgotPassInput type="email"
                                    placeholder="Enter user or email address" 
                                    disabled={inputDisabled}
                                    $inputbor={inputBorder}
                                    $background={inputBackgroundColor}
                                    onClick={inputActive}
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
            </PopupDiv> : null
        }
        </>
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
        line-height: 1;
        font-weight: bold;
        display: inline-block;
        height: 2rem;
    }
`;
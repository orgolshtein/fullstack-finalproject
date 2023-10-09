import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as AppColor from "../styles/Colors";
import { AppContext } from "../state/AppContext";
import AppLogo from "./AppLogo";
import useImperativeDisableScroll from "../hooks/useImperativeDisableScroll";

export default function ForgotPassword () {
    const { 
        forgotPasswordDisplay, 
        updateforgotPasswordDisplay,
        elementDiabled,
        updateElementDisabled,
        inputBackgroundColor,
        updateInputBackgroundColor
    } = useContext(AppContext);
    const [ctaMsg, setCtaMsg] = useState("");

    forgotPasswordDisplay === "flex" ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateforgotPasswordDisplay("none");
    };

    const ctaClickHandler = () =>{
        updateElementDisabled(true);
        updateInputBackgroundColor(AppColor.DisbledInputBackground);
        setTimeout(()=>{
            setCtaMsg("User not found");
            updateElementDisabled(false);
            updateInputBackgroundColor(AppColor.InputBackground);
            setTimeout(()=>{
                setCtaMsg("");
            }, 5000)
        }, (3000-1000)+1000);
    };

    return (
        <ForgotPasswordDiv display={forgotPasswordDisplay}>
            <div className="flexContainer">
                <div className="inner">
                    <span className="closeBtn" onClick={closeClickHandler}></span>
                    <div className="content">
                        <div className="titlebox">
                            <AppLogo $res={"6"} alt="popuplogo"/>
                            <div>Forgot user / password assistance</div>
                        </div>
                        <div className="main">
                            <div>Please insert one of the following</div>
                            <input type="email"
                            placeholder="Enter user or email address" 
                            disabled={elementDiabled}
                            background={inputBackgroundColor}
                            />
                            {
                                ctaMsg !== "" ?
                                <span>{ctaMsg}</span> : null                          
                            }
                            <button onClick={ctaClickHandler} disabled={elementDiabled}>continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </ForgotPasswordDiv>
    );
}


const ForgotPasswordDiv = styled.div`
    display: ${(props)=>props.display};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 106;
    backdrop-filter: blur(15px);
    
    .flexContainer{
        min-width: 24rem;
        max-width: 24rem;
        padding: 0 1.15em;
        position: relative;
        z-index: 107;
        width: 100%;
        text-align: left;
        animation-name: bounceIn;
        pointer-events: auto;
        border-radius: 2rem;

        .inner{
            border-radius: 0.2rem;
            background: #ececec;
            box-shadow: 0 0 1.5em rgba(0,0,0,.5);
            position: relative;
            background-color: #eeeeee;
            color: #000;

            .closeBtn{
                background: url("/src/assets/icons/cross_white_icon.svg") no-repeat 0 0/contain;
                width: 0.75em;
                height: 0.75em;
                right: 0.8em;
                top: 0.8em;
                min-width: initial;
                position: absolute;
                float: none;
                z-index: 2;
                transition: transform 300ms;
                cursor: pointer;
                display: inline-block;
                min-height: 2.5em;
                vertical-align: middle;
                overflow: hidden;
                text-align: left;
                text-indent: -3000px;
            }

            .content{
                max-height: 95vh;
                height: auto;
                overflow-x: hidden;
                color: #6c6c6c;
                font-size: .72em;
                padding: 1em 1.15em 0;
                min-height: 6.6em;
                clear: both;
                position: relative;
                overflow-y: auto;
                word-wrap: break-word;
                border-radius: 0.2rem;

                .titlebox{
                    background: ${AppColor.MainDark};
                    color: #fff;
                    margin: -1.2em -0.8em 0;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: normal;
                    font-size: 1.429rem;
                    font-weight: 700;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    height: 12rem;
                    padding-bottom: 0.5rem;
                    gap: 0.5rem;
                }

                .main{
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

                    input{
                        display: block;
                        max-width: 100%;
                        margin-bottom: 1em;
                        font-size: 1rem;
                        color: #6c6c6c;
                        border-color: #6c6c6c;
                        border-radius: 3px;
                        box-shadow: none;
                        border-width: 1px;
                        height: 2.5em;
                        padding: 0 2.5em 0 0.56em;
                        margin: 0;
                        width: 100%;
                        font-weight: 400;
                        border-style: solid;
                        background: ${(props)=>(props.background)};
                        transition: box-shadow 100ms,border 100ms;
                        line-height: 1;
                    }

                    span{
                        font-size: 1rem;
                        color: ${AppColor.ErrorText};
                        margin: 1rem 0;
                        line-height: 1;
                        font-weight: bold;
                    }

                    button{
                        color: ${AppColor.ButtonText};
                        background-color: ${AppColor.LoginBtn};
                        display: inline-block;
                        position: relative;
                        overflow: visible;
                        vertical-align: middle;
                        font-family: Asap,Helvetica Neue,Helvetica,Arial,sans-serif;
                        font-size: 1.4rem;
                        font-style: normal;
                        font-weight: 300;
                        transition: box-shadow 300ms;
                        cursor: pointer;
                        line-height: 2.25em;
                        padding: 0 1em;
                        border: 0;
                        text-align: center;
                        text-decoration: none;
                        margin: 1rem auto;
                        border-radius: 0;
                        box-shadow: none;
                        min-width: 100%;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
`;
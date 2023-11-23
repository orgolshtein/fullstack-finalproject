import styled from "styled-components";
import { darken, lighten } from "polished";

import * as AppColor from "./colors";

export const PopupDiv = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: ${(props)=>props.$z_index};
    backdrop-filter: blur(15px);

    .flexContainer{
        min-width: ${(props)=>props.width};
        max-width: ${(props)=>props.width};
        padding: 0 1.15em;
        position: relative;
        z-index: 107;
        width: 100%;
        border-radius: 2rem;

        .inner{
            border-radius: 0.2rem;
            box-shadow: 0 0 1.5em rgba(0,0,0,.5);
            position: relative;
            background-color: ${AppColor.PopupMainBackground};

            .content{
                overflow-x: hidden;
                color: ${AppColor.PopupMainText};
                font-size: .72em;
                padding: 1em 1.15em 0;
                position: relative;
                border-radius: 0.2rem;

                .titlebox {
                    background: ${AppColor.MainTheme1};
                    color: ${AppColor.MainText};
                    margin: -1.2em -0.8em 0;
                    text-align: center;
                    text-transform: capitalize;
                    line-height: normal;
                    font-size: 1.4rem;
                    font-weight: 700;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;
                    height: ${(props) => props.$titlebox_height};
                    padding-bottom: 0.5rem;
                    gap: 0.5rem;
                }
            }
        }
    }
`;

export const PopupCloseBtn = styled.span`
    background: url(${(props) => props.$url}) no-repeat 0 0/contain;
    width: 0.75em;
    height: 0.75em;
    right: 0.8em;
    top: 0.8em;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    display: inline-block;
    min-height: 2.5em;

    @media only screen and (max-width: 412px) {
        width: 1.5em;
        height: 1.5em;
    }
`;

export const PopupCtaBtn = styled.button`
    display: inline-block;
    position: relative;
    color: ${AppColor.ButtonText};
    background-color: ${(props)=>props.$background};
    height: 2.8rem;
    width: ${(props)=>props.$width || "100%"};
    line-height: ${(props)=>props.$line_height};
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    min-width: 11rem;
    margin: ${(props)=>props.$margin};
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    border: 0;
    cursor: pointer;

    &:disabled {
        color: ${darken(0.3, AppColor.ButtonText)};
        background-color: ${(props)=>darken(0.3, props.$background)};
        cursor: default;

        &:hover {
            color: ${darken(0.3, AppColor.ButtonText)};
            background-color: ${(props)=>darken(0.3, props.$background)};
        }
    }
    
    &:hover {
      background-color: ${(props)=>darken(0.2, props.$background)};
    }
`;

export const PopupInputContainer = styled.span`
    display: inline-block;
    max-width: 100%;
    position: relative;
    font-size: 1rem;
    color: ${AppColor.InputText};
    box-shadow: none;
    height: 2.5em;
    padding: 0 .1rem 0 0.1rem;
    width: 100%;
    font-weight: 400;
    transition: box-shadow 100ms,border 100ms;
    line-height: 1;
`;

export const PopupInput = styled.input`
    background-color: ${(props)=>props.$background};
    border: 1.5px solid ${(props)=>(props.$error_styled ? AppColor.InputErrorBorder : props.$input_border)};
    border-radius: 3px;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 2.5rem;
    margin-bottom: 1rem;
    
    &:focus{
        outline-width: 0;
    }
`

export const PopupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div{
        display: block;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p{
        font-size: .9rem;
        color: ${AppColor.ErrorText};
        text-align: center;
        font-weight: bold;
        height: 1.5rem;
        padding-top: 0.3rem;
    }

    .inputIcon{
            left: 0.5rem;
            top: 1.2rem;
            width: 1.214em;
            position: absolute;
            display: inline-block;
            opacity: .65;
            transform: translate3d(0,-50%,0);
            cursor: pointer;
    }
`;

export const GameOverlayDiv = styled.div`
    background: transparent;
    .shown{
        display: flex;
        background: ${AppColor.MainTheme1};
        padding: 2rem;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        justify-content: flex-start;
        align-items: center;
        width:30rem;
        height:100%;
        z-index:101;
        box-shadow: -2rem 1rem 4rem #000000;
        animation: slide-in 400ms;

        @media only screen and (max-width: 768px) {
            width: 100%;        
        }
    
        @keyframes slide-in {
            from {
                transform: translateX(100%); opacity: 0;
            }
            to {
                transform: translateX(0%); opacity: 1;
            }
        }
    
        h1{
            font-size: 2rem;
            font-weight: 700;
            margin: 1rem 0;
            padding: 0;
            line-height: 1.1;
            color: ${AppColor.GameTitle};
            text-align:center;
            height: 6rem;
            text-shadow: 1px 1px 2px #000000, 0 0 1em #655e3e, 0 0 0.2em #000000;
        }
    
        p{
            font-size: 1rem;
            margin: 1.5rem 0;
            color: ${AppColor.MainText};
            text-align: left;
            height: 10rem;
            overflow-y: auto;

            @media only screen and (max-width: 768px) {
                font-size: 1.5rem;
                margin: 0;
                padding: 3.2rem; 
                height: max-content;          
            }
        }
    }

    .hidden{
        display: none;
        background: ${AppColor.MainTheme1};
        padding: 2rem;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        justify-content: flex-start;
        align-items: center;
        width:30rem;
        height:100%;
        z-index:101;
        box-shadow: -2rem 1rem 4rem #000000;
        animation: slideaway 400ms;
    
        @keyframes slideaway {
            from { 
                display: flex; 
            }
            to { 
                transform: translateX(100%); opacity: 0;
            }
        }
    
        h1{
            font-size: 2rem;
            font-weight: 700;
            margin: 1rem 0;
            padding: 0;
            line-height: 1.1;
            color: ${AppColor.GameTitle};
            text-align:center;
            height: 6rem;
            text-shadow: 1px 1px 2px #000000, 0 0 1em #655e3e, 0 0 0.2em #000000;
        }
    
        p{
            font-size: 1rem;
            margin: 1.5rem 0;
            color: ${AppColor.MainText};
            text-align: left;
            height: 10rem;
            overflow-y: auto;

            @media only screen and (max-width: 768px) {
                font-size: 1.5rem;
                margin: 0;
                padding: 3.2rem; 
                height: max-content;          
            }
        }
    }
`;

export const LoginFlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 35rem;
    padding: 2rem;

    @media only screen and (max-height: 412px){
        height: 28rem;
    }

    .forgotPassLink{
        font-size: 1.4rem;
        text-decoration: underline;
        cursor: pointer;

        &:hover{
            color: ${lighten(0.3, AppColor.PopupMainText)};
        }
    }

    hr {
        height: 0.5px;
        background-color: ${AppColor.PopupMainText};;
        border: none;
        z-index: 200;
        width: 100%;

        @media only screen and (max-height: 412px){
            display: none;
        }
    }

    .joinText{
        font-weight: 300;
        font-size: 1.1rem;
    }
`;

export const RegBlockFlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: block;
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

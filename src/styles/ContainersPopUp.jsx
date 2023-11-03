import styled from "styled-components";
import { lighten } from "polished";
import * as AppColor from "./Colors";

export const ForgotPasswordDiv = styled.div`
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

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 35rem;
    padding: 2rem;

    @media only screen and (max-height: 412px){
        height: 28rem;
    }

    form{
        width: 100%;

        div{
            font-size: 1rem;
            color: ${AppColor.ErrorText};
            margin: .5rem 0;
            height: 1rem;
            text-align: center;
            font-weight: bold;
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

export const RegBlockDiv = styled.div`
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
`

import { useContext, useRef } from "react";
import styled from "styled-components";
import * as AppColor from "../styles/Colors";
import { AppContext } from "../state/AppContext";
import useImperativeDisableScroll from "../hooks/useImperativeDisableScroll";

export default function RegistrationBlock () {
    const { 
        regBlockDisplay, 
        updateRegBlockDisplay
    } = useContext(AppContext);

    regBlockDisplay === "flex" ?
    useImperativeDisableScroll({ element: document.body, disabled: true }):
    useImperativeDisableScroll({ element: document.body, disabled: false });
    
    const closeClickHandler = () =>{
        updateRegBlockDisplay("none");
    };

    return (
        <RegBlockDiv display={regBlockDisplay}>
            <div className="flexContainer">
                <div className="inner">
                    <div className="content">
                        <div className="titlebox">
                            <div>We're sorry!</div>
                        </div>
                        <div className="main">
                            <div>Registration cannot be made in your region</div>
                        </div>
                    </div>
                </div>
            </div>
        </RegBlockDiv>
    );
}


const RegBlockDiv = styled.div`
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
            box-shadow: 0 0 1.5em rgba(0,0,0,.5);
            position: relative;
            background-color: ${AppColor.PopupMainBackground};

            .content{
                max-height: 95vh;
                height: auto;
                overflow-x: hidden;
                color: ${AppColor.PopupMainText};
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
                    color: ${AppColor.MainText};
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
                    height: 4rem;
                    padding-bottom: 0.5rem;
                    gap: 0.5rem;
                }

                .main{
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
                }
            }
        }
    }
`;
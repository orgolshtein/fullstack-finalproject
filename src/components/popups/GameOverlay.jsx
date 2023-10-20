import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameImage from "../GameImage";
import styled from "styled-components";
import { PlayPopupBtn, PopupCloseBtn } from "../../styles/Buttons";
import * as AppColor from "../../styles/Colors";

export default function GameOverlay () {
    const { selectedGame, isGameOverlayDisplayed, updateGameOverlayDisplay, updateLoginDisplay } = useContext(AppContext);

    const closeClickHandler = () => {
        updateGameOverlayDisplay(false);
    };

    const ctaClickHandler = () => {
        updateLoginDisplay(true);
    };

    return (
        <GameOverlayDiv>
            <div className={isGameOverlayDisplayed? "shown" : "hidden"}>
                <PopupCloseBtn onClick={closeClickHandler} $url="src/assets/icons/cross_white_icon.svg"></PopupCloseBtn>
                <h1>{selectedGame.title}</h1>
                <GameImage image={selectedGame.thumb} $res={260} title={selectedGame.title}/>
                <p>{selectedGame.descrition}</p>
                <PlayPopupBtn onClick={ctaClickHandler}>play now</PlayPopupBtn>
            </div>
        </GameOverlayDiv>
    );
};

const GameOverlayDiv = styled.div`
    background: transparent;
    .shown{
        display: flex;
        background: ${AppColor.MainDark};
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
        }
    }

    .hidden{
        display: none;
        background: ${AppColor.MainDark};
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
        }
    }
`;

import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { GameOverlayDiv } from "../../styles/ContainersPopUp";
import GameImage from "../GameImage";
import { PlayPopupBtn, PopupCloseBtn } from "../../styles/Buttons";

export default function GameOverlay () {
    const { 
        selectedGame, 
        isGameOverlayDisplayed, 
        updateGameOverlayDisplay, 
        updateLoginDisplay 
    } = useContext(AppContext);

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
                <GameImage image={selectedGame.thumb} $display="none" height="260" width="260" title={selectedGame.title}/>
                <p>{selectedGame.descrition}</p>
                <PlayPopupBtn onClick={ctaClickHandler}>play now</PlayPopupBtn>
            </div>
        </GameOverlayDiv>
    );
};

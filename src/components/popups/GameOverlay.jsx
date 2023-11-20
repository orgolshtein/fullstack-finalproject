import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { GameOverlayDiv, PlayPopupBtn, PopupCloseBtn } from "../../styles/popups";
import { GameImg } from "../../styles/global";

export default function GameOverlay () {
    const { 
        selectedGame, 
        isGameOverlayDisplayed, 
        setIsGameOverlayDisplayed, 
        openLoginPopup 
    } = useContext(AppContext);

    return (
        <GameOverlayDiv>
            <div className={isGameOverlayDisplayed? "shown" : "hidden"}>
                <PopupCloseBtn onClick={() => setIsGameOverlayDisplayed(false)} 
                    $url="src/assets/icons/cross_white_icon.svg" />
                <h1>{selectedGame.title}</h1>
                <GameImg 
                    src={selectedGame.thumb} 
                    $display="none" 
                    height="260" 
                    width="260" 
                    title={selectedGame.title}
                />
                <p>{selectedGame.descrition}</p>
                <PlayPopupBtn onClick={() => {
                    openLoginPopup(null);
                }}>play now</PlayPopupBtn>
            </div>
        </GameOverlayDiv>
    );
};

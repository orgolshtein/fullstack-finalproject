import { useContext } from "react";

import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount"
import { GameListDiv } from "../../styles/main.content";
import { Loader } from "../../styles/global";
import GameThumb from "./GameThumb";

export default function SlotGames () {
  const { 
    width,
    slotsGamesList,
    gamesErrorMessage, 
    areGamesLoading,
    setIsGameOverlayDisplayed 
  } = useContext(AppContext);

    useOncePostMount(() => {
      setIsGameOverlayDisplayed(false);
    });

    return(
    <GameListDiv>
        {
        gamesErrorMessage ? 
          <h1 className="loading-failed">{gamesErrorMessage}</h1>
         : areGamesLoading ? 
          <Loader 
            $size="20rem" 
            $margin_left="30rem"
            $margin_left_medium="2rem"
          />
         :
        slotsGamesList?.filter((game) => game.show)
        .map((item, i) => (
         <GameThumb 
            key={item.id} 
            selectedgame={item} 
            image={width > 1024 && (i === 1 || i === 8) ? item.thumbwide : item.thumb} 
            title={item.title} 
            isnew={item.new}
            type={
              width > 1024 && i === 1 ? "wide-top" : 
              width > 1024 && i === 8 ? "wide-bottom" : 
              width > 1024 && i === 3 ? "big" : 
              "normal"
            }
          />
            ))}
    </GameListDiv>
  );
};

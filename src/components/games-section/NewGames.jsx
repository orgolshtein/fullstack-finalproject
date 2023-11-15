import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameListDiv } from "../../styles/containersGames";
import LoadingIcon from "../LoadingIcon";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";

export default function NewGames () {
  const { 
    width,
    newGamesList,
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
           <LoadingIcon 
            $size="20rem" 
            $marginleft="30rem"
            $marginleftmedium="2rem"
          />
           :
          newGamesList?.filter((game) => game.show)
          .map((item, i) => (
            width > 1024 && i === 6 ?
            <GameThumbLarge 
              key={item.id} 
              selectedgame={item} 
              image={item.thumb} 
              title={item.title} 
              isnew={item.new}
            /> :
            <GameThumb 
              key={item.id} 
              selectedgame={item} 
              image={item.thumb} 
              title={item.title} 
              isnew={item.new}
            />
              ))}
      </GameListDiv>
    );
};

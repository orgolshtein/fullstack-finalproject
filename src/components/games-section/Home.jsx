import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameListDiv } from "../../styles/containersGames";
import LoadingIcon from "../LoadingIcon";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function Home () {
  const { 
    width,
    gamesList,
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
            gamesList?.filter((game) => game.show)
            .map((item, i) => (
              width > 1024 && i === 3 ?
              <GameThumbLarge 
                key={item.id} 
                selectedgame={item} 
                image={item.thumb} 
                title={item.title} 
                isnew={item.new}
              /> :
              width > 1024 && i === 2 ?
              <GameThumbWide 
                key={item.id} 
                selectedgame={item} 
                image={item.thumbwide} 
                title={item.title} 
                isnew={item.new}
                wideclass="wide-top"
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

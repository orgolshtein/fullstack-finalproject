import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import loadingIcon from "../../assets/icons/loading.gif";
import { GameListDiv } from "../../styles/Containers";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function Home () {
    const { 
      width,
      gamesList, 
      getGamesList, 
      gamesErrorMessage, 
      fetchGamesError, 
      isLoading, 
      loadingIsFinished, 
      homeActive, 
      updateGameOverlayDisplay 
    } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getGamesList();
          } catch {
            fetchGamesError("cannot display games");
          } finally {
            loadingIsFinished();
            homeActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
        <GameListDiv>
            {
            gamesErrorMessage ? (
              <h1 className="loading-failed">{gamesErrorMessage}</h1>
            ) : isLoading ? (
              <img src={loadingIcon} width="300rem" height="300rem" style = {width > 1024 ? { marginLeft : 370 } : { marginLeft : 100 }}/>
            ) :
            gamesList?.filter((game) => game.show)
            .map((item, i) => (
              width > 1024 && i === 3 ?
              <GameThumbLarge 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumb} 
                title={item.title} 
                $new={item.new}
              /> :
              width > 1024 && i === 2 ?
              <GameThumbWide 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumbwide} 
                title={item.title} 
                $new={item.new}
                $class="wide-top"
              /> :
              <GameThumb 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumb} 
                title={item.title} 
                $new={item.new}
              />
                ))}
        </GameListDiv>
    );
}
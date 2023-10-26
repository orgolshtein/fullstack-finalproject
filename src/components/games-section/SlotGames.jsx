import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce"
import loadingIcon from "../../assets/icons/loading.gif";
import { GameListDiv } from "../../styles/Containers"
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function SlotGames () {
    const { 
      gamesList, 
      getSlotGamesList, 
      errorMessage, 
      fetchErrorHandler, 
      isLoading, 
      loadingIsFinished, 
      slotsActive, 
      updateGameOverlayDisplay 
    } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getSlotGamesList();
          } catch {
            fetchErrorHandler(errorMessage);
          } finally {
            loadingIsFinished();
            slotsActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
        <GameListDiv>
            {
            errorMessage ? (
              <h1 className="loading-failed">{errorMessage}</h1>
            ) : isLoading ? (
              <img src={loadingIcon} width="300rem" height="300rem" style = {{ marginLeft : 370 }}/>
            ) :
            gamesList?.filter((game) => game.show)
            .map((item, i) => (
              i === 3 ?
              <GameThumbLarge 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumb} 
                title={item.title} 
                $new={item.new}
              /> :
              i === 1 ?
              <GameThumbWide 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumbwide} 
                title={item.title} 
                $new={item.new}
                $class="wide-top"
              /> :i === 8 ?
              <GameThumbWide 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumbwide} 
                title={item.title} 
                $new={item.new}
                $class="wide-bottom"
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
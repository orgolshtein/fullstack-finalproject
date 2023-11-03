import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameListDiv } from "../../styles/ContainersGames";
import loadingIcon from "../../assets/icons/loading.gif";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function TableGames () {
   const { 
      width,
      gamesList, 
      getTableGamesList, 
      gamesErrorMessage, 
      fetchGamesError, 
      isLoading, 
      loadingIsFinished, 
      tableActive, 
      updateGameOverlayDisplay 
    } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getTableGamesList();
          } catch {
            fetchGamesError("cannot display games");
          } finally {
            loadingIsFinished();
            tableActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
      <GameListDiv>
        {
        gamesErrorMessage ? 
          <h1 className="loading-failed">{gamesErrorMessage}</h1>
         : isLoading ? 
          <img 
            src={loadingIcon} 
            width="300rem" 
            height="300rem" 
            style = {width > 1024 ? { marginLeft : 370 } : { marginLeft : 100 }}
          />
         :
        gamesList?.filter((game) => game.show)
        .map((item, i) => (
          width > 1024 && i === 3 ?
          <GameThumbLarge 
          key={item.id} 
          $selectedgame={item} 
          image={item.thumb} 
          title={item.title} 
          $new  ={item.new}
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
          width > 1024 && i === 8 ?
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
};

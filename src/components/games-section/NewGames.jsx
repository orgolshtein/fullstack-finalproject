import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import loadingIcon from "../../assets/icons/loading.gif";
import { GameListDiv, GameListSmallDiv } from "../../styles/Containers";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";

export default function NewGames () {
    const { 
      width,
      gamesList, 
      getNewGamesList, 
      gamesErrorMessage, 
      fetchGamesError, 
      isLoading, 
      loadingIsFinished, 
      newActive, 
      updateGameOverlayDisplay 
    } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getNewGamesList();
          } catch {
            fetchGamesError("cannot display games");
          } finally {
            loadingIsFinished();
            newActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
        <>
        {
          width > 1000 ?
          <GameListDiv>
              {
              gamesErrorMessage ? (
                <h1 className="loading-failed">{gamesErrorMessage}</h1>
              ) : isLoading ? (
                <img src={loadingIcon} width="300rem" height="300rem" style = {{ marginLeft : 370 }}/>
              ) :
              gamesList?.filter((game) => game.show)
              .map((item, i) => (
                i === 6 ?
                <GameThumbLarge 
                  key={item.id} 
                  $selectedgame={item} 
                  image={item.thumb} 
                  title={item.title} 
                  $new={item.new}
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
            :
          <GameListSmallDiv>
            {
            gamesErrorMessage ? (
              <h1 className="loading-failed">{gamesErrorMessage}</h1>
            ) : isLoading ? (
              <img src={loadingIcon} width="300rem" height="300rem" style = {{ marginLeft : 100 }}/>
            ) :
            gamesList?.filter((game) => game.show)
            .map((item,) => (
              <GameThumb 
                key={item.id} 
                $selectedgame={item} 
                image={item.thumb} 
                title={item.title} 
                $new={item.new}
              />
                ))}
          </GameListSmallDiv>
        }
        </>
    );
}
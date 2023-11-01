import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import loadingIcon from "../../assets/icons/loading.gif";
import { GameListDiv, GameListSmallDiv } from "../../styles/Containers";
import GameThumb from "./GameThumb";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function Home () {
    const { 
      width,
      gamesList, 
      getGamesList, 
      errorMessage, 
      fetchErrorHandler, 
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
            fetchErrorHandler(errorMessage);
          } finally {
            loadingIsFinished();
            homeActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
      <>
      {
        width > 900 ?
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
              i === 2 ?
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
              :
        <GameListSmallDiv>
            {
            errorMessage ? (
              <h1 className="loading-failed">{errorMessage}</h1>
            ) : isLoading ? (
              <img src={loadingIcon} width="300rem" height="300rem" style = {{ marginLeft : 100 }}/>
            ) :
            gamesList?.filter((game) => game.show)
            .map((item) => (
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
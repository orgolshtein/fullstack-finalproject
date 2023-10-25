import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameListDiv } from "../../styles/Containers";
import GameThumbLarge from "./GameThumbLarge";

export default function NewGames () {
    const { gamesList, getNewGamesList, fetchErrorHandler, loadingIsFinished, newActive, updateGameOverlayDisplay } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getNewGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            newActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList?.filter((game) => game.show)
            .map((item, i) => (
              i === 6 ?
              <GameThumbLarge key={item.id} $selectedgame={item} image={item.thumb} title={item.title} $new={item.new}/>:
              <GameThumb key={item.id} $selectedgame={item} image={item.thumb} title={item.title} $new={item.new}/>
                ))}
        </GameListDiv>
    );
}
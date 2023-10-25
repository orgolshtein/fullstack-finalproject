import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameListDiv } from "../../styles/Containers";
import GameThumbLarge from "./GameThumbLarge";
import GameThumbWide from "./GameThumbWide";

export default function TableGames () {
    const { gamesList, getTableGamesList, fetchErrorHandler, loadingIsFinished, tableActive, updateGameOverlayDisplay } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getTableGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            tableActive();
            updateGameOverlayDisplay(false);
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList?.filter((game) => game.show)
            .map((item, i) => (
              i === 3 ?
              <GameThumbLarge key={item.id} $selectedgame={item} image={item.thumb} title={item.title} $new={item.new}/>:
              i === 2 ?
              <GameThumbWide key={item.id} $selectedgame={item} image={item.thumbwide} title={item.title} $new={item.new}/>:
              <GameThumb key={item.id} $selectedgame={item} image={item.thumb} title={item.title} $new={item.new}/>
                ))}
        </GameListDiv>
  );
}
import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce"
import { GameListDiv } from "../../styles/Containers"

export default function TableGames () {
    const { gamesList, getTableGamesList, fetchErrorHandler, loadingIsFinished, tableActive } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getTableGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            tableActive();
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList?.filter((game) => game.show)
            .map((item) => (
              <GameThumb key={item.id} image={item.thumb} $new={item.new} $res={180} />
                ))}
            
        </GameListDiv>
    );
}
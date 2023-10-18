import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce"
import { GameListDiv } from "../../styles/Containers"

export default function SlotGames () {
    const { gamesList, getSlotGamesList, fetchErrorHandler, loadingIsFinished, slotsActive } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getSlotGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            slotsActive();
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
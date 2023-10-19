import { useContext } from "react";
import { AppContext } from "../../state/AppContext";
import GameThumb from "./GameThumb";
import { useOncePostMount } from "../../hooks/UseOnce"
import { GameListDiv } from "../../styles/Containers"

export default function Home () {
    const { gamesList, getGamesList, fetchErrorHandler, loadingIsFinished, homeActive } = useContext(AppContext);

    useOncePostMount(() => {
        (async () => {
          try {
            await getGamesList();
          } catch {
            fetchErrorHandler();
          } finally {
            loadingIsFinished();
            homeActive();
          }
        })();
      });

    return(
        <GameListDiv>
            {gamesList?.filter((game) => game.show)
            .map((item) => (
              <GameThumb key={item.id} $selectedgame={item} image={item.thumb} title={item.title} $new={item.new}/>
                ))}
        </GameListDiv>
    );
}
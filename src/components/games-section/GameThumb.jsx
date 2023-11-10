import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameThumbContainer } from "../../styles/containersGames";
import { GameThumbNewTag } from "../../styles/elements";
import { GameThumbBtn } from "../../styles/buttons";
import GameImage from "../GameImage";

export default function GameThumb ({ image, title, isnew, selectedgame }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { updateSelectedGame, updateGameOverlayDisplay } = useContext(AppContext);

  useOncePostMount(()=> isnew ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer onClick={()=>{
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
          updateSelectedGame(selectedgame);
          updateGameOverlayDisplay(true);
        },200)
      }}>
          <GameThumbBtn $top="6rem" $left="3.5rem" $topsmall="3rem" $leftsmall="0.2rem">play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImage image={image} height="180" width="180" $heightsmall="100" $widthsmall="100" title={title} />
      </GameThumbContainer>
  );
};

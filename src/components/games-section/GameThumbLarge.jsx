import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameThumbContainer } from "../../styles/ContainersGames";
import { GameThumbNewTag } from "../../styles/Elements";
import { GameThumbBtn } from "../../styles/Buttons";
import GameImage from "../GameImage";

export default function GameThumbLarge ({ image, title, $new, $selectedgame }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { updateSelectedGame, updateGameOverlayDisplay } = useContext(AppContext);

  useOncePostMount(()=> $new ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer className="big" onClick={()=>{
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
          updateSelectedGame($selectedgame);
          updateGameOverlayDisplay(true);
        },200)
      }}>
          <GameThumbBtn $top="12rem" $left="7rem">play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImage image={image} height="373" width="373" title={title} />
      </GameThumbContainer>
  );
};

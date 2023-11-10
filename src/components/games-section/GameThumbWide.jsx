import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameThumbContainer } from "../../styles/containersGames";
import { GameThumbNewTag } from "../../styles/elements";
import { GameThumbBtn } from "../../styles/buttons";
import GameImage from "../GameImage";

export default function GameThumbWide ({ image, title, isnew, selectedgame, wideclass }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { updateSelectedGame, updateGameOverlayDisplay } = useContext(AppContext);

  useOncePostMount(()=> isnew ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer className={wideclass} onClick={()=>{
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
          updateSelectedGame(selectedgame);
          updateGameOverlayDisplay(true);
        },200)
      }}>
          <GameThumbBtn $top="6rem" $left="7rem">play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImage image={image} height="180" width="373" title={title} />
      </GameThumbContainer>
  );
};

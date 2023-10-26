import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameThumbContainer } from "../../styles/Containers";
import { GameThumbNewTag } from "../../styles/Elements";
import { GameThumbBtn } from "../../styles/Buttons";
import GameImage from "../GameImage";

export default function GameThumbLarge ({ image, title, $new, $selectedgame }) {
  const [newTagDisplay, setNewTagDisplay] = useState("none");
  const { updateSelectedGame, updateGameOverlayDisplay } = useContext(AppContext);

  useOncePostMount(()=> $new ? setNewTagDisplay("inline-block"): null);

  return (
      <GameThumbContainer className="big" onClick={()=>{
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
          updateSelectedGame($selectedgame);
          updateGameOverlayDisplay(true);
        },200)
      }}>
          <GameThumbBtn $top="12rem" $left="7rem">play now</GameThumbBtn>
          <GameThumbNewTag display={newTagDisplay}>new</GameThumbNewTag>
          <GameImage image={image} $h={373} $w={373} title={title} />
      </GameThumbContainer>
  );
};
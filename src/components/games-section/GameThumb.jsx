import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/UseOnce";
import { GameThumbContainer } from "../../styles/Containers";
import { GameThumbNewTag } from "../../styles/Elements";
import { GameThumbBtn } from "../../styles/Buttons";
import GameImage from "../GameImage";

export default function GameThumb ({ image, title, $new, $selectedgame }) {
  const [newTagDisplay, setNewTagDisplay] = useState("none");
  const { width, updateSelectedGame, updateGameOverlayDisplay } = useContext(AppContext);

  useOncePostMount(()=> $new ? setNewTagDisplay("inline-block"): null);

  return (
      <GameThumbContainer onClick={()=>{
        updateGameOverlayDisplay(false);
        setTimeout(()=>{
          updateSelectedGame($selectedgame);
          updateGameOverlayDisplay(true);
        },200)
      }}>
          {
            width > 400 ?
            <>
            <GameThumbBtn $top="6rem" $left="3.5rem">play now</GameThumbBtn>
            <GameThumbNewTag display={newTagDisplay}>new</GameThumbNewTag>
            <GameImage image={image} $h={180} $w={180} title={title} />
            </>
            :
            <>
            <GameThumbBtn $top="3rem" $left="0.2rem">play now</GameThumbBtn>
            <GameThumbNewTag display={newTagDisplay}>new</GameThumbNewTag>
            <GameImage image={image} $h={100} $w={100} title={title} />
            </>
          }
      </GameThumbContainer>
  );
};
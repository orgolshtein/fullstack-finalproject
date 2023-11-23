import { useContext, useState } from "react";

import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameThumbContainer, GameThumbBtn, GameThumbNewTag } from "../../styles/main.content";
import { GameImg } from "../../styles/global";

export default function GameThumb ({ image, title, isnew, selectedgame, type }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { openGameOverlay } = useContext(AppContext);

  useOncePostMount(()=> isnew ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer className={type} onClick={()=>openGameOverlay(selectedgame)}>
          <GameThumbBtn 
            $top={type === "big" ? "12rem" : "6rem"} 
            $left={type === "normal" ? "3.5rem" : "7rem"} 
            $top_small="3rem" 
            $left_small="0.2rem"
          >play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImg 
            src={image} 
            height={type === "big" ? "373" : "180"} 
            width={type === "normal" ? "180" : "373"} 
            $height_small="100" 
            $width_small="100" 
            title={title} 
          />
      </GameThumbContainer>
  );
};

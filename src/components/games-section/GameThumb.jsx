import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameThumbContainer } from "../../styles/containersGames";
import { GameThumbNewTag } from "../../styles/elements";
import { GameThumbBtn } from "../../styles/buttons";
import { GameImg } from "../../styles/elements";

export default function GameThumb ({ image, title, isnew, selectedgame }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { openGameOverlay } = useContext(AppContext);

  useOncePostMount(()=> isnew ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer onClick={()=>openGameOverlay(selectedgame)}>
          <GameThumbBtn $top="6rem" $left="3.5rem" $topsmall="3rem" $leftsmall="0.2rem">play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImg src={image} height="180" width="180" $heightsmall="100" $widthsmall="100" title={title} />
      </GameThumbContainer>
  );
};

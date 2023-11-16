import { useContext, useState } from "react";
import { AppContext } from "../../state/AppContext";
import { useOncePostMount } from "../../hooks/useOncePostMount";
import { GameThumbContainer } from "../../styles/containersGames";
import { GameThumbNewTag } from "../../styles/elements";
import { GameThumbBtn } from "../../styles/buttons";
import { GameImg } from "../../styles/elements";

export default function GameThumbLarge ({ image, title, isnew, selectedgame }) {
  const [isNewTag, setIsNewTag] = useState(false);
  const { openGameOverlay } = useContext(AppContext);

  useOncePostMount(()=> isnew ? setIsNewTag(true) : setIsNewTag(false));

  return (
      <GameThumbContainer className="big" onClick={()=>openGameOverlay(selectedgame)}>
          <GameThumbBtn $top="12rem" $left="7rem">play now</GameThumbBtn>
          {isNewTag ? <GameThumbNewTag>new</GameThumbNewTag> : null}
          <GameImg src={image} height="373" width="373" title={title} />
      </GameThumbContainer>
  );
};

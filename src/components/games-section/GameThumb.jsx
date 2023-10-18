import { useContext, useState } from "react";
import styled from "styled-components";
import { GameThumbBtn } from "../../styles/Buttons";
import { GameThumbContainer } from "../../styles/Containers";
import { GameThumbNewTag } from "../../styles/Elements";
import { useOncePostMount } from "../../hooks/UseOnce";
import { AppContext } from "../../state/AppContext";

export default function GameThumb ({ image, $new, $res }) {
  const [newTagDisplay, setNewTagDisplay] = useState("none");
  const { updateLoginDisplay } = useContext(AppContext);

  useOncePostMount(()=> $new ? setNewTagDisplay("inline-block"): null);

  const thumbClickHandler = () => {
    updateLoginDisplay("flex");
  };

  return (
      <GameThumbContainer onClick={thumbClickHandler}>
          <GameThumbBtn>play now</GameThumbBtn>
          <GameThumbNewTag display={newTagDisplay}>new</GameThumbNewTag>
          <GameThumbIMG src={image} $res={$res} alt="" />
      </GameThumbContainer>
  );
}


const GameThumbIMG = styled.img`
  height: ${(props) => props.$res}px;
  width: ${(props) => props.$res}px;
`;
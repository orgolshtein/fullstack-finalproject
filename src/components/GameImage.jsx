import styled from "styled-components";

const GameImage = ({image, title, $h, $w}) => (<GameImageIMG src={image} alt={title} $h={$h} $w={$w}/>);

export default GameImage;

const GameImageIMG = styled.img`
  height: ${(props) => props.$h}px;
  width: ${(props) => props.$w}px;
`;
import styled from "styled-components";

const GameImage = ({image, title, $res}) => (<GameImageIMG src={image} alt={title} $res={$res}/>);

export default GameImage;

const GameImageIMG = styled.img`
  height: ${(props) => props.$res}px;
  width: ${(props) => props.$res}px;
`;
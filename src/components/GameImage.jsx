import styled from "styled-components";

const GameImage = ({image, title, height, $heightsmall, width, $widthsmall, $nodisplay}) => (<
  GameImageIMG src={image} alt={title} height={height} $heightsmall={$heightsmall} width={width} $widthsmall={$widthsmall} $nodisplay={$nodisplay}/>
  );

export default GameImage;

const GameImageIMG = styled.img`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;

  @media only screen and (max-width: 412px){
    height: ${(props) => props.$heightsmall}px;
    width: ${(props) => props.$widthsmall}px;
  }

  @media only screen and (max-height: 412px){
    display: ${(props)=>props.$nodisplay}
  }
`;
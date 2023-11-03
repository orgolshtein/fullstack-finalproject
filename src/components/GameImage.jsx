import { GameImageImg } from "../styles/Elements";

const GameImage = ({image, title, height, $heightsmall, width, $widthsmall, $display}) => (
  <GameImageImg 
    src={image} 
    alt={title} 
    height={height} 
    width={width} 
    $heightsmall={$heightsmall} 
    $widthsmall={$widthsmall} 
    $display={$display}
  />
  );

export default GameImage;

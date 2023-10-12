import styled from "styled-components";

const GameThumb = ({ image, $res }) =>(
    <div>
        <GameThumbIMG src={image} $res={$res} alt="" />
    </div>
);

export default GameThumb;

const GameThumbIMG = styled.img`
  height: ${(props) => props.$res}px;
  width: ${(props) => props.$res}px;
`;
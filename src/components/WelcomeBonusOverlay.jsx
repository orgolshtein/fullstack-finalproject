import styled from "styled-components";
import Overlay from "../assets/overlays/welcome-bonus.png";

const WelcomeBonusOverlay = ({ $position, $top, $zindex, width, $left, cursor, alt }) => (
    <OverlayIMG 
        src={Overlay}
        $position={$position}
        $top={$top}
        $zindex={$zindex}
        width={width}
        $left={$left}
        cursor ={cursor} 
        alt={alt}
    />
);

export default WelcomeBonusOverlay;

const OverlayIMG = styled.img`
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    z-index: ${(props) => props.$zindex};
    width: ${(props) => props.width};
    left: ${(props) => props.$left};
    cursor: ${(props) => props.cursor || "arrow"};
`
import styled from "styled-components";
import Overlay from "../assets/overlays/welcome-bonus.png";

const WelcomeBonusOverlay = ({ 
    $position, 
    $topwide,
    $topbig,
    $topmedium, 
    $topsmall, 
    $widthwide,
    $widthbig,
    $widthmedium,
    $widthsmall, 
    $leftwide,
    $leftbig,
    $leftmedium,
    $leftsmall,
    $nodisplay,
    $zindex, 
    cursor, 
    alt 
    }) => (
    <OverlayIMG 
        src={Overlay}
        $position={$position}
        $topwide={$topwide}
        $topbig={$topbig}
        $topmedium={$topmedium}
        $topsmall={$topsmall}
        $widthwide={$widthwide}
        $widthbig={$widthbig}
        $widthmedium={$widthmedium}
        $widthsmall={$widthsmall}
        $leftwide={$leftwide}
        $leftbig={$leftbig}
        $leftmedium={$leftmedium}
        $leftsmall={$leftsmall}
        $nodisplay={$nodisplay}
        cursor ={cursor} 
        $zindex={$zindex}
        alt={alt}
    />
);

export default WelcomeBonusOverlay;

const OverlayIMG = styled.img`
    position: ${(props) => props.$position};
    top: ${(props) => props.$topwide};
    width: ${(props) => props.$widthwide};
    left: ${(props) => props.$leftwide};
    z-index: ${(props) => props.$zindex};
    cursor: ${(props) => props.cursor || "arrow"};

    @media only screen and (max-width: 1024px){
        top: ${(props) => props.$topbig};
        width: ${(props) => props.$widthbig};
        left: ${(props) => props.$leftbig};
    }

    @media only screen and (max-width: 768px){
        top: ${(props) => props.$topmedium};
        width: ${(props) => props.$widthmedium};
        left: ${(props) => props.$leftmedium};
    }

    @media only screen and (max-width: 412px){
        top: ${(props) => props.$topsmall};
        width: ${(props) => props.$widthsmall};
        left: ${(props) => props.$leftsmall};
    }

    @media only screen and (max-height: 412px){
        display: ${(props) => props.$nodisplay};
    }
`
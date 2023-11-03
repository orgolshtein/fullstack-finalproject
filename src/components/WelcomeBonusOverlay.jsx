import { WelcomeOverlayImg } from "../styles/Elements";
import OverlaySrc from "../assets/overlays/welcome-bonus.png";

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
    $display,
    $zindex, 
    cursor, 
    alt 
    }) => (
    <WelcomeOverlayImg
        src={OverlaySrc}
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
        $display={$display}
        cursor ={cursor} 
        $zindex={$zindex}
        alt={alt}
    />
);

export default WelcomeBonusOverlay;

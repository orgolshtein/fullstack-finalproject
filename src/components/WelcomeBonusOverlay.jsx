import { WelcomeOverlayImg } from "../styles/elements";
import OverlaySrc from "../assets/overlays/welcome-bonus.png";

const WelcomeBonusOverlay = ({ 
    $display,
    $position, 
    $topwide, $topbig, $topmedium, $topsmall, 
    $widthwide, $widthbig, $widthmedium, $widthsmall, 
    $leftwide, $leftbig, $leftmedium, $leftsmall,
    $zindex, 
    cursor
    }) => (
    <WelcomeOverlayImg
        src={OverlaySrc}
        alt="Welcome Bonus"
        $display={$display}
        $position={$position}
        $topwide={$topwide} $topbig={$topbig} $topmedium={$topmedium} $topsmall={$topsmall}
        $widthwide={$widthwide} $widthbig={$widthbig} $widthmedium={$widthmedium} $widthsmall={$widthsmall}
        $leftwide={$leftwide} $leftbig={$leftbig} $leftmedium={$leftmedium} $leftsmall={$leftsmall}
        $zindex={$zindex}
    />
);

export default WelcomeBonusOverlay;

import { LoadingIconImg } from "../styles/elements";
import IconSrc from "../assets/icons/loading.gif"

const LoadingIcon = ({ $size, $position, $left, $marginleft, $marginleftmedium }) =>(
    <LoadingIconImg 
      src={IconSrc} 
      $size={$size} 
      $position={$position}
      $left={$left}
      $marginleft={$marginleft}
      $marginleftmedium={$marginleftmedium}  
    />
);

export default LoadingIcon;

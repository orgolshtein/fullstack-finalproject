import { AppLogoImg } from "../styles/Elements";
import Logo from "../assets/logos/unagibet-logo.png";

const AppLogo = ({ $res, $resmedium, $leftwide, $left, $zindex, cursor, alt }) =>(
    <AppLogoImg 
      src={Logo} 
      $res={$res}
      $resmedium={$resmedium} 
      $leftwide={$leftwide} 
      $left={$left} 
      $zindex={$zindex} 
      cursor ={cursor} 
      alt={alt}
    />
);

export default AppLogo;

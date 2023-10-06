import styled from "styled-components";
import Logo from "../assets/logos/unagibet-logo.png";

const AppLogo = ({ $res, $pos, $left, $zindex, cursor, alt }) =>(
    <AppLogoIMG 
    src={Logo} 
    $res={$res} 
    $pos={$pos} 
    $left={$left} 
    $zindex={$zindex} 
    cursor ={cursor} 
    alt={alt}
    />
);

export default AppLogo;

const AppLogoIMG = styled.img`
  height: ${(props) => props.$res}rem;
  width: ${(props) => props.$res}rem;
  position: ${(props) => props.$pos};
  left: ${(props) => props.$left};
  z-index: ${(props) => props.$zindex};
  cursor: ${(props) => props.cursor || "arrow"};
`;
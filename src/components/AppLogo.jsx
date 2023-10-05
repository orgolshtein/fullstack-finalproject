import styled from "styled-components";
import Logo from "../assets/logos/unagibet-logo.png";

const AppLogo = ({ res, index, cursor, alt }) =>(
    <AppLogoIMG src={Logo} res={res} index={index} cursor ={cursor} alt={alt}/>
);

export default AppLogo;

const AppLogoIMG = styled.img`
  height: ${(props) => props.res}rem;
  width: ${(props) => props.res}rem;
  z-index: ${(props) => props.index};
  cursor: ${(props) => props.cursor || "arrow"};
`;
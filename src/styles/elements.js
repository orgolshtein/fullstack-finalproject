import styled from "styled-components";
import * as AppColor from "./colors";

export const AppLogo = styled.div`
  content: url("src/assets/logos/unagibet-logo.png");
  display: inline-block;
  background-size: ${(props) => props.$size}rem ${(props) => props.$size}rem;
  height: ${(props) => props.$size}rem;
  width: fit-content;
  left: ${(props) => props.$leftwide}rem;
  z-index: ${(props) => props.$zindex};

  @media only screen and (max-width: 1024px){
    left: ${(props) => props.$left}rem;
      }
  
  @media only screen and (max-width: 768px){
    background-size: ${(props) => props.$sizemedium}rem ${(props) => props.$sizemedium}rem;
    height: ${(props) => props.$sizemedium}rem;
      }
`;

export const WelcomeBonusOverlay = styled.img`
    content: url("src/assets/overlays/welcome-bonus.png");
    width: ${(props) => props.$widthwide};
    position: ${(props) => props.$position};
    top: ${(props) => props.$topwide};
    left: ${(props) => props.$leftwide};
    z-index: ${(props) => props.$zindex};

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
        display: ${(props) => props.$display};
    }
`

export const Loader = styled.img`
  content: url("src/assets/icons/loading.gif");
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  position: ${(props) => props.$position};
  left: ${(props) => props.$left};
  margin-left: ${(props) => props.$marginleft};

  @media only screen and (max-width: 1024px){
    left: ${(props) => props.$mediumleft};
    margin-left: ${(props) => props.$marginleftmedium}
    }
`;

export const PasswordVisIcon = styled.img`
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    width: ${(props) => props.width};
    opacity: .60;
    position: absolute;
    left: 83%;
    font-size: ${(props) => props.width};;
    cursor: ${(props) => props.cursor};
`

export const GameThumbNewTag = styled.span`
    background-color: ${AppColor.LoginBtn};
    width: 3rem;
    display: inline-block;
    line-height: 1.7;
    font-size: 0.9rem;
    border-radius: 0.1rem;
    text-transform: capitalize;
    font-weight: 300;
    color: ${AppColor.ButtonText};
    position: absolute;
    text-align: center;
    top: 0.5rem;
    left: 0rem;
    z-index:3;
    opacity: .9;
`

export const GameImg = styled.img`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;

  @media only screen and (max-width: 412px){
    height: ${(props) => props.$heightsmall}px;
    width: ${(props) => props.$widthsmall}px;
  }

  @media only screen and (max-height: 412px){
    display: ${(props)=>props.$display}
  }
`

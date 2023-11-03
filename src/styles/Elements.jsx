import styled from "styled-components";
import * as AppColor from "./Colors";

export const AppLogoImg = styled.img`
  height: ${(props) => props.$res}rem;
  width: ${(props) => props.$res}rem;
  left: ${(props) => props.$leftwide};
  z-index: ${(props) => props.$zindex};
  cursor: ${(props) => props.cursor || "arrow"};

  @media only screen and (max-width: 1024px){
    left: ${(props) => props.$left};
      }
  
  @media only screen and (max-width: 768px){
    height: ${(props) => props.$resmedium}rem;
    width: ${(props) => props.$resmedium}rem;
      }
`;

export const WelcomeOverlayImg = styled.img`
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
        display: ${(props) => props.$display};
    }
`

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

export const GameImageImg = styled.img`
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

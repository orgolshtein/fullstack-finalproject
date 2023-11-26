import styled, { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

import { assetUrl } from "../api/app.api";
import * as AppColor from "./colors";

const GlobalStyle = createGlobalStyle`
${Reset}
html {
    font: 13.5px 'Helvetica Neue',Arial;
    color: ${AppColor.MainText};
    background: -moz-linear-gradient(
    top,
    ${AppColor.MainTheme2} 500px,
    ${AppColor.MainTheme1} 800px
  );
  background: -webkit-linear-gradient(
    top,
    ${AppColor.MainTheme2} 500px,
    ${AppColor.MainTheme1} 800px
  );
  background: linear-gradient(
    to bottom,
    ${AppColor.MainTheme2} 500px,
    ${AppColor.MainTheme1} 800px
  );
    font-family: Arial,sans-serif;

    @media only screen and (max-width: 1024px) {
        width: 100%;                
    }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export const AppLogo = styled.img`
  content: url(${assetUrl+"/logos/unagibet-logo.png"});
  display: inline-block;
  background-size: ${(props) => props.$size}rem ${(props) => props.$size}rem;
  height: ${(props) => props.$size}rem;
  left: ${(props) => props.$left_wide}rem;
  z-index: ${(props) => props.$z_index};

  @media only screen and (max-width: 1024px){
    left: ${(props) => props.$left}rem;
      }
  
  @media only screen and (max-width: 768px){
    background-size: ${(props) => props.$size_medium}rem ${(props) => props.$size_medium}rem;
    height: ${(props) => props.$size_medium}rem;
      }
`;

export const WelcomeBonusOverlay = styled.img`
    content: url(${assetUrl+"/overlays/welcome-bonus.png"});
    width: ${(props) => props.$width_wide};
    position: ${(props) => props.$position};
    top: ${(props) => props.$top_wide};
    left: ${(props) => props.$left_wide};
    z-index: ${(props) => props.$z_index};

    @media only screen and (max-width: 1024px){
        top: ${(props) => props.$top_big};
        width: ${(props) => props.$width_big};
        left: ${(props) => props.$left_big};
    }

    @media only screen and (max-width: 768px){
        top: ${(props) => props.$top_medium};
        width: ${(props) => props.$width_medium};
        left: ${(props) => props.$left_medium};
    }

    @media only screen and (max-width: 500px){
        top: ${(props) => props.$top_small};
        width: ${(props) => props.$width_small};
        left: ${(props) => props.$left_small};
    }

    @media only screen and (max-height: 412px){
        display: ${(props) => props.$display_412px_height};
    }
`;

export const Loader = styled.img`
  content: url(${assetUrl+"/icons/loading.gif"});
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  position: ${(props) => props.$position};
  left: ${(props) => props.$left};
  margin-left: ${(props) => props.$margin_left};

  @media only screen and (max-width: 1024px){
    left: ${(props) => props.$left_medium};
    margin-left: ${(props) => props.$margin_left_medium}
    }
`;

export const PasswordVisIcon = styled.img`
    height: 100%;
    width: ${(props) => props.width};
    opacity: .60;
    position: absolute;
    right: 4%;
    font-size: ${(props) => props.width};;
    cursor: ${(props) => props.cursor};
`;

export const GameImg = styled.img`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;

  @media only screen and (max-width: 412px){
    height: ${(props) => props.$height_small}px;
    width: ${(props) => props.$width_small}px;
  }

  @media only screen and (max-height: 412px){
    display: ${(props)=>props.$display_412px_height}
  }
`;

export default GlobalStyle;

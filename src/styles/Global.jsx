import { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";
import * as AppColor from "./Colors"

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
`

export default GlobalStyle;

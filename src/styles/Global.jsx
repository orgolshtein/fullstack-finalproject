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
    ${AppColor.MainLight} 500px,
    ${AppColor.MainDark} 800px
  );
  background: -webkit-linear-gradient(
    top,
    ${AppColor.MainLight} 500px,
    ${AppColor.MainDark} 800px
  );
  background: linear-gradient(
    to bottom,
    ${AppColor.MainLight} 500px,
    ${AppColor.MainDark} 800px
  );
    font-family: Arial,sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default GlobalStyle;
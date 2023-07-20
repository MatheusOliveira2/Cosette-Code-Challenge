import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    --primary-color: #272727;
    --secondary-color: #f29bad;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    color: var(--primary-color);
  }

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg);
    color: var(--textNormal);

    a {
        color: var(--textNormal);
    }
    
    &.dark {
      --bg: #221133;
      --textNormal: #fff;
    }

    &.light {
      --bg: #fff;
      --textNormal: #000;
    }
    
  }
  `;

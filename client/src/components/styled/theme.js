import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: #FCFBF8;
    color: #222205;
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    
    padding: 2rem;
    max-width: 20rem;
    margin: 0 auto;
  }
`;

export const theme = {
  black: "#222205",
};
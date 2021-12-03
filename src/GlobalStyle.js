import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg-nav: #090b13;
    --bg-main: #040714;
    --bt-colorblack: black;
    --bt-colorwhite: #f9f9f9;
    --signup-bg: #0063e5;

  }

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
  }

  body{
    color: white;
    font-size: 1.2rem;
  }
`;
export default GlobalStyle;

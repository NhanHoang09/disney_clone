import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --bg-nav: #090b13;
    --bg-main: #040714;

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

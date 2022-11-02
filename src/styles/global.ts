import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Manrope, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
    border: none;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background-color: ${({ theme: { darkBlue } }) => darkBlue};
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

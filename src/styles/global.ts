import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
  }

  body {
    background-color: ${({ theme }) => theme.darkBlue};
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

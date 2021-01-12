import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; outline: none; }

  body {
    background: red;
    font-family: Poppins, sans-serif;
    background: #FFF;
  }

  input, textarea { font-family: Poppins, sans-serif; }

  button { cursor: pointer; }
`;

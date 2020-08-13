import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

body {
    background: #312E38;
    line-height: 1;
    -webkit-font-smoothing: antialiased !important;

  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  button{
    cursor: pointer;
  }

  body, input, button{
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }


`;

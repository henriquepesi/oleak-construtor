import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f2f4f6;
    -webkit-font-smothing: antialiased;
    color: #3e3e3e;
    font-weight: 600;
    overflow-x: hidden;
  }

  
  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  .mainButton {
    cursor: pointer;
    background: rgb(219, 25, 67);
    border: none;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    font-weight: 600;
    letter-spacing: .0333em;
    line-height: 1.25;
    padding: 1em 2em;
    /* margin: 0 auto; */
    display: block;
    margin-bottom: 5em;
    margin-top: 1em;
    @media print  {
        display: none;
    }
  }
  
  .transparentButton {
    height: 60px;
    padding: 1em 0;
    border: none;
    background: transparent;
    font-weight: 800;
    color: #333;
    cursor: pointer;

    svg {
      margin-right: 10px;
    }
  }
`;

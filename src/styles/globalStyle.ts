import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  :root {
    --color-primary-5:  #eff5ff;
    --color-primary-10: #e9f0fd;
    --color-primary-20: #d3e1fb;
    --color-primary-30: #a7c4f7;
    --color-primary-40: #5089ef;
    --color-primary-60: #1d56bc;
    --color-primary-70: #16408d;
    --color-primary-80: #0e2b5e;
    --color-primary-90: #0b2047;
    --color-secondary-5: #e5ebf1;
    --color-secondary-10: #cdd7e4;
    --color-secondary-20: #b4c4d6;
    --color-secondary-30: #99b4cd;
    --color-secondary-40: #335e91;
    --color-secondary-50: #003675;
    --color-secondary-60: #002b5e;
    --color-secondary-70: #002046;
    --color-secondary-80: #00162f;
    --color-secondary-90: #000b17;
    --color-gray-5: #f8f8f8;
    --color-gray-10: #f0f0f0;
    --color-gray-20: #e4e4e4;
    --color-gray-30: #d8d8d8;
    --color-gray-40: #c6c6c6;
    --color-gray-50: #8e8e8e;
    --color-gray-60: #717171;
    --color-gray-70: #555; 
    --color-gray-80: #2d2d2d;
    --color-gray-90: #1d1d1d;
    --color-red: #d50136;
    --color-green: #006e18;

    //행안부수정요청사항
    --color-pink:#D66D91;
    --color-dieblue: #318dc7;
    --color-subDieblue: #14619D;
    --color-diered: #C44D5D;
    --color-gray: #757575;
    --color-middleButton: #53B6B0;
    --color-listborder:#A7BBD2;
    --color-bgGray:#EDEDED;
  }
  body {
    font-family: "Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif !important";
    font-size: 14px;
    overflow-y: overlay;
    word-break: keep-all;
  }
  div, section, button, table, tr, th, td, span, ul, li, label, input, textarea {
    box-sizing: border-box
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  ul, li {
    list-style: none;
  }
  a {
    color: var(--colo-font);
    text-decoration: none;
  }
  button {
    display: flex;
    cursor: pointer;
    // outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    background: none;
  };
  input[type="text"] {
    font-family: "Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif";    
    width: 100%;
    outline: none;
    border : 0;
    padding: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 32px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-size: 15px;
      font-weight: 700;
      }
  }
  textarea {
    font-family: "Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif";    
    width: 100%;
    border: 0;
    resize: none;
    font-size: 15px;
    line-height: 1.2rem;
    padding: 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-size: 15px;
      font-weight: 700;
    }
  }
  strong {
    font-weight: bold;
  }
  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  ::-webkit-scrollbar-thumb {
      outline: none;
      border-radius: 10px;
      border: 4px solid transparent;
      box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.15);
  }
  ::-webkit-scrollbar-thumb:hover {
      border: 4px solid transparent;
      box-shadow: inset 6px 6px 0 rgba(34, 34, 34, 0.3);
  }
  ::-webkit-scrollbar-track {
      box-shadow: none;
      background-color: transparent;
  }
  .uppercase{
    text-transform: uppercase;
  }
  .cssInputNum{
    input{
      padding-right: 8px;
      text-align: right;
    }
  }
`;

export default GlobalStyles;

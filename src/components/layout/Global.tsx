import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
* {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  height: 100%;
}
body {
    margin:0;
    background: rgb(248, 249, 250);
    height: 100%;
}
#gatsby-focus-wrapper, #___gatsby {
  height: 100%;
  display: flex;
  flex-direction: column;
}
`;

export default Global;

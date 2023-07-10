import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  *{
    scrollbar-width: 10px;
    scrollbar-color: #8c8c8c;
  }

  *::-webkit-scrollbar{
      width: 8px;
    }
    
  *::-webkit-scrollbar-thumb{
    background-color: #8c8c8c;
    border-radius: 20px;
  }
`

export default GlobalStyles;
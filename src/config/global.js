import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    margin: 0;
    padding: 0;
    font-family: 'Muli', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    
   
  }
  
   code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
text {
  fill: ${({ theme }) => theme.chartText} !important;
  
}
  
  `;

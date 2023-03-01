import { Global, css } from '@emotion/react';

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      #root {
        padding: 100px 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

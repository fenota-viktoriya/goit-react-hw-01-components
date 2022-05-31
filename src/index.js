import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/AppFile/App';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'Styles/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

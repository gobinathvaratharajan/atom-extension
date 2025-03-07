import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import App from './app.jsx';
import { theme } from './lib/theme.js';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context.jsx';
import { GlobalStyle } from 'global.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
        <ToastContainer autoClose={1500} />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
);

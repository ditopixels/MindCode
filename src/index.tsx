import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme({
  palette:{
      primary:{
          main:"#F42B7E"
      }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('mindcode') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mdTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
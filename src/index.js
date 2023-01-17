import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './global-styles';
import App from './app';
export { default as packageJson } from '../package.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GlobalStyles></GlobalStyles>
    <App />
  </StrictMode>
);
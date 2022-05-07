import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import FontStyles from './fonts';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Quickens', 'Arial', Arial, Helvetica, sans-serif;
    background-color: #285dcf;
  background-image: linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.5) 50%);
  background-size: 75px 75px;
  }
  ul {
    list-style-type: none;
  }
  img {
    width: 100%;
  }
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
    <FontStyles />
  </Provider>,
);

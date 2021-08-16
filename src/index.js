import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from '../src/styles/GlobalStyle'
import {BrowserRouter} from 'react-router-dom'
import {CartContextProvider} from "./CartContext"


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


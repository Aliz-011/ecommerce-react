import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initialState, reducer, StoreProvider } from './context/Store';
import { CartProvider } from './context/CartStore';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={reducer}>
      <CartProvider>
        <App />
      </CartProvider>
    </StoreProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from 'react-router-dom'

import { MoviesContext,MoviesContextProvider } from './context/MoviesContext';
import { WatchLaterContext,WatchLaterContextProvider } from './context/WatchLaterContext';

export {MoviesContext,WatchLaterContext};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MoviesContextProvider>
        <WatchLaterContextProvider>
          <App />
        </WatchLaterContextProvider>
      </MoviesContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Helmet>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

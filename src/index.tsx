import React from 'react';

import ReactDOM from 'react-dom';

import { App } from './App';
import { CssReset } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CssReset />
  </React.StrictMode>,
  document.getElementById('root'),
);

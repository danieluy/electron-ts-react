import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.scss';

declare global {
  interface Window { bridge: Bridge; }
}

ReactDOM.render(
  <App />,
	document.getElementById('root'),
);

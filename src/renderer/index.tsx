import React from 'react';
import ReactDOM from 'react-dom';
import { IBridge } from '../bridge/bridge.interface';
import App from './components/App';

import './index.scss';

declare global {
  interface Window { bridge: IBridge }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

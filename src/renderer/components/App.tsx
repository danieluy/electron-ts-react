import React from 'react';
import electronLogo from '../../assets/electron-logo.png';
import typeScriptLogo from '../../assets/typescript-logo.png';
import reactLogo from '../../assets/react-logo.svg';

import './app.scss';

const App = () => {
  const info = window.bridge.getInfo();

  return (
    <div className="app">
      <h1>Electron + TypeScript + React</h1>
      <div>
        <img src={electronLogo} alt="Electron Js Logo" />
        <img src={typeScriptLogo} alt="TypeScript Logo" />
        <img src={reactLogo} alt="React Js Logo" />
      </div>
      <h2>Welcome {info.userName}</h2>
      <p>
        <strong>
          {info.platform} {info.arch}
        </strong>
      </p>
      <p>
        <small>
          {info.version}
        </small>
      </p>
    </div>
  );
}

export default App;

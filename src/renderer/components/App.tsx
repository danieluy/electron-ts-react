import React from 'react';

const App = () => {
  const info = window.bridge.getInfo();

  return (
    <div className="app">
      <h1>Electron + TypeScript + React Template</h1>
      <h2>Welcome {info.userName}</h2>
      <p>Your system is {info.platform} {info.arch}</p>
      <p>Version {info.version}</p>
    </div>
  );
}

export default App;

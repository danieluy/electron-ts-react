import React from 'react';

const App = () => {
  return (
    <div className="app">
      <h1>Electron + TypeScript + React Template</h1>
      <p>{window.bridge.helloWorld('world')}</p>
    </div>
  );
}

export default App;

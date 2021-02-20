const path = require('path');

module.exports = {
  // Electron Entrypoint
  entry: path.join(__dirname, 'src', 'main', 'index.ts'),
  target: 'electron-main',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  }
};

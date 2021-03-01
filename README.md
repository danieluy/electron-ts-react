# Electron + TypeScript + React Template v0.1.0

[Electron v11.2.3](https://www.electronjs.org/) template, with [TypeScript v4.1.5](https://www.typescriptlang.org/), implementing [React v17.0.1](https://reactjs.org/).

> Build-ready using [electron-builder](https://www.electron.build/)

This projects takes a strong security posture by disabling all known insecure features (you can choose yo enable them but is not recommended). 

If you aren't sure how to keep being safe and still use the native capabilities, check the implementation of `src/bridge/index.ts`, that should give you a good idea, and more importantly, please read this article [Security, Native Capabilities, and Your Responsibility
](https://www.electronjs.org/docs/tutorial/security).

## Directories
- **/**
  - The root directory contains only build-related stuff
- **/build**
  - Any file placed in here will be packed with the app
  - Both `icon.png` and `icon.icns` have to be here
- **/dist**
  - Ignored directory. Contains temp files.
  - All `.js`, `.html`, and `.js.map` files placed directly inside will be packed with the app
- **/node_modules**
  - Ignored directory.
  - Contains dependencies files.
- **/src** - Here's where you write code.
  - **/src/main** - Electron code.
  - **/src/renderer** - UI code.
  - **/src/bridge** - Low level APIs exposed to the UI.
  - **/src/constants** - Shared constants.

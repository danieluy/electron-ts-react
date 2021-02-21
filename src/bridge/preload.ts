const { contextBridge } = require('electron');
const os = require('os');

/**
 * Allows safely low level access
 * To extend, update src/@types/bridge.d.ts
 */
contextBridge.exposeInMainWorld('bridge', {
  getInfo: () => ({
    userName: os.userInfo().username,
    platform: os.platform(),
    arch: os.arch(),
    version: os.version(),
  }),
});

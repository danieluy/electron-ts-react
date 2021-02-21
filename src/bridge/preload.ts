const { contextBridge } = require('electron');

/**
 * Allows safely low level access
 * To extend, update src/@types/bridge.d.ts
 */
contextBridge.exposeInMainWorld('bridge', {
  helloWorld: (name: string) => `Hello ${name} from the Bridge`,
});

import os from 'os';
import { IBridge } from './bridge.interface';

/**
 * To extend, update bridge.interface.ts
 */
export const bridge: IBridge = {
  getInfo: () => {
    return {
      userName: os.userInfo().username,
      platform: os.platform(),
      arch: os.arch(),
      version: os.version(),
    };
  },
};

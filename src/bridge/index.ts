
import { contextBridge } from 'electron';
import { bridge } from './bridge';

/**
 * Allows safely access to native capabilities
 * All communication between the renderer process and main process must go through the bridge
 * https://www.electronjs.org/docs/api/context-bridge
 */
contextBridge.exposeInMainWorld('bridge', bridge);

import path from 'path';
import { ENV } from './environment';

const DIST_FOLDER = path.join(__dirname, '..', 'dist');
const RENDERER_FOLDER = path.join(__dirname, '..', 'src', 'renderer');

/**
 * Renderer template
 */
export const MAIN_WINDOW_TEMPLATE = path.join(ENV.DEV ? RENDERER_FOLDER : DIST_FOLDER, 'index.html');
/**
 * Bundle for src/bridge/index.ts 
 */
export const PRELOAD_SCRIPT = path.join(DIST_FOLDER, 'preload.js');

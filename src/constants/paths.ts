import path from 'path';
import { ENV } from './environment';

const DIST_FOLDER = path.join(__dirname, '..', 'dist');
const RENDERER = path.join(__dirname, '..', 'src', 'renderer');
const BRIDGE = path.join(__dirname, '..', 'src', 'bridge');

export const MAIN_WINDOW_TEMPLATE = path.join(ENV.DEV ? RENDERER : DIST_FOLDER, 'index.html');
export const PRELOAD_SCRIPT = path.join(DIST_FOLDER, 'preload.js');

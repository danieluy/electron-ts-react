import path from 'path';
import { ENV } from './environment';

const DIST_FOLDER = path.join(__dirname, '..', 'dist');
const RENDERER = path.join(__dirname, '..', 'src', 'renderer');

export const MAIN_WINDOW_TEMPLATE = path.join(ENV.DEV ? RENDERER : DIST_FOLDER, 'index.html');
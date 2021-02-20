import { app, BrowserWindow } from 'electron';
import { MAIN_WINDOW_TEMPLATE, BUILD, ENV, PORT } from '../constants';

export const createWindow = async (): Promise<BrowserWindow | undefined> => {
  try {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
      }
    });

    
    if (BUILD.PACKED || ENV.PROD) {
      await win.loadFile(MAIN_WINDOW_TEMPLATE);
    }
    else {
      await win.loadURL(`http://localhost:${PORT}`);
    }

    return win;
  } catch (error) {
    console.error(error);
  }
}

app.on('ready', createWindow);

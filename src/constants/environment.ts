import { app } from 'electron';
import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const ENV = {
  PROD: process.env.NODE_ENV === 'production',
  DEV: process.env.NODE_ENV === 'development',
};

export const BUILD = {
  PACKED: app.isPackaged,
  UNPACKED: !app.isPackaged,
}

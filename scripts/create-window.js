import { BrowserWindow } from 'electron'

export const createWindow = () => {
  const window = new BrowserWindow({
    width: 500,
    height: 500,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true
  })

  return window
}

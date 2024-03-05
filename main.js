import { app } from 'electron'
import { createWindow } from './scripts/create-window.js'

const initWindowApp = () => {
  const window = createWindow()

  window.loadFile('index.html')

  window.on('closed', () => {
    window.destroy()
  })
}

app.whenReady().then(initWindowApp)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  const window = createWindow()
  
  if (window === null) {
    initWindowApp()
  }
})
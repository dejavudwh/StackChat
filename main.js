const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1150,
    height: 580,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
  })

  win.loadURL('http://localhost:3000')

  win.on('closed', () => {
    win = null
  })
}

ipcMain.on('close_window', () => {
  win.close()
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

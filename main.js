const { app, BrowserWindow } = require('electron')
// test 123
// test 333
// test 444
// test 555
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferrences: {
      nodeIntegration:true
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.plateform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

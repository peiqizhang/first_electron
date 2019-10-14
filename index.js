const { app, BrowserWindow } = require('electron')
function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 })
  var n = 20
  console.log(n)
  win.loadFile('index.html')
  win.webContents.openDevTools()
  win.on('closed', () => {
    console.log('closed')
    win = null
  })
}
// Electron完成初始化触发
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  console.log('window-all-closed',process.platform)
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  console.log('activate')
  if (win === null) {
    createWindow()
  }
})
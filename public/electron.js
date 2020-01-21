// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')
const { is } = require('electron-util')
const path = require('path')
const url = require('url')
const glob = require('glob')
const isDev = require('electron-is-dev')
const windowStateKeeper = require('electron-window-state')
const { resolve } = require('app-root-path')
const db = require('./db')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

const ipc = {}
const files = glob.sync(path.join(__dirname, '..', 'main-process', '**/*.js'))
for (let filepath of files) {
  const name = path.basename(filepath, '.js')
  ipc[name] = require(filepath)
}

const createWindow = async () => {
  await db.connect()
  const { screenWidth, screenHeight } = screen.getPrimaryDisplay().workAreaSize
  let mainWindowState = windowStateKeeper({
    defaultWidth: screenWidth,
    defaultHeight: screenHeight
  })
  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    frame: false,
    width: mainWindowState.width,
    height: mainWindowState.height,
    webPreferences: { nodeIntegration: true },
    show: false
  })

  const splashWindow = new BrowserWindow({
    frame: false,
    transparent: true,
    movable: false,
    maximizable: false,
    minimizable: false,
    center: true,
    width: 700,
    height: 400,
    webPreferences: { nodeIntegration: true }
  })

  mainWindowState.manage(mainWindow)

  let splashStartUrl = url.format({
    pathname: path.join(__dirname, '/../build/splash.html'),
    protocol: 'file:',
    slashes: true
  })

  let startUrl = url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  if (isDev) {
    startUrl = 'http://localhost:3000'
    splashStartUrl = 'http://localhost:3000/splash.html'
  }

  mainWindow.loadURL(startUrl)
  splashWindow.loadURL(splashStartUrl)

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.once('ready-to-show', () => {
    splashWindow.hide()
    mainWindow.show()

    // Open the DevTools.
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

'use strict'

import { app, BrowserWindow, Menu, dialog } from 'electron'

import { autoUpdater } from 'electron-updater'
import log from 'electron-log' // 终端Log

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    fullscreen: false,
    frame: true,
    resizable: true,
    maximizable: true,
    width: '100%',
    height: '100%'
  })

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu) // null: 隐藏菜单

  /* if (process.env.NODE_ENV === 'development') { // vue-devtools
    BrowserWindow.addDevToolsExtension('C:/Users/www/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/4.1.5_0')
  } */
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// 设置菜单部分
const template = [
  {
    label: '菜单',
    submenu: [
      /* {
        label: 'Copy ( 复制 )',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste ( 粘贴 )',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      }, */
      {
        label: '检查更新',
        click: () => {
          // 检测是否需要更新
          // checkForUpdates()
          // if (process.env.NODE_ENV === 'production') {
          // autoUpdater.checkForUpdates()
          showUpdateBox(true)
          // }
        }
      },
      {
        label: '开发者模式',
        click: () => {
          // 检测是否需要更新
          // if (process.env.NODE_ENV === 'production') {
          mainWindow.webContents.openDevTools({ mode: 'right' })
          // }
        }
      },
      {
        label: '关闭软件',
        click () { app.quit() }
      }
    ]
  }
]

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
*/

/* const feedUrl = `http://127.0.0.1:5500/win32` */

/* autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
}) */

/* ipcRenderer.on('update', (e, arg) => {
  console.log('update')
  checkForUpdates()
}) */

/* ipcMain.on('update', (e, arg) => {
  console.log('update')
  checkForUpdates()
}) */

/* function sendUpdateMessage (message, data) {
  console.log({ message, data })
} */

function showUpdateBox (status) {
  if (status) {
    dialog.showMessageBox({
      type: 'info',
      buttons: ['确定', '取消'],
      message: '是否更新?'
    }, response => {
      // mainWindow.webContents.send('message', response)
      if (response === 0) {
        autoUpdater.quitAndInstall()
      }
    })
  } else {
    dialog.showMessageBox({
      type: 'info',
      buttons: ['确定'],
      message: '已是最新版本,不需要更新.'
    }, response => {
      /* mainWindow.webContents.send('message', response)
      if (response === 0) {
        autoUpdater.quitAndInstall()
      } */
    })
  }
}
function sendStatusToWindow (text) {
  log.info(text)
  mainWindow.webContents.send('message', text) // 主进程向页面发送消息
}

autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...')
})
autoUpdater.on('update-available', (ev, info) => {
  sendStatusToWindow('Update available.')
})
autoUpdater.on('update-not-available', (ev, info) => {
  sendStatusToWindow('Update not available.')
})
autoUpdater.on('error', (ev, err) => {
  sendStatusToWindow('Error in auto-updater.')
})
autoUpdater.on('download-progress', (ev, progressObj) => {
  sendStatusToWindow('Download progress...')
})
autoUpdater.on('update-downloaded', (ev, info) => {
  showUpdateBox(true)
})

/* autoUpdater.on('update-downloaded', (ev, info) => {

}) */

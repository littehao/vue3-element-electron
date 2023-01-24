import {app, BrowserWindow, ipcMain} from 'electron';
import { join } from 'path';
//设置安全策略
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    title: "收银台",
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      nodeIntegration: true, // 设置为true 页面可以使用electron api， 如果主进程和渲染进程要通信，必须要设为true
      contextIsolation: false,   
      // webSecurity: false  // 为true时打包后会跨域， 所以设置为false
    }
  });
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
    mainWindow.webContents.openDevTools()
  }
  else {
    mainWindow.loadFile(join(__dirname, '../../build/index.html'));
    // mainWindow.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})
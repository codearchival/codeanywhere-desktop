'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    title: '',
    'node-integration': false,
     icon: __dirname + '/favicon.ico'
  });

  mainWindow.loadURL('https://codeanywhere.com/editor');

  mainWindow.maximize();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

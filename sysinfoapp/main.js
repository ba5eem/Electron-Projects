const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const {closed, ready, winAllClosed, darwin, activate, windowOptions, windowUrlOptions } = require('./settings');


let win;


function createWindow () {
  win = new BrowserWindow(windowOptions)
  win.loadURL(url.format(windowUrlOptions))
  win.webContents.openDevTools();
  win.on(closed, function () {
    win = null
  })
}



app.on(ready, createWindow)

app.on(winAllClosed, function () {
  if (process.platform !== darwin) {
    app.quit()
  }
})

app.on(activate, function () {
  if (win === null) {
    createWindow()
  }
})




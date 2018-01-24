const path = require('path');
const url = require('url');
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

const iconSrc = __dirname+'/img/icon.png';

const closed = 'closed';
const close = 'close';
const ready = 'ready';
const winAllClosed = 'window-all-closed';
const darwin = 'darwin';
const activate = 'activate';
const file = 'file:';
const production = 'production';

const currentOS = process.platform === darwin;
const currentENV = process.env.NODE_ENV !== production;

const status = {
  closed: closed,
  close: close,
  ready: ready,
  winAllClosed: winAllClosed,
  darwin: darwin, 
  activate: activate, 
  file: file,
  production: production,
  currentOS: currentOS,
  currentENV: currentENV
}

const mainWindowHtmlSrc = './Views/mainWindow.html';
const addItemWindowHtmlSrc = './Views/addItemWindow.html';

const addWindowOptions = {
  width: 300, 
  height: 200, 
  title: 'Add Shopping List Item'
};

const mainWindowHTML = {
  pathname: path.join(__dirname, mainWindowHtmlSrc),
  protocol: file, 
  slashes: true
};

const addItemWindowHTML = {
  pathname: path.join(__dirname, addItemWindowHtmlSrc),
  protocol: file, 
  slashes: true
};

const options = {
  mainView: mainWindowHTML,
  addView: addItemWindowHTML,
  addViewSize: addWindowOptions
};







module.exports = { status, options };
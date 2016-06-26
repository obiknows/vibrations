require('dotenv').config();
const electron = require('electron');
// module that controls app lifecycle
const {app} = electron;
// module to create native window
const {BrowserWindow} = electron;

// Express Web Server & env variables
const server = require('./app/app.js');

// global reference of the window obj (for grbge coll. reasons)
let win;

/* APP LIFECYCLE STUFFS */
// [BEFORE READY] - app is about to launch
app.on('will-finish-launching', createServer);

// [READY] - when the app is ready..call this
app.on('ready', createWindow);

// [WHEN ALL WINDOWS CLOSED]
app.on('window-all-closed', windowsAllClosed);

// [ON REOPEN]
app.on('activate', onActivate);

/* HELPER FUNCTIONS */

function windowsAllClosed () {
  // if you're on mac, keep open unless user quits w/ Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function onActivate () {
  // when the app is activated from the click on the dock
  if (win === null) {
    createWindow();
  }
}

function createWindow() {
  // create new window
  win = new BrowserWindow({
    title: 'vibrations',
    width: 800,
    height: 500,
    titleBarStyle: 'hidden-inset',
  });
  // load index.html
  win.loadURL(`file://${__dirname}/app/index.html`);

  // handle window close
  win.on('closed', () => {
    win = null;
  });
}

function createServer() {
  console.log('Server created.');
}

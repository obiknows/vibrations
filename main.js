const electron = require('electron');
// module that controls app lifecycle
const {app} = electron;
// module to create native window
const {BrowserWindow} = electron;

// global reference of the window obj (for grbge coll. reasons)
let win;

function createWindow() {
  // create new window
  win = new BrowserWindow({
    title: 'vibrations',
    width: 500,
    height: 500,
    // titleBarStyle: 'hidden-inset',
  });
  // load index.html
  win.loadURL(`file://${__dirname}/index.html`);

  // handle window close
  win.on('closed', () => {
    win = null;
  });
}

// READY - when the app is ready..call this
app.on('ready', createWindow);

// WHEN ALL WINDOWS CLOSED
app.on('window-all-closed', () => {
  // if you're on mac, keep open unless user quits w/ Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

// ON REOPEN
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

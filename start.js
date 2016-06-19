const electron = require('electron-prebuilt');
const spawn = require('child_process').spawn;
const child = spawn(electron, ['.']);

// const express = require('express')();
//
// // PATHS
// express.get('/', function (req, res) {
//   res.send('Hellow World!');
// });
//
// express.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

const express = require('express');
const fs = require('fs');
const logger = require('morgan');
const path = require('path');

const app = express();
createDirectoryIfNotExist = (dirtPath) => {
  fs.existsSync(dirtPath) || fs.mkdirSync(dirtPath);
}
const logDirectory = path.join(__dirname, 'logs');
createDirectoryIfNotExist(logDirectory);

const serverLogStream = fs.createWriteStream(path.join(logDirectory, 'server.log'), {
  flags: 'a'
});

app.use(express.static(__dirname + '/public/dependencies'));
app.use(express.static(__dirname + '/public/styleSheets'));
app.use(express.static(__dirname + '/public/js'));

app.use(logger('combined', {
  stream: serverLogStream
}));


app.get('/', function(req, res) {
  // res.send('hello, world!')
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('')



// app.use(require('routes.js'))
module.exports = app;

const http = require('http');
const express = require('express');
const app = require('./app.js');

var serverPort = 8090;
console.log('app is running at 8090');
console.log("go to ", `http://localhost:8090/`);
http.createServer((req, res) => {
  app(req, res);
}).listen(serverPort);

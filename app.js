'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express();

const port = process.env.PORT || '8080';

app.use(express.static(path.join(__dirname, 'dist')));

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const server = http.createServer(app).listen(port, function(){
    console.log('server is up')
});

module.exports = app;
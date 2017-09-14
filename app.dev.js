'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConf = require('./webpack.config.js');

const app = express();
const compiler = webpack(webpackConf);

const port = process.env.PORT || '8080';

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use(webpackDevMiddleware(compiler,{
	hot: true,
	publicPath: '/',
	stats:{
		colors: 	true,
        hash: 		false,
        timings: 	true,
        chunks: 	false,
        chunkModules: false,
        modules: 	false,
	}
}));
app.use(webpackHotMiddleware(compiler));

const server = http.createServer(app).listen(port, function(){
    console.log('server is up')
});

module.exports = app;
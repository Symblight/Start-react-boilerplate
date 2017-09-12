'use strict';

const webpack = require('webpack');
const path = require('path');

const rules = require('./webpack/rules.js');
const plugins = require('./webpack/plugins.js');

const isProduction = process.env.NODE_ENV.trim() === "production";

module.exports = {
    devtool: isProduction ? false : 'source-map',
    entry:{
        app:[
            'webpack-hot-middleware/client?reload=true',
            'react-hot-loader/patch',
            path.join(__dirname, 'app/main.js')
        ]
    },
	output: {
		filename: '[name].bundle.js',
    	publicPath: '',
        path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: rules.config
	},
	resolve:{
		extensions:['.js', '.jsx'],
	},
	plugins: plugins.config,
}
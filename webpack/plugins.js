'use strict';

const webpack = require('webpack');
const define = require('./define');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
			  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
		  }),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true,
		})
];

if (define.is_production){
	plugins.push(...require('./plugins/production').config);
}
if (define.is_development){
	plugins.push(...require('./plugins/development').config);
}

module.exports.config = plugins;
'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: JSON.stringify('production'),
        },
    }),
]

module.exports.config = plugins;
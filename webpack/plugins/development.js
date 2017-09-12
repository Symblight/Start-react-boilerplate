'use strict';

const webpack = require('webpack');

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
]

module.exports.config = plugins;
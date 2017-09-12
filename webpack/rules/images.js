'use strict';

const rules = [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    },
                },
    ]
    
module.exports.config = rules;
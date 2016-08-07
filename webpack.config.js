var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/views/HomeComponent.jsx',
    output: { path: __dirname + '/src/', filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /routes/],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
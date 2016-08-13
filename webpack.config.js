var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        home: './src/views/HomeComponent.jsx',
        about: './src/views/AboutComponent.jsx'
    },
    output: {
        path: __dirname + '/src/bundle', 
        filename: '[name].bundle.js' 
    },
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

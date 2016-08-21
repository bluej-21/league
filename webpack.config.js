import path from 'path';

module.exports = {
  entry: {
    home: './src/views/HomeComponent.jsx',
    about: './src/views/AboutComponent.jsx',
  },
  output: {
    path: path.join(__dirname, '/src/bundle'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /routes/],
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};


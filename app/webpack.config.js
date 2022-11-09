const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'Lib'
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser")
    }
  },
  devServer: {
    port:60104,
  	static: path.join(__dirname, 'dist')
  }
};

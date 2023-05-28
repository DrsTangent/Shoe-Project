const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('8080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://alihussainpid:alihussainpid@merntest0.svvvoif.mongodb.net/test')
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('8080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://alihussainpid:alihussainpid@merntest0.svvvoif.mongodb.net/test')
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('8080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://alihussainpid:alihussainpid@merntest0.svvvoif.mongodb.net/test')
  };
}

module.exports = {
  entry: './bin/www',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};
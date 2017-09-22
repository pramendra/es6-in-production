module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle-legacy.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false,
                  useBuiltIns: true,
                  targets: {
                    browsers: ['last 2 versions', 'Firefox ESR']
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};

// webpack plugins
// a set of rules that will be followed on every environment
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {

  // I want the application logic to start here, at bootstrap.js. This will be the entry point for all app logic.
  entry: {
    app: ['./src/bootstrap.js'],
    vendor: './src/vendor.js',
  },

// want to allow js files and scss files
  resolve: {
    extensions: ['.js', '.scss'],
// providing a list or pointing to where the nodemodules/dependencies are
    modules: ['node_modules'],
  },
// everything above is standards for apps

  module: {
    rules: [
      {
        // going to allow for using modern javascript(babel)
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        // allows us to work with images
        type: 'javascript/auto',
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
        },
      },

      {
        // allows us to work with video media
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000',
      },
    ],
  },

  plugins: [
    // the app splits the chunks into pieces, and then knows which ones to use and when
    new SplitChunksPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity,
    }),
  ],
};

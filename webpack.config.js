var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    entry : [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve : {

        modules: [
                    path.join(__dirname, "src"),
                    "node_modules"
            ]
    },
    module: {
        loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        app: path.join(__dirname, 'src', 'pokedex.js'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "pokedex.js"
    },
    devServer: {
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;
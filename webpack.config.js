const webpack = require('webpack');
const path = require('path');
var inProduction = (process.env.NODE_ENV === 'production')

module.exports = {
    context: __dirname,

    entry: './src/index.js',

    output: {
        path: path.resolve('./dist'),
        filename: 'index.js'
    },

    externals: {
        vue: 'vue',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: /node_modules/,
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },

    plugins: []

};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({ output: { comments: false } })
    )
}

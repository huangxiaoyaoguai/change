const path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')
let clientConfig, serverConfig


clientConfig = {
    context: path.resolve(__dirname, '..'),
    entry: {
        bundle: './client',
        vendor: [
            'react',
            'react-dom',
            'superagent'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: 'chunk.[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['transform-runtime', 'add-module-exports'],
                cacheDirectory: true
            }
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.(jpg|png|gif|webp)$/,
            loader: 'url?limit=8000'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.html$/,
            loader: 'html?minimize=false'
        }]
    },
    resolve: {extensions: ['', '.js', '.json', '.less']},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            filename: '[name].js'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false},
        //     comments: false
        // }),
        // new webpack.DefinePlugin({'NODE_ENV': JSON.stringify('production')}),

        new webpack.DefinePlugin({
              'process.env':{
                'NODE_ENV': JSON.stringify('production')
              }
            }),
        new HtmlWebpackPlugin({
            filename: '../../public/index.html',
            template: './tpl/index.html',
            chunksSortMode: 'none'
        }),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ]
}


module.exports = [clientConfig]

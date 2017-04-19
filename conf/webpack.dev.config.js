var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var notifier = require('node-notifier')

var WebpackOnBuildPlugin = require('on-build-webpack')


var devEntryBundle = [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:5000',
    './src/main.js'
]

var pushNotification = function(title, message, sound) {
    sound = sound || false;

    notifier.notify({
        title: title,
        message: message,
        sound: sound,
        icon: path.join(__dirname, './icon.png')
    }, function(err, respond) {
        if(err) {
            console.error(err);
        }
    });
}

module.exports = {

    devtool: '#source-map',

    entry: {
        bundle: devEntryBundle,
        vendor: ['react', 'react-dom','underscore']
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve('./dist/'),
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:   /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
             {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            { 
                test: /\.(jpg|png)$/, 
                loader: "file-loader?name=[path][name].[ext]"
            }

        ]
    },
    //  babel: {
    //   "plugins": [["antd", {style: "css"}]]
    // },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new WebpackOnBuildPlugin(function(stats) {
            var compilation = stats.compilation;
            var errors = compilation.errors;
            if (errors.length > 0) {
                var error = errors[0];
                pushNotification(error.name, error.message, 'Glass');
            }
            else {
                var message = 'takes ' + (stats.endTime - stats.startTime) + 'ms';

                var warningNumber = compilation.warnings.length;
                if (warningNumber > 0) {
                    message += ', with ' + warningNumber + ' warning(s)';
                }

                pushNotification('自定义页面', message);
            }
        })
    ]
}

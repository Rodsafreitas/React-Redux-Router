const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: 
        path.resolve(__dirname,'src/index'),   
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {compact: false},
                exclude: /node_modules/
            },

            // Used for Bootstrap Less Source Files
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },

            // Used for Bootstrap CSS Source Files
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },

            // Used for Bootstrap Glyphicon Fonts
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'public/index.html',
            favicon: 'public/favico.ico',
            inject:true
        })
    ],

    devServer: {
        historyApiFallback: true
    }
};
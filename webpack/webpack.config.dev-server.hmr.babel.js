import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-bare-webpack-plugin';
import path from 'path';

const ROOT_PATH = process.cwd();

export default {
    context: path.resolve(ROOT_PATH, 'src'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './app.dev.js'
        // the entry point of our app
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(ROOT_PATH, 'dist'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { test: /\.pug$/, use: 'pug-loader' },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2000, // 5kb
                        name: '[path][name].[ext]',
                        context: 'src'
                    }
                }
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        // index.html page will have to be served in place of any 404 responses
        hot: true,
        // enable HMR on the server
        contentBase: path.resolve(ROOT_PATH, 'public'),
        // match the output path
        publicPath: '/',
        // match the output `publicPath`
        compress: true,
        stats: 'minimal'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JogoBear',
            description: 'Track your activities',
            template: path.resolve(ROOT_PATH, 'src/templates/index.pug')
        }),
        new ExtractTextPlugin('app.css'),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new StyleLintPlugin({
            syntax: 'scss'
        })
    ]
};

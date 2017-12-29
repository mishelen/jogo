import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-bare-webpack-plugin';
import path from 'path';

const isProd = process.env.NODE_ENV === 'PRODUCTION';
const ROOT_PATH = process.cwd();

export default {
    entry: {
        app: path.resolve(ROOT_PATH, 'src/app.js')
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: '[name].js'
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'JogoBear',
            description: 'Track your activities',
            template: path.resolve(ROOT_PATH, 'src/templates/index.pug')
        }),
        new ExtractTextPlugin('app.css'),
        new StyleLintPlugin({
            syntax: 'scss'
        })
    ]
};

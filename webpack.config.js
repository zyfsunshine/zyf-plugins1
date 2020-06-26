const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    //关闭es6模块化
                    esModule: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                exclude: /\.(html|png|jpg|gif|css|less|js|vue)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    // devServer: {
    //     contentBase: 'dist',
    //     compress: true,
    //     port: 3001,
    //     open:true,
    //     //跨域需要配置
    //     // proxy: {
    //     //     '/api': {
    //     //         target: 'http://120.26.185.178:7300',
    //     //         // changeOrigin: true, 
    //     //         pathRewrite: {
    //     //             "^/api": ''
    //     //         }
    //     //     }
    //     // }
    // },
    mode: "development",
    devtool: "source-map",
};
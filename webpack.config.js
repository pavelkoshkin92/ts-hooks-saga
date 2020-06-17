const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle-[hash].js",
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },


    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot|otf)([\?]?.*)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]',
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin({
            filename: 'style-[hash].css',
            allChunks: true
        })
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

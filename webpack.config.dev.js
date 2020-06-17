const merge = require('webpack-merge');

const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "none",
    devServer: {
        contentBase: 'dist',
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    }
});

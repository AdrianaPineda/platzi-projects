const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/index.js")
    },
    // mode: "production", // "development" mode makes files heavier
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname, "dist"),
        // dist is the standard name for compiled files folder
        filename: "js/[name].js",
        publicPath: "http://localhost:3001",
        chunkFilename: "js/[id].[chunkhash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // {
                    //     loader: "css-loader",
                    //     options: {
                    //         importLoaders: 1
                    //     }
                    // },
                    // "postcss-loader"
                    "css-loader"
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         { loader: MiniCSSExtractPlugin.loader },
            //         "css-loader",
            //         "less-loader"
            //     ]
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         { loader: MiniCSSExtractPlugin.loader },
            //         "css-loader",
            //         "sass-loader"
            //     ]
            // },
            // {
            //     test: /\.styl$/,
            //     use: [
            //         { loader: MiniCSSExtractPlugin.loader },
            //         "css-loader",
            //         "stylus-loader"
            //     ]
            // },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    // this loader will convert the files into a base64 format
                    // and will embed it into the js code (inline)
                    // not recommended for big files
                    options: {
                        limit: 1000 // max bytes supported
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // title: "Plugins",
            template: path.resolve(__dirname, "public/index.html")
        }), // adds html to dist folder
        // It is faster if we dont use this:
        // new MiniCSSExtractPlugin({
        //     filename: "css/[name].css"
        // }) // exports css file, instead of injecting it with html (see css-style-loader)
        new webpack.DllReferencePlugin({
            manifest: require("./modules-manifest.json")
        })
    ]
};

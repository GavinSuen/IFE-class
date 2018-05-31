const path = require("path");

module.exports = {
    entry:"./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist") 
    },
    plugins:[],
    module:{
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
            
        ]
    }
};
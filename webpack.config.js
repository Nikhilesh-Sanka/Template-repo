const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    mode:"production",
    entry:"./src/main.js",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                filename:"index.html",
                template:"./src/index-dev.html"
            }
        )
    ]

}
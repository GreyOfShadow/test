const path =require("path");
const ExtractTextPlugin=require("extract-text-webpack-plugin");

const webpack=require('webpack');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');

const extractLess=new ExtractTextPlugin({
    filename:"[name].css"

});
//上面的disable就是说,在开发环境下,就不把他提取出来了
//让页面本身嵌入就行了


module.exports={
    entry: {
        index:'./src/index.js',
        vendorlala:['react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                include: [
                    path.resolve(__dirname,'src')
                ],
                loader:"babel-loader"
            },
            {
                test:/\.less$/,
                include: [
                    path.resolve(__dirname,'src')
                ],
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractLess,
        new webpack.optimize.CommonsChunkPlugin({
            names:["vendorlala","runtime"]
        }),
        new UglifyJSPlugin()
    ]
    // externals:{
    //     'react':'React',
    //     'react-dom':'ReactDOM'
    // }
};
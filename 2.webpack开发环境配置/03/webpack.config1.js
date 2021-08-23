const {resolve} = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './out.js',
        path: resolve(__dirname,'build/js')
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    mode: 'development'
}
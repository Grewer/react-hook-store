const path = require('path')

module.exports = [{
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                include: path.join(__dirname, './'),
            }
        ]
    },
    plugins: [],
    entry: {
        index: './index.ts',
    },
    output: {
        filename: 'reactHookStore.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'reactHookStore',
        libraryTarget: 'umd',
        libraryExport: "default",
    }
}]

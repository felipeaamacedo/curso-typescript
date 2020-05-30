const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production', //o flag production cria o arquivo minificado. o flag 'development' cria um arquivo JS não minificado

    entry: './src/main.ts',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port:9000,
        hot: true //hot reload para ficar dando o reload
    },
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist') // o __dirname pega o caminho da pasta que está o projeto, para chegar até o diretório 'dist'. Caso não tenha o diretório 'dist', o webpack cria a pasta.
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ],

    resolve:{
        extensions: ['.ts', '.js']
    },

    module:{
        rules:[{
            test:/\.ts$/,
            use: 'ts-loader',
            exclude:/node_modules/
        }]
    }
};
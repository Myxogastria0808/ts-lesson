//webpackの設定
const path = require('path');
module.exports = {
    //モジュールバンドルの起点となるファイル (ルートファイル)の設定
    entry: {
        bundle: './src/index.ts'
    },
    //吐き出す先
    output: {
        //__dirname <-webpack.config.jsのあるディレクトリ
        //joinでパスを結合している
        path: path.join(__dirname, 'dist'),
        //[name] <-extraryで記述した名前
        filename: '[name].js'
    },
    //import export でファイル拡張子を書くかどうかを決める
    resolve: {
        //.tsと.jsは、拡張子を略してOK!
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: {
             // webpack-dev-serverの公開フォルダ
            directory: path.join(__dirname, 'dist'),
        },
        //ブラウザの自動起動
        open: true,
    },
    //モジュールのルールの設定
    module: {
        rules: [
            //.tsファイルをts-loaderでコンパイルする
            {
                loader: 'ts-loader',
                test: /\.ts$/,
            },
        ],
    },
}
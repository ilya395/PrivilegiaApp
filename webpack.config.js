const webpack = require('webpack');
// этот файл - инструмент сборки
const path  = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // работай с html
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // очистка кеша
const CopyWebpackPlugin = require('copy-webpack-plugin') // копируй-перетаскивай
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // работай с css (вставляй стили в файл css)
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin') // минифицируй css
const TerserWebpackPlugin = require('terser-webpack-plugin') // минифицируй js
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin') // через него прикрутить externals с массивом объектов, содержащих урлы с cdn библтотек

const isDev = process.env.NODE_ENV === 'development' // определяй в каком сейчас режиме
const isProd = !isDev                                //

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    } 

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config 
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders  = (extra) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hrm: isDev, // hot module replacement // изменяй определенные сущности без перезагрузки страницы 
                reloadAll: true,
            },
        }, 
        'css-loader'
    ] // свой style-loader в комплекте

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    } 

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions() 
    }]

    return loaders
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            jQuery: 'jquery',
            $: 'jquery',
            'window.Swiper': 'swiper',
            Swiper: 'swiper'
            // '$.debounce': 'throttle_debounce',
            // '$.throttle': 'throttle_debounce',
            // 'jQuery.throttle': 'throttle_debounce',
            // 'jQuery.debounce': 'throttle_debounce'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/temps/*'),
                to: path.resolve(__dirname, './dist/')
            }
        ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/temps/img/**/*'),
        //         to: path.resolve(__dirname, './dist/')
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/temps/pics/**/*'),
        //         to: path.resolve(__dirname, './dist/')
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/temps/fonts/**/*'),
        //         to: path.resolve(__dirname, './dist/')
        //     }
        // ]),
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, './src/temps/docs/*'),
        //         to: path.resolve(__dirname, './dist/')
        //     }
        // ]),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        // new HtmlWebpackPlugin(),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'jquery',
                    entry: 'https://code.jquery.com/jquery-3.4.1.min.js',
                    global: 'jQuery',
                },
                {
                    module: 'swiper',
                    entry: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.js',
                    global: 'Swiper',
                },
                {
                    module: 'throttle_debounce',
                    entry: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js',
                    global: 'jquery_throttle_debounce',                    
                }
            ]
        })
    ]

    return base 
}

//
module.exports = {
    context: path.resolve(__dirname, 'src'), // со всех путях  удаляю эту папку
    mode: 'development',
    entry: { // точка входа в приложение, откуда начать
        main: ['@babel/polyfill', './app.js'] // './src/index.js'
        // payments: ['@babel/polyfill', './app-payments.js']
    },
    output: { // куда складывать результаты работы
        filename: filename('js'), // '[name].[hash].js', // итоговый файл, после сборкивсех js afqkjd
        path: path.resolve(__dirname, 'dist/'), // отталкиваясь от текущей директории, складывать все в dist
        publicPath: '/' // относительная ссылка, которая будет подставляться из браузера
    },
    resolve: {
        extensions: [ // какие расширения нужно понимать по умолчанию
            '.js', '.json', '.png'
        ],
       alias: { // путь до корня проекта
           '@temps': path.resolve(__dirname, 'src/temps'),
           '@': path.resolve(__dirname, 'src')
       } 
    },
    optimization: optimization(),
    devServer: {
        overlay: true, // вывод ошибок на экранб в браузер
        port: 4200,
        hot: isDev, // если разработка - true
        historyApiFallback: true // отдаем по любому url главный html файл - index.html
    },
    devtool: isDev ? 'source-map' : '',
    externals: {
        jquery: 'jQuery'
    },
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders() 
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            // publicPath: 'src/assets/images/', // ? src/assets/images/
                            // outputPath: '/images/',
                            // useRelativePath: true
                        }
                    },
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         mozjpeg: {
                    //             progressive: true,
                    //             quality: 65
                    //         },
                    //         optipng: {
                    //             optimizationLevel: 7,
                    //         },
                    //         pngquant: {
                    //             quality: [0.65, 0.90],
                    //             speed: 4
                    //         },
                    //         gifsicle: {
                    //             interlaced: false,
                    //         },
                    //         webp: {
                    //             quality: 75
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.(pdf|txt|doc|docx)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }                        
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }                        
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    }
}
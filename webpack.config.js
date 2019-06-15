const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = (environment, argv) => {
    const isProduction = argv.mode === 'production';
    const mode = isProduction ? 'production' : 'development';

    console.info('Mode:', '\u001B[1m' + mode + '\u001B[0m');

    return {
        mode,
        devtool: isProduction ? 'none' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new WorkboxPlugin.GenerateSW(),
            new CopyWebpackPlugin([
                {
                    from: './src/assets/icons',
                    to: './icons',
                },
                {
                    from: './src/assets/manifest.json',
                    to: './manifest.json',
                },
            ]),
            new HtmlWebPackPlugin({
                minify: isProduction,
                hash: isProduction,
                template: './src/index.html',
                filename: './index.html',
                title: process.env.npm_package_title || 'App',
                meta: {
                    viewport: 'width=device-width, initial-scale=1.0',
                    'theme-color': '#333',
                },
            }),
        ],
    };
};

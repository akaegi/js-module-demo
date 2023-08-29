const path = require('path');
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.webpack.json'
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({configFile: 'tsconfig.webpack.json'})
        ]
    },
    output: {
        filename: 'bundle.js',
        clean: false,
        path: path.resolve(__dirname, 'build', 'webpack'),
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
                serveIndex: true
            },
            // {
            //     directory: path.join(__dirname, 'css'),
            // },
        ],
    },
};

// '/index-esm.html': 'index-esm.html',
// '/index-amd.html': 'index-amd.html',
// '/build': 'build',
// '/node_modules/requirejs': 'node_modules/requirejs',
// '/node_modules/dayjs': 'node_modules/dayjs'
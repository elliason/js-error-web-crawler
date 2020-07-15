import path from 'path';
import nodeExternals from 'webpack-node-externals';

const entryObject = {
    crawlerApp: './app.ts'
}
const webpackConfig = (
    { mode, presets } = { mode: 'development', presets: [] },
) => {
    return {
        target: 'node',
        context: path.resolve(__dirname, 'src'),
        entry: entryObject,
        devtool: mode === 'development' ? 'hidden-source-map' : false,
        externals: [ nodeExternals() ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                        {
                            loader: 'eslint-loader',
                        }
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
    };
}

export default webpackConfig;

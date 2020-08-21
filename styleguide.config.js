module.exports = {
    ignore: [
        '**/__tests__/**',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/*.d.ts',
        '**/*.test.jsx',
        '**/*.types.tsx',
        '**/*.stories.tsx',
    ],
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        {loader: "style-loader"},
                        {loader: "css-loader"},
                    ]
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
            ]
        }
    },
    title: 'Moove It Library',
    styleguideDir: 'dist-docs',
};
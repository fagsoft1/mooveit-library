module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    settings: {
        'import/extensions': [".js", ".jsx", ".ts", ".tsx"],
        'import/parsers': {
            '@typescript-eslint/parser': [".ts", ".tsx"]
        },
        'import/resolver': {
            'node': {
                'extensions': [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    ignorePatterns: ["*.stories.tsx", "*test.jsx"],
    rules: {
        "prettier/prettier": "error",
        "import/no-unresolved": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-filename-extension": [1, {"extensions": [".tsx", ".jsx"]}],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
};

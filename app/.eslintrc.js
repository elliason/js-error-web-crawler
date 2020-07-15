module.exports = {
    extends: [
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        browser: false,
        node: true
    },
    plugins: ['@typescript-eslint', 'import'],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                directory: './tsconfig.json',
            },
            node: {
                extensions: ['.js', 'jsx', '.ts', '.tsx', '.mjs', '.json'],
            },
        },
        'import/extensions': ['.js', 'jsx', '.ts', '.tsx', '.mjs'],
    },
    rules: {
        strict: 'error',
        yoda: ['error', 'always'],
        'import/no-unresolved': 1,
        'import/no-extraneous-dependencies': 1,
        '@typescript-eslint/interface-name-prefix': 1,
        '@typescript-eslint/ban-ts-ignore': 1,
        '@typescript-eslint/no-var-requires': 1,
        'spaced-comment': 1,
    },
};

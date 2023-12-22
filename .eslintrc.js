/** react-app config already use "@typescript-eslint" for "*.ts(x)" files */

module.exports = {
    extends: ['react-app', 'prettier'],
    plugins: ['prettier', 'unused-imports'],
    env: {
        browser: true,
        node: true,
        jest: false,
    },
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
    },
    ignorePatterns: ['dist', 'src-tauri/*'],
    rules: {
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/ban-ts-comment': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],

        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@mui/**',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@hooks',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@typings/**',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: [],
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            },
        ],
    },
};

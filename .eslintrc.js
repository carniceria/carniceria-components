module.exports = {
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    plugins: [
        'react',
        'import'
    ],
    settings: {
        react: {
            pragma: 'React', // Pragma to use, default to "React"
            version: '16.6.3'
        }
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        commonjs: true,
        browser: true,
        mocha: true,
        node: true
    },
    rules: {
        //More rules in: http://eslint.org/docs/rules/
        'comma-dangle': 0, // standard: 2 // too many errors to fix now
        'jsx-quotes': 1, // standard: [2, "prefer-single"], // too many errors to fix
        'no-cond-assign': 2,
        'no-console': 2,
        'no-constant-condition': 0, // standard: 2 //  to be changed in the near future
        'no-debugger': 2,
        //'no-extra-parens': 2,
        'no-useless-escape': 0,
        'no-case-declarations': 0,
        'no-extra-boolean-cast': 0, // standard: 2 //  to be changed in the near future
        'no-extra-semi': 2,
        'no-fallthrough': 0, // standard: 2 //  to be changed in the near future
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-undef': 2,
        'no-unreachable': 2,
        'no-unused-vars': [2, {
            args: 'after-used'
        }],
        'no-use-before-define': 1,

        //React JSX rules
        'react/jsx-closing-bracket-location': 0, // era 1,
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-handler-names': 1,
        'react/jsx-indent-props': 1,
        'react/jsx-indent': [1, 4],
        'react/jsx-key': 1,
        //'react/jsx-max-props-per-line': 1,
        'react/jsx-no-bind': [2, {
            allowArrowFunctions: true,
            allowBind: false,
            ignoreRefs: true
        }],
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 1,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        //'react/jsx-boolean-value': 2, // too many errors to fix

        //React rules
        'react/no-danger': 1,
        'react/no-deprecated': 0, // must be 1
        'react/no-did-mount-set-state': 1,
        //'react/no-did-update-set-state': 2, // Deprecated due to changes in lifecycle
        'react/no-direct-mutation-state': 1,
        'react/no-is-mounted': 1,
        'react/no-multi-comp': [1, {
            ignoreStateless: true
        }],
        //'react/no-set-state': 1,
        'react/no-string-refs': 1,
        'react/no-unknown-property': 2,
        'react/prefer-es6-class': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 0,
        'react/sort-comp': 1,
        'react/jsx-wrap-multilines': 1
    }
};

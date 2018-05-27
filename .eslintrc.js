module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    'rules': {
        'strict': 'off',
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'array-bracket-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
        'id-length': 'off',
        'quotes': ['warn', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        "semi": [2, "always"]
    }
};
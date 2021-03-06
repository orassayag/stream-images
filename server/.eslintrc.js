module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": ["react-app", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-shadow": [
            "error",
            {
                "builtinGlobals": false,
                "hoist": "functions",
                "allow": []
            }
        ],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-unescaped-entities": 0,
        "react/display-name": 0,
        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-useless-escape": 0
    }
};
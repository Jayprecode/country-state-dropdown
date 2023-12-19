module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript",
        "prettier",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "plugin:@next/next/recommended",
        "eslint:recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    overrides: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        quotes: "off",
        "@typescript-eslint/quotes": [0],
        "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "no-undef": "off",
        "@next/next/no-img-element": "off",
        "no-nested-ternary": "off",
        // Debugging
        "@typescript-eslint/no-explicit-any": "off",
        "no-console": "off",
        "import/extensions": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-underscore-dangle": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "no-plusplus": "off",
        "react/button-has-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "no-mixed-spaces-and-tabs": "off",
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "@typescript-eslint/naming-convention": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
    },
    settings: {
        react: {
            version: "18.2.0",
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
};
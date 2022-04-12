module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react/jsx-runtime"],
  rules: {
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["methods", "arrowFunctions"] },
    ],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "no-console": ["error"],
    "no-debugger": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};

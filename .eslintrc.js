module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    semi: [2, "always"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never" },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    // "comma-dangle": ["error", "always-multiline"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
  },
};

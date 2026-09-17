const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      ...require("eslint-plugin-react-hooks").configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier
);

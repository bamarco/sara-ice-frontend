/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:tailwindcss/recommended",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
      },
    },
  },
  plugins: ["vue"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      { singleline: "never", multiline: "never" },
    ],
  },
};

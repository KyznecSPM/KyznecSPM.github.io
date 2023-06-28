module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },

  extends: ["eslint:recommended", "react-app", "plugin:import/recommended"],
  plugins: ["import"],
  rules: {
    "import/no-unresolved": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

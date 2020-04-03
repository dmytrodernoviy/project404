module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/camelcase": 0
  },
};

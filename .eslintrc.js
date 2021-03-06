module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["prettier"],
  "rules": {
    "comma-dangle": ["error", "never"],
    "jsx-a11y/media-has-caption": 0,
    "prettier/prettier": ["error"],
    "no-param-reassign": 0,
    "quotes": [2, "backtick"],
    "radix": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "semi": [2, "always"]
  },
  "settings": {
    "import/resolver": {
      "alias": [
        ["~assets", "./src/assets"],
        ["~components", "./src/components"],
        ["~context", "./src/context"],
        ["~data", "./src/data"],
        ["~scss", "./src/scss"],
        ["~utils", "./src/utils"],
        ["~views", "./src/views"]
      ]
    }
  }
}
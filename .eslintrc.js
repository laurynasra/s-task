module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "jest": true,
  },
  "extends": ["airbnb-base"],
  "plugins": [
    "no-only-tests"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "consistent-return": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*test*.js", "**/*.spec.js"]}],
    "import/newline-after-import": "off",
    "global-require": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "func-names": ["error"],
    "no-use-before-define": ["error", "nofunc"],
    "no-underscore-dangle": ["error"],
    "no-unused-expressions": "off",
    "max-len": ["error", {
      "code": 120,
      "ignoreTrailingComments": true
    }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "no-only-tests/no-only-tests": "error"
  },
  "globals": {
    "before": true,
    "after": true,
  }
};

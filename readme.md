###Welcome Page

## Guide

If you New to Node.js, just start with Grammars.\
First, make directory to learn it.\
Second, type commands below\
`npm init -y`\
`npm install eslint --save-dev`\
`eslint --init` and follow settings\
and save the code below as .eslintrc in your working directory\
```
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "prettier"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  }
}
```\
Third, download prettier extension and save the code below as .prettierrc in your working directory\
```
{
  "singleQuote": true,
  "semi": true,
  "useTabs": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```\
Last, Go to vscode settings by `Ctrl+,` and search 'format on save' option and check it.
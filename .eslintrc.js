/*
 * @Author: Tsuki
 * @Date: 2022-07-24 11:17:52
 * @LastEditors: Tsuki
 * @Github: https://github.com/Etongxue
 * @LastEditTime: 2022-07-24 20:48:54
 * @FilePath: \vite\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'pro' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'pro' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}

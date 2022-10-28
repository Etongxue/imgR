/*
 * @Author: Tsuki
 * @Date: 2022-07-19 10:38:01
 * @LastEditors: Tsuki
 * @Github: https://github.com/Etongxue
 * @LastEditTime: 2022-07-19 10:50:42
 * @FilePath: \dev\workbox-config.js
 */
const dataId = Date.now()
module.exports = {
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{css,html,js}'
  ],
  cacheId: dataId + '',
  cleanupOutdatedCaches: true,
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/
  ],
  skipWaiting: true,
  clientsClaim: true,
  sourcemap: false
}

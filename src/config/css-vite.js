/*
 * @Author: Tsuki
 * @Date: 2022-07-30 13:36:45
 * @LastEditors: Tsuki
 * @Github: https://github.com/Etongxue
 * @LastEditTime: 2022-07-30 13:36:52
 * @FilePath: \dev\src\config\css-vite.js
 */
const cssStyl = {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "./assets/css/element-variables.scss";' // 全局公共样式
    }
  }
}

export default cssStyl

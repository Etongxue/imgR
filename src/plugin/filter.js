/*
 * @Author: Tsuki
 * @Date: 2022-04-20 20:40:43
 * @LastEditors: Tsuki
 * @Github: https://github.com/Etongxue
 * @LastEditTime: 2022-08-03 19:26:33
 * @FilePath: \dev\src\plugin\filter.js
 */
export function transiTime(timestamp) {
  /**
   *  时间戳转时间（10位）
   */
  const date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear()
  const M =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1

  function change(stage) {
    if (stage < 10) {
      return '0' + stage
    } else {
      return stage
    }
  }
  const D = change(date.getDate())
  const h = change(date.getHours()) // 小时
  const m = change(date.getMinutes()) // 分钟
  // const s = change(date.getSeconds()) // 秒
  // return Y + M + D + h + m
  return `${Y}-${M}-${D} ${h}:${m}`
}
// 设置图片信息
export function getImageBase64(img, ext) {
  img.setAttribute('crossorigin', 'Anonymous')
  var canvas = document.createElement('canvas') // 创建canvas DOM元素，并设置其宽高和图片一样
  canvas.width = img.width
  canvas.height = img.height
  var ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height) // 使用画布画图
  var dataURL = canvas.toDataURL('image/' + ext) // 返回的是一串Base64编码的URL并指定格式
  canvas = null // 释放
  return dataURL
}
export function getUrlBase64(url, ext, callback) {
  var canvas = document.createElement('canvas') // 创建canvas DOM元素
  var ctx = canvas.getContext('2d')
  var img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = url
  img.onload = function () {
    canvas.height = 60 // 指定画板的高度,自定义
    canvas.width = 85 // 指定画板的宽度，自定义
    ctx.drawImage(img, 0, 0, 60, 85) // 参数可自定义
    var dataURL = canvas.toDataURL('image/' + ext)
    callback.call(this, dataURL) // 回掉函数获取Base64编码
    canvas = null
  }
}

export function downLoadQueue(arr) {
  const data = []
  let sequence = Promise.resolve()
  arr.forEach(function (item) {
    sequence = sequence.then(item).then(r => {
      data.push(r)
      console.log(r)
      return data
    })
  })
  return sequence
}
// 防抖
export function debounce(fn, wait = 500, isImmediate = false) {
  let timerId = null
  let flag = true
  return function () {
    // @ts-ignore
    const context = this
    const args = arguments
    if (timerId) clearTimeout(timerId)
    if (isImmediate) {
      if (flag) {
        fn.apply(context, args)
        flag = false
      }
      timerId = setTimeout(function () {
        flag = true
      }, wait)
    } else {
      timerId = setTimeout(function () {
        fn.apply(context, args)
      }, wait)
    }
  }
}

const deepCopy = (obj) => {
  let target = null
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) { // 数组
      target = []
      obj.forEach(item => {
        target.push(deepCopy(item))
      })
    } else if (obj) {
      target = {}
      const objKeys = Object.keys(obj)
      objKeys.forEach(key => {
        target[key] = deepCopy(obj[key])
      })
    } else {
      target = obj
    }
  } else {
    target = obj
  }
  return target
}

export { deepCopy }

export const useText = `
<a href="https://tsuki.icu/" >
<img width="100" align="right" alt="blazeB2" src="/logo.png">
</a>

# TSUKI图床

> 📷基于 backBlazeb2 API  ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具

## 🎉 功能特点 | Features
- [x] 支持 **拖拽**、**复制粘贴**、**选择文件** 等方式进行选择图片
- [x] 支持 **一键复制** 图片外链支持多种格式(**MarkDown**、**HTML**、**自定义**)
- [x] 支持 图片名称 **唯一性** 后端生成uuid字符串，暂不支持自定义名称
- [x] 支持 **显示仓库下所有文件夹名称** 支持自定义默认搜索仓库名
- [x] 支持 **图片压缩** 可自定义压缩等级 默认关闭，开启默认(**0.8**)
- [x] 支持 **批量上传图片**、**批量删除图片** 和 **批量复制图片外链**
- [x] 支持 **图床管理**（对仓库图片的 **增删改查** 放大预览）
- [x] 支持 **自定义上传文件夹** 可自动生成文件夹
- [x] 支持 自定义 **检索** 某个指定文件夹或图片
- [x] 支持 **图片水印** 单张处理上传,**文字 / 图片**
- [x] 支持 **暗夜模式** (自由切换)
- [x] 支持 **PWA**
`

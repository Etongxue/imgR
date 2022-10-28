<!--
 * @Author: Tsuki
 * @Date: 2022-07-01 14:18:36
 * @LastEditors: Tsuki
 * @Github: https://github.com/Etongxue
 * @LastEditTime: 2022-07-24 17:07:42
 * @FilePath: \vite\src\views\About\About.vue
-->
<template>
  <div class="common-container">
    <div style="text-align: center;">
      <img src="/logo.svg" alt="" srcset="">
      <h1 class="main-title"> TSUKI图床</h1>
      <p class="p-simple">📷基于 backBlazeb2 API & ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具</p>
      <p class="p-statement">郑重声明：请勿通过本站上传违反你当地法律的图片，所造成的一切后果与本站无关。</p>
      <p class="p-shield">
        <a v-for="item in shieldsList" :key="item.alt" :href="item.link" target="_blank" rel="noopener noreferrer"><img
            :src="item.svgpic" :alt="item.alt">
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shieldsList: [
        { link: 'https://github.com/Etongxue', alt: 'Author', svgpic: 'https://img.shields.io/badge/author-Etongxue-violet.svg' },
        { link: 'https://blazeb2.js.org/', alt: 'docs', svgpic: 'https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-blueviolet' },
        { link: 'https://github.com/Etongxue/imgR/releases', alt: 'Release', svgpic: 'https://img.shields.io/github/release/Etongxue/blazeB2.svg' },
        { link: 'https://github.com/Etongxue/imgR/blob/master/LICENSE', alt: 'License', svgpic: 'https://img.shields.io/github/license/Etongxue/blazeB2.svg' },
        { link: 'https://github.com/Etongxue/imgR', alt: 'Stars', svgpic: 'https://img.shields.io/github/stars/Etongxue/blazeB2' },
        { link: 'https://github.com/Etongxue/imgR/issues', alt: 'Issues', svgpic: 'https://img.shields.io/github/issues/Etongxue/blazeB2' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import 'about.module.less';
</style>

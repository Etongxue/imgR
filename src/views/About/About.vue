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
      <h1 class="main-title"> TSUKIå¾åº</h1>
      <p class="p-simple">ð·åºäº backBlazeb2 API & â¡ cloudflare å¼åçå·æ CDN å éåè½çå¾åºå·¥å·</p>
      <p class="p-statement">ééå£°æï¼è¯·å¿éè¿æ¬ç«ä¸ä¼ è¿åä½ å½å°æ³å¾çå¾çï¼æé æçä¸ååæä¸æ¬ç«æ å³ã</p>
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

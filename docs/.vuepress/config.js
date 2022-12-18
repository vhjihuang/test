import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Welcome My test',
  description: 'Welcome My test',
  base: '/test/',
  markdown: {
    code: {
      lineNumbers: false
    }
  }
})
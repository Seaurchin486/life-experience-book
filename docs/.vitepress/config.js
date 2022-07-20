import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/life-experience-book/',
  title: '海胆的生活冷知识',
  description: '虽然很冷，但也许有用~',
  lang: 'cn',
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,

  themeConfig: {
    // siteTitle: false,
    logo: '/assets/img/move-bird.gif',
    nav: [
      { text: '首页', link: '/',  },
      { text: '日常篇', link: '/daily/', activeMatch: '/daily/' },
      { text: '技能篇', link: '/skill/', activeMatch: '/skill/'},
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Seaurchin486/life-experience-book' },
    ],
    sidebar: {
      '/daily/': [
        {
          text: '日常篇',
          collapsible: true,
          items: [
            { text: '衣', link: '/daily/clothes/', items: [{ text: '简介', link: '/daily/clothes/'}] },
            { text: '食', link: '/daily/food/' },
            { text: '住', link: '/daily/house/' },
            { text: '行', link: '/daily/traffic/' },
          ]
        }
      ],
      '/skill/': [
        {
          text: '技能篇',
          items: [
            { text: 'One', link: '/skill/one' }, // /daily/one.md
            { text: 'Two', link: '/skill/two' } // /daily/two.md
          ]
        }
      ],
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '编辑此页'
    },
    lastUpdatedText: '更新于：',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
})
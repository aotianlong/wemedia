import { getSidebar } from 'vitepress-plugin-auto-sidebar'

const sidebar = getSidebar({ contentRoot: '/docs', contentDirs: ['life'], collapsible: true, collapsed: true });


export default {
  title: 'AoTianlong的自媒体',
  description: '这是一个傲天龙的自媒体网站',
  themeConfig: {
    sidebar,
    nav: [
      // { text: 'Guide', link: '/guide' },
      {
        text: '社交账户',
        items: [
          { text: 'Twitter', link: 'https://www.twitter.com/aotianlong' },
          { text: 'Github', link: 'https://www.github.com/aotianlong' },
          { text: 'Facebook', link: 'https://www.facebook.com/aotianlong' }
        ]
      }
    ]
  }
}

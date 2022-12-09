import { getSidebar } from 'vitepress-plugin-auto-sidebar';

const sidebar = getSidebar({ contentRoot: 'docs', contentDirs: null, collapsible: true, collapsed: true });

// 生成的连接有bug，没有包含目录名称
const fixlink = (items = []) =>{
  items = items.filter((item) => {
    return !item.text.startsWith('.');
  })
  items.forEach((item) => {
    if (item.link) {
      item.link = item.link.replace('//', '/');
    }
    // item.link = root + item.link;
    if(item.items) {
      fixlink(item.items)
    }
  })
  return items;
}

const fixedSidebar = fixlink(sidebar);

export default {
  lang: 'zh-CN',
  title: 'AoTianlong的自媒体',
  description: '这是一个傲天龙的自媒体网站',
  themeConfig: {
    sidebar: fixedSidebar,
    footer: {
      message: 'Released under MIT license',
      coopyright: '2022 Aotianlong.com'
    },
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

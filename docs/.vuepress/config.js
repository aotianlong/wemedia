const { path } = require('@vuepress/utils');
module.exports = {
  title: '傲天龙的自媒体', //文档title
  description: '傲天龙的自媒体',
  head: [
    ['link', { rel: 'icon', href: '/favorite.jpg' }]
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
	  sidebar: [
      {
        text: '欢迎',
        link: '/',
      },
      {
        text: '计算机',
        children: [
          {
            text: '软件许可证',
            link: '/computers/软件许可证.html',
          },
          {
            text: '微软终止ie',
            link: '/computers/微软终止ie.html',
          }
        ]
      },
      {
        text: '名人事迹',
        link: '/person',
        children: [
          {
            text: '傲天龙',
            link: '/person/atl/',
          },
          {
            text: '横头网络',
            link: '/person/hengshantong/',
          },
          {
            text: '摇滚猪',
            link: '/person/pig/',
          },
        ],
      }
    ]
  }
}

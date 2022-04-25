export const themeData = {
  "sidebar": [
    {
      "text": "欢迎",
      "link": "/"
    },
    {
      "text": "计算机",
      "children": [
        {
          "text": "软件许可证",
          "link": "/computers/软件许可证.html"
        }
      ]
    },
    {
      "text": "名人事迹",
      "link": "/person",
      "children": [
        {
          "text": "傲天龙",
          "link": "/person/atl/"
        },
        {
          "text": "横头网络",
          "link": "/person/hengshantong/"
        },
        {
          "text": "摇滚猪",
          "link": "/person/pig/"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

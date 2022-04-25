export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "傲天龙的自媒体",
  "description": "傲天龙的自媒体",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favorite.jpg"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

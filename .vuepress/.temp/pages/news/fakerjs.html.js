export const data = {
  "key": "v-4ca71ab6",
  "path": "/news/fakerjs.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1642017839000,
    "contributors": [
      {
        "name": "aotianlong",
        "email": "aotianlong@gmail.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "news/fakerjs.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

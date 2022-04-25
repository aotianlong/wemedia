import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/aotianlong/workspace/hengshantong-api/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/aotianlong/workspace/hengshantong-api/short-video-docs/.vuepress/theme/layouts/Layout.vue")),
}

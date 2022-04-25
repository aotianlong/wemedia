<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <span>&copy 2020-2022</span>
        <a href="https://www.hengfirst.com">苏州横头网络有限公司</a>
        <span>版权所有</span>
        <a href="http://beian.miit.gov.cn/">苏ICP备18025744号</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32050902100492">苏公网安备32050902100492号</a>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
.my-footer > * {
  margin: 0px 8px;
}

</style>

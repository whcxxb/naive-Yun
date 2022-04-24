<template>
  <div>
    <h2>我是首页</h2>
    <helloworld></helloworld>
  </div>
</template>

<script lang="ts" setup>
// vite默认不能忽略.vue扩展名
import helloworld from '@/components/HelloWorld.vue'
</script>

<style lang="less" scoped>
h2 {
  color: hotpink;
}
</style>

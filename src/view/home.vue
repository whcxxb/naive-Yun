<template>
  <div>
    <h2>我是首页</h2>
    <Helloworld :title="msg" />
  </div>
</template>

<script lang="ts" setup>
// vite默认不能忽略.vue扩展名
import Helloworld from '@/components/HelloWorld.vue'
import { ref } from 'vue'

const msg = ref('hello')
</script>

<style lang="less" scoped>
h2 {
  color: hotpink;
}
</style>

<template>
  <RouterView />
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

// 修改主题颜色
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#18a058')
})
</script>

<style lang="less" scoped></style>

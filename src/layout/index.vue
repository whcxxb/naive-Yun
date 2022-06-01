<template>
  <el-container>
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <sideBar></sideBar>
    </el-aside>
    <el-main>
      <appMain></appMain>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import appMain from './appMain/index.vue'
import sideBar from './sideBar/index.vue'
</script>

<style scoped></style>

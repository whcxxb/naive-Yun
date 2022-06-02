<template>
  <el-container style="height: 100%">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <sideBar></sideBar>
    </el-aside>
    <!-- 右侧内容区域 -->
    <el-container class="container-right">
      <el-scrollbar :always="true">
        <!-- 头部 -->
        <el-header style="padding: 0">
          <headerTem></headerTem>
        </el-header>
        <el-main style="padding: 0">
          <appMain></appMain>
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import appMain from './appMain/index.vue'
import sideBar from './sideBar/index.vue'
import headerTem from './headerTem/index.vue'
</script>

<style lang="less" scoped>
.container-right {
  background-color: #f6f8fd;
}
</style>

<template>
  <el-container style="height: 100%">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <sideBar></sideBar>
    </el-aside>
    <!-- 右侧内容区域 -->
    <el-container class="container-right">
      <el-main style="padding: 0">
        <el-scrollbar :always="true">
          <headerTem></headerTem>
          <appMain></appMain>
        </el-scrollbar>
      </el-main>
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

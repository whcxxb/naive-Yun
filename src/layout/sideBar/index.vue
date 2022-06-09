<template>
  <div class="sideBar">
    <el-scrollbar :always="true">
      <h1>☁️naive云</h1>
      <div class="menus">
        <ul>
          <li v-for="item in menus" :key="item.id" @click="toPage(item.path)">
            <span style="margin-right: 10px">
              <el-icon size="18px" color="#18a058" style="vertical-align: middle">
                <component :is="item.icon" />
              </el-icon>
            </span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {
  Monitor,
  Opportunity,
  Grid,
  ShoppingBag,
  List,
  UserFilled,
  User,
  Message,
  Download
} from '@element-plus/icons-vue'
import { reactive, markRaw } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const menus = reactive([
  { id: '1', name: '仪表盘', path: '/dashboard', icon: markRaw(Monitor) },
  { id: '2', name: '使用文档', path: '/doc', icon: markRaw(Opportunity) },
  { id: '3', name: '节点列表', path: '/dingyue', icon: Grid },
  { id: '4', name: '购买订阅', path: '/dashboard', icon: ShoppingBag },
  { id: '5', name: '我的订单', path: '/doucment', icon: List },
  { id: '6', name: '我的邀请', path: '/dingyue', icon: UserFilled },
  { id: '7', name: '个人中心', path: '/dashboard', icon: User },
  { id: '8', name: '我的工单', path: '/doucment', icon: Message },
  { id: '9', name: '流量明细', path: '/dingyue', icon: Download }
])
const toPage = (path: string) => {
  router.push({
    path: path
  })
}
</script>

<style lang="less" scoped>
.sideBar {
  height: 100vh;
  background-color: #fff;
  .menus {
    padding: 20px 30px;
    li {
      color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      height: 60px;
      line-height: 60px;
    }
    li:hover {
      color: #555 !important;
    }
  }
}
</style>

<template>
  <div class="sideBar">
    <el-scrollbar :always="true">
      <h1>☁️naive云</h1>
      <!-- <button @click="clicks">ce</button> -->
      <div class="menus">
        <ul>
          <li v-for="item in menus" :key="item.id" @click="toPage(item.path)">
            <span style="margin-right: 10px">
              <el-icon size="18px" color="#18a058" style="vertical-align: middle">
                <component :is="getIcon(item.icon)" />
              </el-icon>
            </span>
            <span>{{ item.dicName }}</span>
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
import { reactive, markRaw, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const icons = [
  {
    Monitor
  },
  {
    Opportunity
  },
  {
    Grid
  }
]
// const menus = reactive([
//   { id: '1', name: '仪表盘', path: '/dashboard', icon: markRaw(Monitor) },
//   { id: '2', name: '使用文档', path: '/doc', icon: markRaw(Opportunity) },
//   { id: '3', name: '节点列表', path: '/dingyue', icon: Grid },
//   { id: '4', name: '购买订阅', path: '/dashboard', icon: ShoppingBag },
//   { id: '5', name: '我的订单', path: '/doucment', icon: List },
//   { id: '6', name: '我的邀请', path: '/dingyue', icon: UserFilled },
//   { id: '7', name: '个人中心', path: '/dashboard', icon: User },
//   { id: '8', name: '我的工单', path: '/doucment', icon: Message },
//   { id: '9', name: '流量明细', path: '/dingyue', icon: Download }
// ])
const userInfo = JSON.parse(window.localStorage.getItem('userInfo') || '')
const menus = userInfo.routes
const clicks = () => {
  console.log(menus)
}
const toPage = (path: string) => {
  router.push({
    path: path
  })
}
// 根据接口返回的数据 用计算属性渲染图表
const getIcon = computed(() => (item: string) => {
  let icon = null
  icons.map((iconObj: any) => {
    if (iconObj.hasOwnProperty(item)) icon = iconObj[item]
  })
  return icon
})
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

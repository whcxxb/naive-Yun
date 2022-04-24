<template>
  <div>
    <h2>{{ userStore.name }}</h2>
    <button @click="updata">更新</button>
    <h2>测试vueuse 鼠标坐标</h2>
    <h3>Mouse:{{ x }},{{ y }}</h3>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{ msg: string }>()
import { useUserStore } from '@/store/user'
import { useMouse } from '@vueuse/core'
const userStore = useUserStore()
const updata = () => {
  userStore.updataName('李四')
}
const { x, y } = useMouse()
</script>

<style scoped></style>

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'zs'
    }
  },
  // actions 可以异步请求
  actions: {
    updataName(name: string) {
      this.name = name
    }
  }
})

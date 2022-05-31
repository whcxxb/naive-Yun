import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import naive from 'naive-ui'
//创建vue实例
const app = createApp(App)
//挂载pinia
app.use(store)
app.use(router)
app.use(naive)
app.mount('#app')

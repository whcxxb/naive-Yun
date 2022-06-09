import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 动态路由守卫
import './router/config'
import 'normalize.css'
import './assets/css/base.less'
import 'element-plus/es/components/message/style/css'
//创建vue实例
const app = createApp(App)
//挂载pinia
app.use(store)
app.use(router)
app.mount('#app')

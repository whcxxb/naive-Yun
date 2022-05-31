import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    meta: {
      title: '忘记密码',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/view/login/forgetPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/view/login/register.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false
    },
    component: () => import('@/view/home.vue')
  },
  {
    path: '/:pathMath(.*)*',
    name: '404',
    component: () => import('@/view/404.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory() // html5路由模式
})

// 路由守卫 demo
router.beforeEach((to, from, next) => {
  //获取token
  const user = localStorage.getItem('token')
  if (to.path === '/login' && user) {
    next()
    return
  }
  if (to.path === '/' && !user) {
    next({ name: 'Login' })
    return
  }
  next()
})
export default router

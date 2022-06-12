import router from './index'
const layout = () => import(/* @vite-ignores */ '../layout/index.vue')
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
// 需要过滤的路由
const filterRoutes = ['/login']
router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = '' + to.meta.title
  if (filterRoutes.indexOf(to.path) != -1) {
    // 没有权限的静态路由
    next()
    return
  }
  if (router.options.routes.length === 4) {
    // 获取token
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo') || '')

    // 如果token和路由表都存在
    if (userInfo.token && userInfo.routes) {
      onFilterRoutes(to, next, userInfo.routes)
    } else {
      next({
        path: '/login',
        replace: true
      })
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
// 路由拼接
function loadView(view: string) {
  // new Promise((resolve, reject) => {
  //   resolve(...)
  // })
  // () => import(/* @vite-ignore */ `../view/${view}.vue`)
  return () => import(`../view/${view}.vue`)
}
// 路由过滤和跳转
const onFilterRoutes = async (to: any, next: any, e: []) => {
  // 过滤路由
  const routes = await filterASyncRoutes(e)
  routes.sort((a: any, b: any) => a.id - b.id)
  routes.forEach((item: any) => {
    router.options.routes.push(item)
    router.addRoute(item)
  })
  next({
    path: to.path
  })
}

// 过滤路由 拼接路径
const filterASyncRoutes = (data: any) => {
  const routes = data.filter((item: any) => {
    if (item['component'] === 'layout') {
      item.component = layout
    } else {
      item['component'] = loadView(item['component'])
    }
    // 路由递归
    if (item.children && item.children.length > 0) {
      item['children'] = filterASyncRoutes(item['children'])
    }
    return true
  })
  return routes
}

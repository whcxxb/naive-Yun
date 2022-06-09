const dynamicUser = [
  {
    id: 1,
    name: '管理员',
    avatar: 'https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/ccb565eca95535ab2caac9f6129b8b7a~300x300.image',
    desc: '管理员 - admin',
    username: 'admin',
    password: '123456',
    token: 'rtVrM4PhiFK8PNopqWuSjsc1n02oKc3f',
    routes: [
      {
        id: 1,
        name: '/',
        path: '/',
        icon: 'Opportunity',
        component: 'layout',
        redirect: '/dashboard',
        hidden: false,
        children: [{ name: 'Dashboard', path: '/dashboard', meta: { title: '首页' }, component: 'dashboard' }]
      },
      {
        id: 2,
        name: 'doc',
        path: '/doc',
        icon: 'Opportunity',
        component: 'layout',
        children: [{ name: 'doc', path: '/doc', meta: { title: '帮助文档' }, component: 'doc' }]
      },
      {
        id: 3,
        name: 'user',
        path: '/form',
        component: 'Layout',
        redirect: '/form/index',
        hidden: false,
        children: [{ name: '/form/index', path: '/form/index', meta: { title: 'form' }, component: 'form/index' }]
      }
    ]
  },
  {
    id: 2,
    name: '普通用户',
    avatar: 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/6364348965908f03e6a2dd188816e927~300x300.image',
    desc: '普通用户 - people',
    username: 'people',
    password: '123456',
    token: '4es8eyDwznXrCX3b3439EmTFnIkrBYWh',
    routes: [
      {
        id: 1,
        name: '/',
        path: '/',
        component: 'Layout',
        redirect: '/index',
        hidden: false,
        children: [{ name: 'index', path: '/index', meta: { title: 'index' }, component: 'index/index' }]
      },
      {
        id: 2,
        name: 'doc',
        path: '/doc',
        component: 'Layout',
        redirect: '/doc'
      }
    ]
  }
]

export default dynamicUser

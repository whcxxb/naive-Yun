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
        icon: 'Monitor',
        dicName: '首页',
        component: 'layout',
        redirect: '/dashboard',
        children: [{ name: 'dashboard', path: '/dashboard', meta: { title: '首页' }, component: 'dashboard' }]
      },
      {
        id: 2,
        name: 'doc',
        path: '/doc',
        icon: 'Opportunity',
        dicName: '帮助文档',
        component: 'layout',
        children: [{ name: 'doc', path: '/doc', meta: { title: '帮助文档' }, component: 'doc' }]
      },
      {
        id: 3,
        name: 'user',
        path: '/user',
        icon: 'Grid',
        dicName: '用户管理',
        component: 'layout',
        children: [{ name: 'user', path: '/user', meta: { title: '用户管理' }, component: 'user' }]
      }
    ]
  },
  {
    id: 2,
    name: '普通用户',
    avatar: 'https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/6364348965908f03e6a2dd188816e927~300x300.image',
    desc: '普通用户 - people',
    username: 'putong',
    password: '123456',
    token: '4es8eyDwznXrCX3b3439EmTFnIkrBYWh',
    routes: [
      {
        id: 1,
        name: '/',
        path: '/',
        icon: 'Monitor',
        dicName: '首页',
        component: 'layout',
        redirect: '/dashboard',
        children: [{ name: 'dashboard', path: '/dashboard', meta: { title: '首页' }, component: 'dashboard' }]
      },
      {
        id: 2,
        name: 'doc',
        path: '/doc',
        icon: 'Opportunity',
        dicName: '帮助文档',
        component: 'layout',
        children: [{ name: 'doc', path: '/doc', meta: { title: '帮助文档' }, component: 'doc' }]
      }
    ]
  }
]

export default dynamicUser

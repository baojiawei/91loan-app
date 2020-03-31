const componentsRouter = {
  path: '/protocol',
  name: 'protocol',
  component: () => import('views/protocol/protocol'),
  children: [
    {
      path: '190908/register',
      name: 'registerProtocol',
      component: () => import('views/protocol/190908/register'),
      meta: {
        title: '用户注册协议'
      }
    },
    {
      path: '190908/report',
      name: 'reportProtocol',
      component: () => import('views/protocol/190908/report'),
      meta: {
        title: '信息收集授权协议'
      }
    },
    {
      path: '190908/secret',
      name: 'secretProtocol',
      component: () => import('views/protocol/190908/secret'),
      meta: {
        title: '隐私政策'
      }
    },
    {
      path: '191203/member',
      name: 'memberProtocol',
      component: () => import('views/protocol/191203/member'),
      meta: {
        title: '会员协议'
      }
    }
  ]
}

export default componentsRouter

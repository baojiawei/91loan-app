const componentsRouter = {
  path: '/member',
  name: 'member',
  component: () => import('views/member/member'),
  meta: {
    title: '会员',
    requiresUpdateUserInfo: false
  },
  children: [
    {
      path: 'pay',
      name: 'memberPay',
      component: () => import('views/member/memberPay'),
      meta: { title: '黑钻会员' }
    }
  ]
}

export default componentsRouter

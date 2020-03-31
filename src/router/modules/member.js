const componentsRouter = {
  path: '/member',
  name: 'member',
  component: () => import('views/member/member'),
  meta: {
    title: '黑钻会员',
    requiresUpdateUserInfo: false
  }
}

export default componentsRouter

const componentsRouter = {
  path: '/loanProcess',
  name: 'loanProcess',
  component: () => import('views/loanProcess/index'),
  meta: {
    title: '贷款申请'
  },
  children: [
    {
      path: 'identity',
      name: 'identity',
      component: () => import('views/loanProcess/identity'),
      meta: {
        title: '身份认证'
      }
    },
    {
      path: 'applicationInfo',
      name: 'applicationInfo',
      component: () => import('views/loanProcess/applicationInfo'),
      meta: {
        title: '申请信息'
      }
    },
    {
      path: 'operator',
      name: 'operator',
      component: () => import('views/loanProcess/operator'),
      meta: {
        title: '运营商认证'
      }
    }
  ]
}

export default componentsRouter

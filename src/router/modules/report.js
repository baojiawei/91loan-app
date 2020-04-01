const componentsRouter = {
  path: '/creditAnalysis',
  name: 'creditAnalysis',
  component: () => import('views/report/creditAnalysis'),
  meta: {
    title: '信用分析'
  }
  // children: [
  //   {
  //     path: 'detail',
  //     name: 'detail',
  //     component: () => import('views/report/detail'),
  //     meta: {
  //       title: '报告详情'
  //     }
  //   }
  // ]
}

export default componentsRouter

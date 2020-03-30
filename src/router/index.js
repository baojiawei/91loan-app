import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
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
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('views/member/member'),
    meta: {
      title: '黑钻会员',
      requiresUpdateUserInfo: false
    }
  },
  {
    path: '/wxLoanMarket',
    name: 'wxLoanMarket',
    component: () => import('views/loanMarketNoRegister/loanMarket'),
    meta: {
      title: '贷款大全'
    }
  },
  {
    path: 'realName',
    name: 'realName',
    component: () => import('views/realName/realName'),
    meta: {
      title: '实名认证'
    }
  },
  {
    path: '/protocol/190908/register',
    name: 'registerProtocol',
    component: () => import('views/protocol/190908/register'),
    meta: {
      title: '用户注册协议'
    }
  },
  {
    path: '/protocol/190908/report',
    name: 'reportProtocol',
    component: () => import('views/protocol/190908/report'),
    meta: {
      title: '信息收集授权协议'
    }
  },
  {
    path: '/protocol/190908/secret',
    name: 'secretProtocol',
    component: () => import('views/protocol/190908/secret'),
    meta: {
      title: '隐私政策'
    }
  },
  {
    path: '/protocol/191203/member',
    name: 'memberProtocol',
    component: () => import('views/protocol/191203/member'),
    meta: {
      title: '会员协议'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

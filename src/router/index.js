import Vue from 'vue'
import VueRouter from 'vue-router'
import protocols from './modules/protocols'
import loanProcess from './modules/loanProcess'
import member from './modules/member'
import report from './modules/report'

Vue.use(VueRouter)

const routes = [
  {
    path: '/wxLoanMarket',
    name: 'wxLoanMarket',
    component: () => import('views/loanMarketNoRegister/loanMarket'),
    meta: {
      title: '贷款大全'
    }
  },
  {
    path: '/realName',
    name: 'realName',
    component: () => import('views/realName/realName'),
    meta: {
      title: '实名认证'
    }
  },
  protocols,
  loanProcess,
  member,
  report
]
const router = new VueRouter({
  routes
})

export default router

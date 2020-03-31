import Vue from 'vue'
import './cube-ui'
import router from './router'
import store from './store/index'
import App from './App.vue'
import VueAnimateNumber from 'vue-animate-number'
import vueLazyload from 'vue-lazyload'
import animated from 'animate.css'
import ba from 'vue-ba'
import './register'
import { getCustInfoPro } from 'api/cust'
import { setCustInfo } from 'common/js/utils'
import { getUserInfoApp } from 'common/js/utils-app'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(vueLazyload, {
  loading: require('common/images/loading.gif')
})
Vue.use(VueAnimateNumber)
Vue.use(animated)
Vue.use(ba, { siteId: '21be3d376087232076a0431c24339611' })

router.beforeEach((to, from, next) => {
  // 给每个路由title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 首页和报告页如果有登录状态的话，每次进入需要更新
  if (to.matched.some(record => record.meta.requiresUpdateUserInfo)) {
    const cust = getUserInfoApp()
    if (cust !== null) {
      getCustInfoPro().then((res) => {
        setCustInfo(Object.assign(cust, {
          reportStatus: res.data.reportId ? 1 : 0,
          reportId: res.data.reportId,
          wxOpenId: res.data.wxOpenId,
          idCardStatus: res.data.idCardStatus,
          informStatus: res.data.informStatus,
          optStatus: res.data.optStatus,
          optId: res.data.optId,
          vip: res.data.vip,
          vipExpTime: res.data.vipExpTime
        }))
        next()
      })
    }
  }
  next()
})

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

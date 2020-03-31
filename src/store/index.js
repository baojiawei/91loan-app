/**
 * @Author: baojiawei
 * @Date: 19/1/10
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 19/1/10
 **/
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  mutations,
  state
})

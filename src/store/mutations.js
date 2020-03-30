/**
 * @Author: baojiawei
 * @Date: 19/1/10
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 19/1/10
 **/
import * as types from './mutation-types'

const mutations = {
  [types.ORDER_DATA] (state, orderData) {
    localStorage.setItem('orderData', JSON.stringify(orderData))
    state.orderData = orderData
  },
  [types.WX_CODE] (state, wxCode) {
    localStorage.setItem('wxCode', JSON.stringify(wxCode))
    state.wxCode = wxCode
  },
  [types.IS_BUY_REPORT_DIALOG_SHOW] (state, isBuyReportDialogShow) {
    localStorage.setItem('isBuyReportDialogShow', JSON.stringify(isBuyReportDialogShow))
    state.isBuyReportDialogShow = isBuyReportDialogShow
  }
}

export default mutations

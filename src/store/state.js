/**
 * @Author: baojiawei
 * @Date: 19/1/10
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 19/1/10
 **/
const state = {
  orderData: JSON.parse(localStorage.getItem('orderData')) || {},
  wxCode: JSON.parse(localStorage.getItem('wxCode')) || {},
  isBuyReportDialogShow: JSON.parse(localStorage.getItem('isBuyReportDialogShow')) || {}
}

export default state

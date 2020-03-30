import { post } from './axios'

// 获取交易商品
const getTradeGoods = post('/tradeGoods/api/getPub/v1')
// 获取交易商品列表
const getTradeGoodsList = post('/tradeGoods/api/getListPub/v1')
// 获取贷款报告列表
const getLoanReportList = post('/loanReport/api/getListPro/v1')
// 获取贷款报告
const getLoanReport = post('/loanReport/api/getPro/v1')
// 新增并查询贷款报告
const addAndQueryReport = post('/loanReport/api/addAndQueryReportPro/v2')
// 新增并查询贷款报告(微信)
const addReportForWx = post('/tradeOrder/api/addPro/v1')
// 订单获取列表(微信支付获取报告)
const getReportListForWx = post('/tradeOrder/api/getListPro/v1')
// 查询微信订单(微信支付获取报告)
const queryPayResult = post('/tradeOrder/api/getPro/v1')
// 查询微信订单(微信支付获取报告) 02
const queryPayResult02 = post('/tradeOrder/api/getPro/v2')
// 查询微信订单列表(微信支付获取报告)
const queryPayResultList = post('/tradeOrder/api/getListPro/v2')

export {
  getTradeGoods,
  getTradeGoodsList,
  getLoanReportList,
  getLoanReport,
  addAndQueryReport,
  addReportForWx,
  getReportListForWx,
  queryPayResult,
  queryPayResult02,
  queryPayResultList
}

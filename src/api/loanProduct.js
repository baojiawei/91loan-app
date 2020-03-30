import { get, post } from './axios'

// 获取贷款列表
const getLoanProductList = post('/loanProduct/api/getListPub/v1')
// 获取首页滚动快讯
const getLoanCustList = get('/appCarouselText/api/getListPub/v1')

export {
  getLoanProductList,
  getLoanCustList
}

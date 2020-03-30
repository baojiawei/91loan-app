import { post } from './axios'

// 获取图片验证码
const getImageCode = post('/verfcode/api/getStaticPicVerfCodePub/v1')
// 获取短信验证码验证码
const getSmsCode = post('/verfcode/api/getSmsVerfCodePub/v1')
// 登录
const login = post('/custInfo/api/loginBySmsPub/v1')
// 注册
const register = post('/custInfo/api/registerPub/v1')
// 登出
const loginOut = post('/custInfo/api/logoutPro/v1')
// 添加反馈管理
const addFeedback = post('/appFeedback/api/addPub/v1')
// 获取Banner列表
const getAppBanner = post('/appBanner/api/getListPub/v1')
// 实名认证
const addAndAuthPro = post('/custIdCard/api/addAndAuthPro/v1')
// 获取用户信息
const getCustInfoPro = post('/custInfo/api/getPro/v1')
// 贷款申请信息新增
const addLoanApplication = post('/loanApplication/api/addPro/v1')
// 贷款申请信息提交
const submitLoanApplication = post('/loanApplication/api/submitPro/v1')

export {
  getImageCode,
  getSmsCode,
  login,
  register,
  addFeedback,
  loginOut,
  getAppBanner,
  addAndAuthPro,
  getCustInfoPro,
  addLoanApplication,
  submitLoanApplication
}

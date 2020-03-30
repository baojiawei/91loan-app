/**
 * @Author: baojiawei
 * @Date: 18/12/4
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 18/12/4
 **/
import Cust from 'pojo/CustPojo'
import { Base64 } from 'js-base64'

// 存用户信息ctx
export function setCustInfo (custPojo) {
  localStorage.setItem('ctx', Base64.encode(JSON.stringify(new Cust(custPojo))))
}

// 取用户信息ctx
export function getCustInfo () {
  const cust = localStorage.getItem('ctx')
  if (cust !== null) {
    return JSON.parse(Base64.decode(cust))
  }
  return null
}

// 检查客户端浏览器类型
export function checkClientPlatform () {
  const u = navigator.userAgent.toLowerCase()
  return {
    android: u.indexOf('android') > -1,
    iPhone: u.indexOf('iphone') > -1,
    iPad: u.indexOf('ipad') > -1,
    weixin: u.indexOf('micromessenger') > -1,
    uc: u.indexOf('ucbrowser') > -1
  }
}

// 时间格式化
export function dateToStr (date, format) {
  format = format !== undefined ? format : 'yyyy-MM-dd HH:mm:ss'
  date = date !== undefined ? date : new Date()
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  let dateStr = format.replace('yyyy', date.getFullYear())
  dateStr = dateStr.replace('MM', formatVal(date.getMonth() + 1, 2))
  dateStr = dateStr.replace('dd', formatVal(date.getDate(), 2))

  dateStr = dateStr.replace('HH', formatVal(date.getHours(), 2))
  dateStr = dateStr.replace('mm', formatVal(date.getMinutes(), 2))
  dateStr = dateStr.replace('ss', formatVal(date.getSeconds(), 2))
  return dateStr
}

export function getQueryString (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

function formatVal (val, formatLen) {
  val = val + ''
  for (var i = val.length; i < formatLen; i++) {
    val = '0' + val
  }
  return val
}

/**
 * @Author: baojiawei
 * @Date: 18/12/4
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 18/12/4
 **/
import { getCustInfo } from './utils'

// 获取用户信息
export function getUserInfoApp (doLogin) {
  try {
    if (window.android && window.android.getUserInfo) {
      return JSON.parse(window.android.getUserInfo(doLogin))
    } else if (window.webkit.messageHandlers.getUserInfo) {
      return JSON.parse(window.prompt('getUserInfo', doLogin))
    } else {
      return getCustInfo()
    }
  } catch (e) {
    return getCustInfo()
  }
}

// 判断是否在91贷款王app内
export function checkEnvironmentIn91 () {
  try {
    if (window.android && window.android.getUserInfo) {
      return true
    } else if (window.webkit.messageHandlers.getUserInfo) {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 报告页面返回弹出框
export function showQuitAlert () {
  try {
    if (window.android && window.android.showQuitAlert) {
      window.android.showQuitAlert()
    } else if (window.webkit.messageHandlers.showQuitAlert) {
      return window.prompt('showQuitAlert')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 提交运营商验证
export function startAssessment (orderId) {
  try {
    if (window.android && window.android.startAssessment) {
      window.android.startAssessment(orderId)
    } else if (window.webkit.messageHandlers.startAssessment) {
      return window.prompt('startAssessment')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 点击产品展示对应弹框
export function showBuyReportPopView (productId, reportType) {
  try {
    if (window.android && window.android.showBuyReportPopView) {
      window.android.showBuyReportPopView(productId, reportType)
    } else if (window.webkit.messageHandlers.showBuyReportPopView) {
      return window.prompt('showBuyReportPopView')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 提交贷款申请
export function gotoAuditPage () {
  try {
    if (window.android && window.android.gotoAuditPage) {
      window.android.gotoAuditPage()
    } else if (window.webkit.messageHandlers.gotoAuditPage) {
      return window.prompt('gotoAuditPage')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 判断是否在上架前
export function isReleaseApp () {
  try {
    if (window.android && window.android.isReleaseApp) {
      window.android.isReleaseApp()
    } else if (window.webkit.messageHandlers.isReleaseApp) {
      return window.prompt('isReleaseApp')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 跳转app内的贷款列表页面
export function gotoLoanShop () {
  try {
    if (window.android && window.android.gotoLoanShop) {
      window.android.gotoLoanShop()
    } else if (window.webkit.messageHandlers.gotoLoanShop) {
      window.prompt('gotoLoanShop')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 判断是否在微信内
export function isWx () {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') !== -1) {
    return true
  } else {
    return false
  }
}

// 返回上一级
export function back () {
  try {
    if (window.android && window.android.back) {
      window.android.back()
    } else if (window.webkit.messageHandlers.back) {
      window.prompt('back')
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 获取app信息
export function getAppInfo () {
  try {
    if (window.android && window.android.getAppInfo) {
      return JSON.parse(window.android.getAppInfo())
    } else if (window.webkit.messageHandlers.getAppInfo) {
      return JSON.parse(window.prompt('getAppInfo'))
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 百度移动端统计(事件)
function onMTJEvent (eventId) {
  try {
    if (window.android && window.android.onMTJEvent) {
      window.android.onMTJEvent(eventId, '')
    } else if (window.webkit.messageHandlers.onMTJEvent) {
      window.prompt('onMTJEvent', eventId)
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 百度移动端统计(进入页面)
function onMTJPageStart (pageName) {
  try {
    if (window.android && window.android.onMTJPageStart) {
      window.android.onMTJPageStart(pageName)
    } else if (window.webkit.messageHandlers.onMTJPageStart) {
      window.prompt('onMTJPageStart', pageName)
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 百度移动端统计(离开页面)
function onMTJPageEnd (pageName) {
  try {
    if (window.android && window.android.onMTJPageEnd) {
      window.android.onMTJPageEnd(pageName)
    } else if (window.webkit.messageHandlers.onMTJPageEnd) {
      window.prompt('onMTJPageEnd', pageName)
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

// 百度移动端统计(离开页面)
export function addBd (eventName, param) {
  switch (eventName) {
    case 'start':
      onMTJPageStart(param)
      break
    case 'end':
      onMTJPageEnd(param)
      break
    default:
      onMTJEvent(param)
  }
}

// 隐藏或显示app底部tab
export function showAppTabBar (isShow) {
  try {
    if (window.android && window.android.showAppTabBar) {
      window.android.showAppTabBar(isShow)
    } else if (window.webkit.messageHandlers.showAppTabBar) {
      window.prompt('showAppTabBar', isShow)
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

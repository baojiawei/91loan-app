/**
 * 封装axios方法
 * @Author baojiawei
 */
import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import app from '../main.js'
import { getUserInfoApp, checkEnvironmentIn91 } from 'common/js/utils-app'

const ERR_OK = 1
const LOGIN_TIME_OUT = -9982
const prefixUrl = process.env.VUE_APP_HOST_URL

// 请求拦截器
axios.interceptors.request.use(config => {
  app.$createToast().show()
  config.method === 'post'
    ? config.data = qs.stringify({ ...config.data })
    : config.params = { ...config.params }
  const account = 'xxxxxx'
  const secret = 'xxxxxx'
  const timestamp = new Date().getTime()
  const sign = md5(account + timestamp + secret).toUpperCase()
  let token = ''
  if (getUserInfoApp() !== null) {
    token = getUserInfoApp().token
  }
  config.headers.account = account
  config.headers.timestamp = timestamp
  config.headers.sign = sign
  config.headers.userToken = token
  return config
}, error => {
  app.$createToast({
    type: 'warn',
    txt: error
  })
  Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(response => {
  app.$createToast().hide()
  const { reqResult } = response.data
  if (reqResult.code === ERR_OK) {
    return response.data
  } else {
    app.$createToast({
      txt: reqResult.msg,
      type: 'error',
      time: 2000,
      $events: {
        timeout: () => {
          if (reqResult.code === LOGIN_TIME_OUT) {
            if (checkEnvironmentIn91()) {
              getUserInfoApp()
            } else {
              app.$createLoginDialog({
                $events: {
                  click: () => {
                    window.location.reload()
                  }
                }
              }).show()
            }
          }
        }
      }
    }).show()
    return Promise.reject(reqResult.msg)
  }
}, error => {
  const txt = JSON.parse(JSON.stringify(error)).response.status === 404
    ? '数据找不到了..'
    : '服务器开小差了，请稍后再试'
  app.$createToast({
    type: 'warn',
    txt: txt
  }).show()
  return Promise.reject(error)
})

// get方法
export function get (url) {
  return function (params = {}) {
    return axios.get(prefixUrl + url, { params: params })
  }
}
// post方法
export function post (url) {
  return function (params = {}) {
    return axios.post(prefixUrl + url, params)
  }
}

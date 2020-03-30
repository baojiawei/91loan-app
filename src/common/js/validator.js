/**
 * @Author: baojiawei
 * @Date: 18/12/8
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 18/12/8
 **/
import { Toast } from 'cube-ui'

export const checkPhone = validator(/^1[3,5,7,4,8,9]\d{9}$/, '请输入正确的手机号', '请输入手机号')
export const checkImageCode = validator(/^[a-zA-Z0-9]{4}$/, '请输入正确的图形验证码', '请输入图形验证码')
export const checkSMSCode = validator(/^[0-9]{4}/, '请输入正确的短信验证码', '请输入短信验证码')
export const checkCustName = validator(/^[\u4e00-\u9fa5]{2,4}$/, '请输入正确的姓名', '请输入本人姓名')
export const checkIdCardCode = validator(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, '请输入正确的身份证号', '请输入本人身份证号')

function validator (pattern, message, emptyMessage) {
  return function (text, ref) {
    if (text === '') {
      showToast(emptyMessage, ref)
      return false
    }
    const checkPattern = pattern.test(text)
    if (!checkPattern) {
      showToast(message, ref)
      return false
    } else {
      return true
    }
  }
}

function showToast (message, ref) {
  Toast.$create({
    txt: message,
    type: 'warn',
    time: 2000,
    $events: {
      timeout: () => {
        ref.handleClear()
      }
    }
  }).show()
}

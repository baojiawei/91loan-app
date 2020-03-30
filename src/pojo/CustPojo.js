/**
 * @Author: baojiawei
 * @Date: 18/12/4
 * @Version: 1.0
 * @Last Modified by : baojiawei
 * @Last Modified time: 18/12/4
 **/
export default class Cust {
  constructor ({
    token, id, telNo, name, idCardNameHide, idCardName
    , idCardCode, idCardCodeHide, reportId, optId, reportStatus
    , wxOpenId, idCardStatus, informStatus, optStatus, vip, vipExpTime
  }) {
    this.token = token
    this.id = id
    this.telNo = telNo
    this.name = name
    this.idCardNameHide = idCardNameHide
    this.idCardName = idCardName
    this.idCardCodeHide = idCardCodeHide
    this.idCardCode = idCardCode
    this.reportId = reportId
    this.optId = optId
    this.reportStatus = reportStatus
    this.wxOpenId = wxOpenId
    this.idCardStatus = idCardStatus
    this.informStatus = informStatus
    this.optStatus = optStatus
    this.vip = vip
    this.vipExpTime = vipExpTime
  }
}

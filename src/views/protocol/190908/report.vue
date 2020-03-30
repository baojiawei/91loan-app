<template>
  <div class="service-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="service-info">
      <cube-scroll>
        <div>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:Calibri; font-size:10.5pt">1</span><span style="font-family:宋体; font-size:10.5pt">、为了给您提供更为优质和便捷的服务，</span><span
            style="color:#ff0000; font-family:Calibri; font-size:10.5pt">{{appInfo.packageName}}</span><span
            style="font-family:宋体; font-size:10.5pt">（（包括手机客户端及其运营方</span><span
            style="font-family:宋体; font-size:10.5pt">{{appInfo.subject}}</span><span style="font-family:宋体; font-size:10.5pt">及其关联公司，以下简称</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span
            style="font-family:宋体; font-size:10.5pt">我们</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span
            style="font-family:宋体; font-size:10.5pt">、</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span
            style="font-family:宋体; font-size:10.5pt">平台</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span
            style="font-family:宋体; font-size:10.5pt">或</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span
            style="font-family:宋体; font-size:10.5pt">本平台</span><span
            style="font-family:Calibri; font-size:10.5pt">"</span><span style="font-family:宋体; font-size:10.5pt">））将与第三方数据公司合作，根据您提供的信息进行</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">询、使用、分析和储存。为了便于我们与第三方一起为您提供服务，我们需要您于此对第三方机构的信息</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">询、使用、分析和储存进行授权。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt">如果您使用或继续使用我们的服务，即意味着同意第三方机构根据《协议》约定收集、使用、分析和储存您的相关信息。如您不同意《协议》中的内容，则应当立即停止使用我们的服务。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:Calibri; font-size:10.5pt">2</span><span style="font-family:宋体; font-size:10.5pt">、需要获得您授权的机构包括但不限于：</span><span
            style="font-family:宋体; font-size:10.5pt">爱金（上海）金融信息服务有限公司，海南小萤征信服务有限公司</span><span
            style="font-family:宋体; font-size:10.5pt">。（以与我们有实际合作的机构为准）若是有新的合作方，我们会及时通过手机平台、网站向用户公布，取得您的授权。</span></p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:Calibri; font-size:10.5pt">3</span><span style="font-family:宋体; font-size:10.5pt">、您同意并于此授权与我们合作的第三方</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">看、储存您的通讯运营商基础资料，包括但不限于您的登记姓名、手机号码、归属省份、话费余额、套餐信息（部分）、账单信息、开户日期（部分）、本地通讯录，包括姓名、电话号码、公司（如有）、电子邮件（如有）、地址（如有）、个人资料（如有）、备注（如有）。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt">您同意并于此授权与我们合作的第三方</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">看、储存通讯运营商其他相关资料，包括但不限于通话记录相关信息（包括但不限于通话发生时间、通话发生地、主叫</span><span
            style="font-family:Calibri; font-size:10.5pt">/</span><span style="font-family:宋体; font-size:10.5pt">被叫、通话对方号码、通话时长（秒）、本地漫游长途属性）、短信记录相关信息（包括但不限于服务类型、短信发送</span><span
            style="font-family:Calibri; font-size:10.5pt">/</span><span style="font-family:宋体; font-size:10.5pt">接受时间、对方号码）等。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt">您同意并于此授权第三方机构使用您提供的身份信息</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">询您的信用信息，包括但不限于信用报告、信用评分、个人风险评估、共债情况、黑名单等。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt">您同意并于此授权与我们合作的第三方</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">看、储存您的关联信用卡相关信息（包括但不限于持卡人姓名、发卡行、储蓄卡</span><span
            style="font-family:Calibri; font-size:10.5pt">/</span><span style="font-family:宋体; font-size:10.5pt">信用卡卡号后四位、是否开通快捷支付）、社保信息包括但不限于账号信息、公积金缴存情况等；工资卡账户流水等信息。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt">您同意并于此授权与我们合作的第三方</span><span
            style="font-family:宋体; font-size:10.5pt">查</span><span style="font-family:宋体; font-size:10.5pt">看、储存您在该平台留存的账号信息、实名认证状态、交易记录相关信息（包括但不限于交易时间、交易内容、收货人姓名、收货人固话</span><span
            style="font-family:Calibri; font-size:10.5pt">/</span><span style="font-family:宋体; font-size:10.5pt">手机、收货人地址、付款银行）、交易对方户名（对方淘宝号、或姓名、或其它）等。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:Calibri; font-size:10.5pt">4</span><span style="font-family:宋体; font-size:10.5pt">、第三方收集、使用、分析和储存您的数据时将严格遵守我们与您签订的《隐私政策及授权使用协议》，信息收集的范围以及使用方式以《隐私政策及授权使用协议》中的约定为限。</span>
          </p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt" v-if="idCardName">姓名：{{idCardName}}</span></p>
          <p style="margin:5pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
            style="font-family:宋体; font-size:10.5pt" v-if="idCardCode">身份证号：{{idCardCode}}</span></p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { getAppInfo, getUserInfoApp } from 'common/js/utils-app'

export default {
  data () {
    return {
      title: '信息收集授权协议',
      appInfo: '',
      userInfo: '',
      idCardCode: '',
      idCardName: ''
    }
  },
  created () {
    this._getAppInfo()
  },
  methods: {
    _getAppInfo () {
      this.appInfo = getAppInfo()
      this.userInfo = getUserInfoApp()
      if (this.userInfo && this.userInfo.idCardName) {
        this.idCardName = this.userInfo.idCardName
      }
      if (this.userInfo && this.userInfo.idCardCode) {
        this.idCardCode = this.userInfo.idCardCode
      }
    }
  },
  components: {
    navBar: navBar
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .service-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .service-info
      position: absolute
      top: 96px
      bottom: 0
      left: 0
      right: 0
      padding: 20px
</style>

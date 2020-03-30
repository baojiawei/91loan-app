<template>
  <div class="about-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="scroll-view">
      <cube-scroll>
        <div class="about">
          <div class="top">
            <p>
              51借款王是一款专业快速的贷款服务管理工具，帮助用户提供大额分期贷款、小额现金贷款、信用借贷、现金借钱、快速借款、分期购物等信息服务的平台，为用户提供金融贷款产品搜索与推荐服务。纯信用贷款，低门槛，无抵押。做用户随时的贷款顾问，年轻人的贷款钱包。</p>
            <p><label class="tit">所属行业：</label>贷款、借款、借贷、小额贷款、分期借款贷款，手机贷款、网上贷款、闪电借贷、银行贷款借款，信用借款贷款，消费借款贷款，购物贷款借款</p>
            <p><label class="tit">提供服务：</label>应急借款、恋爱基金、换手机、付房租、旅游基金、消费购物、培训深造等，随用随借，保障隐私，安心借钱。</p>
          </div>
          <div class="middle">
            <p>身份证贷款，2小时下款</p>
            <p>闪电极速贷款借款，人人都能借到钱</p>
          </div>
          <div class="bottom">
            <div class="tit">产品优势：</div>
            <div class="info">
              <div class="tit">【极速贷款】</div>
              <div>一分钟申请，审核通过，当天放款，无需等贷</div>
            </div>
            <div class="info">
              <div class="tit">【精准推荐】</div>
              <div>超多贷款，海量产品任你挑选，总有一个适合你</div>
            </div>
            <div class="info">
              <div class="tit">【额度灵活】</div>
              <div>多种额度，解决不同贷款需求</div>
            </div>
            <div class="info">
              <div class="tit">【操作简单】</div>
              <div>页面简洁，身份证就能贷款，申请攻略一目了然</div>
            </div>
            <div class="info">
              <div class="tit">【全面覆盖】</div>
              <div>支持上班族，大学生自由职业等多种全体</div>
            </div>
            <div class="info">
              <div class="tit">【信用优惠】</div>
              <div>信用优惠活动，免息返利红包奖不停</div>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'

export default {
  data () {
    return {
      title: '关于我们'
    }
  },
  components: {
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll-view
    position: fixed
    top: 96px
    bottom: 0
  .about-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .tit
      font-size: 28px
      color: #000
    .about
      padding: 38px 32px
      box-sizing: border-box
      color: #666
      font-size: 28px
      font-family: PingFangSC-Regular
      line-height: 44px
      .top
        > p:not(:first-child)
          margin-top: 40px
      .middle, .bottom
        margin: 40px 0 40px 0
      .bottom
        .info
          display: flex
          margin-top: 40px
          > div
            flex: 1
          > div:first-child
            flex: 0 1 200px
</style>

<template>
  <div class="introduction-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="scroll-view">
      <cube-scroll>
        <div class="introduction">
          <div class="top">
            <p>
              91贷款王，一款帮助需要贷款用户申请贷款是的服务平台，根据平台所有用户对贷款产品的申请程度、下款成功率、手续费、还款等多维度评估各贷款产品，力求推荐优质的贷款产品给平台上的用户。操作简单，让你足不出户，轻轻松松贷款借钱，全面解决借钱问题。
            </p>
            <div class="mt-50">
              <p class="weight">产品推荐</p>
              <p>根据平台所有用户对贷款产品的申请程度、下款成功率、手续费、还款等多维度评估各贷款产品，排序越靠前代表平台上所有用户对该产品越认可</p>
            </div>
            <div  class="mt-50">
              <p class="weight">报告查询</p>
              <p>平台上提供借贷过程中，用户会被贷款机构拒绝的主要情况，包括多头风险、运营商风险、黑名单等报告查询服务，并给出相关分析。旨在让用户了解自身情况，优化自身风险点，践行用科学技术让用户在享受金融服务过程中体验更加。</p>
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
      title: '产品介绍'
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
  .introduction-wrapper
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
    .introduction
      padding: 38px 32px
      box-sizing: border-box
      color: #666
      font-size: 28px
      font-family: PingFangSC-Regular
      line-height: 44px
  .mt-50
    margin-top: 50px
  .weight
    font-weight: bold
</style>

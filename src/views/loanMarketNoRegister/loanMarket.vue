<template>
  <div class="loanMark">
    <nav-tab :menuList="menuList" @getListByProp='_getLoanProductList'/>
    <div class="loanMark-wrapper">
      <cube-scroll>
        <ul class="loan-list">
          <li v-for="(product, index) in loanProductList"
              :key="index"
              @click="apply($event)"
              v-track-event="{ category:'贷款超市', action:'click',opt_label: product.name }"
              :url="product.url"
              :title="product.name">
            <div class="top-part">
              <div class="top-part-left">
                <img v-lazy="product.icon" class="avatar" alt="">
                <div>
                  <div class="name">{{product.name}}</div>
                  <ul class="tag">
                    <li v-for="(label, idx) in product.label" :key="idx">
                      <span>{{ label }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="top-part-right">
                <span>
                  <animate-number
                    from="1"
                    :to=product.applyNum
                    from-color="#fff"
                    to-color="#4a90e2">
                  </animate-number>
                </span>人申请成功
              </div>
            </div>
            <div class="bottom-part">
              <div>
                <div>{{product.limitName}}</div>
                <div>
                  <span>
                    <animate-number
                      from="1"
                      :to=product.limit
                      from-color="#fff"
                      to-color="#ef6826">
                    </animate-number>
                  </span><span>元</span></div>
              </div>
              <div>
                <div>{{product.periodName}}</div>
                <div>
                  <animate-number from="1" :to=product.periodMin></animate-number>
                  <span>-</span>
                  <animate-number from="1" :to=product.periodMax></animate-number>
                  <span>天</span>
                </div>
              </div>
              <div>
                <div>参考{{product.rateName}}</div>
                <div>
                  <animate-number from="0.0" :to=product.rate :formatter="formatter"></animate-number>
                  %
                </div>
              </div>
            </div>
            <div class="loan-tip" v-if="product.describe">
              <span>{{product.describe}}</span>
            </div>
          </li>
        </ul>
        <div class="nice-loan-tip">
          <span>更多下载口子持续上线中...</span>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navTab from 'components/navTab/navTab'
import { getLoanProductList } from 'api/loanProduct'

export default {
  data () {
    return {
      tabClick: false,
      loanProductList: {},
      menuList: [
        {
          name: '贷款额度',
          isSubShow: false,
          subItems: [
            {
              name: '金额不限'
            },
            {
              name: '2000以下',
              prop: {
                limitMax: 2000
              }
            },
            {
              name: '2000-5000',
              prop: {
                limitMax: 5000,
                limitMin: 2000
              }
            },
            {
              name: '5000-10000',
              prop: {
                limitMax: 10000,
                limitMin: 5000
              }
            },
            {
              name: '10000以上',
              prop: {
                limitMin: 10000
              }
            }
          ]
        },
        {
          name: '贷款期限',
          isSubShow: false,
          subItems: [
            {
              name: '全部期限'
            },
            {
              name: '1个月以下',
              prop: {
                periodMax: 30,
                periodMin: 0
              }
            },
            {
              name: '1-3个月',
              prop: {
                periodMax: 90,
                periodMin: 30
              }
            },
            {
              name: '3-6个月',
              prop: {
                periodMax: 180,
                periodMin: 90
              }
            },
            {
              name: '6-12个月',
              prop: {
                periodMax: 360,
                periodMin: 180
              }
            },
            {
              name: '1年以上',
              prop: {
                periodMin: 360
              }
            }
          ]
        },
        {
          name: '贷款利率',
          isSubShow: false,
          subItems: [
            {
              name: '利率不限'
            },
            {
              name: '由低到高',
              prop: {
                orderByDesc: 'false',
                orderByName: 'rate'
              }
            },
            {
              name: '由高到低',
              prop: {
                orderByDesc: 'true',
                orderByName: 'rate'
              }
            }
          ]
        }
      ]
    }
  },
  created () {
    this._getLoanProductList()
  },
  methods: {
    _getLoanProductList (e) {
      const params = {}
      if (e) {
        params.limitMax = e.target.getAttribute('limitMax')
        params.limitMin = e.target.getAttribute('limitMin')
        params.periodMax = e.target.getAttribute('periodMax')
        params.periodMin = e.target.getAttribute('periodMin')
        params.orderByDesc = e.target.getAttribute('orderByDesc')
        params.orderByName = e.target.getAttribute('orderByName')
      }
      this.loanProductList = {}
      getLoanProductList(params).then((res) => {
        this.loanProductList = res.data
      })
    },
    formatter: function (num) {
      return num.toFixed(1)
    },
    apply: function (e) {
      const title = e.currentTarget.getAttribute('title')
      const url = e.currentTarget.getAttribute('url')
      this.$router.push({
        name: 'externalPage',
        params: {
          title: title,
          url: url
        }
      })
    }
  },
  components: {
    navTab: navTab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .loanMark
    .loanMark-wrapper
      position: absolute
      top: 88px
      left: 0
      right: 0
      bottom: 98px
      overflow: hidden
    .loan-list
      background: $color-background
      > li:last-child
        border-bottom: 24px solid #f4f6f8
      > li
        padding: 0 32px
        box-sizing: border-box
        border-top: 24px solid #f4f6f8
        .top-part
          display: flex
          padding: 24px 0
          border-bottom-1px()
          .top-part-left
            font-size: 0
            > .avatar
              width: 64px
              height: 64px
              border-radius: 18px;
              display: inline-block
              vertical-align: top
            > div
              display: inline-block
              vertical-align: top
              margin-left: 24px
              .name
                font-size: $font-size-30
                color: #000
              .tag
                display: block
                margin-top: 14px
                display: flex
                align-items: center
                > li
                  padding: 5px 10px
                  margin-right: 12px
                  font-size:20px
                  font-family:PingFangSC-Regular
                  font-weight:400
                  color:rgba(30,97,202,1)
                  line-height:28px
                  background:rgba(236,236,236,1)
                  border-radius:4px
          .top-part-right
            flex: 1
            display: flex
            justify-content: flex-end
            align-items: center
            font-size: $font-size-24
            color: #9b9b9b
            span
              color: #4a90e2
        .bottom-part
          padding: 26px 0
          display: flex
          > div:first-child
            > div:nth-child(2)
              font-family: DINAlternate-Bold;
              font-size: $font-size-54
              color: #EF6826
              > span
                font-size: $font-size-32
                display: inline-block;
                vertical-align: text-bottom;
              > span:first-child
                font-size: $font-size-54
                vertical-align: sub;
          > div
            flex: 1
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            height: 84px
            font-size: $font-size-24
            color: #9b9b9b
            > div:nth-child(2)
              font-size: $font-size-32
              color: #000
    .nice-loan-tip
      font-size: $font-size-26
      color: #9b9b9b
      text-align: center
      padding: 36px 0
    .loan-tip
      width: 686px
      height: 36px
      line-height 36px
      background: #F6F6F6;
      border-radius: 8px;
      margin: 0 auto 22px
      padding-left: 21px
      box-sizing: border-box
      font-size: $font-size-22
      color: #9b9b9b
</style>

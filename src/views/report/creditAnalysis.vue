<template>
  <div class="creditAnalysis-wrapper">
    <nav-bar :title="title"></nav-bar>
    <div class="header">
      <div class="new-flash-warpper">
        <i class="icon-new-flash"></i>
        <div class="slide-loan-list">
          <cube-slide :data="loanCustList" direction="vertical" :showDots="false" :interval="2000">
            <cube-slide-item v-for="(item, index) in loanCustList" :key="index">
              <div class="slide-item">
                <span>{{item.name}}完成检测优化后，借款成功</span>
                <span class="randTime">{{item.randTime}}分钟前</span>
              </div>
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
    </div>
    <div class="input-wrapper">
      <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="submitHandler"
        @reset="resetHandler"
      ></cube-form>
      <div class="choose-protocol">
        <i class="icon icon-dagou" @click="chooseProtocol"></i>
        <div>
          我已阅读并同意
          <router-link tag="span" :to="{ name: 'reportProtocol' }">《信息收集授权协议》</router-link>
        </div>
      </div>
    </div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { addBd } from 'common/js/utils-app'
import { getLoanCustList } from 'api/loanProduct'

export default {
  data () {
    return {
      title: '网贷检测',
      loanCustList: [],
      validity: {},
      valid: undefined,
      model: {
        idCardName: '',
        idCardCode: '',
        telNo: ''
      },
      schema: {
        groups: [
          {
            fields: [
              {
                type: 'input',
                modelKey: 'idCardName',
                label: '姓名',
                props: {
                  placeholder: '请输入姓名'
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'idCardCode',
                label: '身份证',
                props: {
                  placeholder: '请输入身份证号'
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'telNo',
                label: '手机号',
                props: {
                  placeholder: '请输入手机号'
                },
                // validating when blur
                trigger: 'blur'
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  filters: {
    formatMoney (item) {
      return item / 100
    }
  },
  created () {
    this._getLoanCustList()
  },
  methods: {
    _getLoanCustList () {
      getLoanCustList().then(res => {
        this.loanCustList = res.data
        this.loanCustList.forEach(item => {
          item.randTime = Math.floor(Math.random() * 10 + 1)
        })
      })
    },
    fixIosBug () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    fixAndroidBug (e, tagName) {
      addBd('event', this.$refs[tagName].$attrs.eventId)
      setTimeout(function () {
        e.target.scrollIntoViewIfNeeded()
      }, 400)
    }
  },
  components: {
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}

.creditAnalysis-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;

  >.header {
    width: 100%;
    height: 316px;
    background: url('~images/creditAnalysis/bg-banner.png') no-repeat;
    background-size: cover;
    position: relative;

    .new-flash-warpper {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 686px;
      height: 80px;
      padding-left: 36px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 16px 0px rgba(152, 165, 209, 0.3);
      border-radius: 42px;
      box-sizing: border-box;

      .icon-new-flash {
        width: 36px;
        height: 37px;
        background-image: url('~images/creditAnalysis/broadcast.png');
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }

      .slide-loan-list {
        width: 560px;
        display: inline-block;
        vertical-align: middle;
        font-size: 28px;
        color: #4a4a4a;
        margin-left: 18px;
        height: 80px;
        line-height: 80px;

        .slide-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .randTime {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(178, 179, 181, 1);
        }
      }
    }
  }

  >.input-wrapper {
    margin: 92px 32px 36px 32px;
    padding: 48px 32px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 24px 0px rgba(152, 165, 209, 0.3);
    border-radius: 24px;
    border: 1px solid rgba(229, 237, 250, 1);

    .cube-input {
    }

    .choose-protocol {
      font-family: PingFangSC-Regular;
      color: #5D5D77;
      font-size: 0;

      > i {
        inline-block-direction();
        font-size: $font-size-32;
      }

      > div {
        inline-block-direction();
        margin-left: 12px;
        font-size: $font-size-24;
      }
    }
  }
}
</style>

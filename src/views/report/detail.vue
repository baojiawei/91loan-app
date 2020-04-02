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
      <div class="validator-item">
        <cube-input
          v-model="inputProps[0].text"
          :placeholder="inputProps[0].placeholder"
          :type="inputProps[0].type"
          :maxlength="inputProps[0].maxlength"
          :clearable="true"
          @blur="fixIosBug"
          ref="idCardName"
        >
          <template slot="prepend">姓名</template>
        </cube-input>
        <cube-input
          v-model="inputProps[1].text"
          :placeholder="inputProps[1].placeholder"
          :type="inputProps[1].type"
          :maxlength="inputProps[1].maxlength"
          :clearable="true"
          @blur="fixIosBug"
          ref="idCardCode"
        >
          <template slot="prepend">身份证</template>
        </cube-input>
        <cube-input
          v-model="inputProps[2].text"
          :placeholder="inputProps[2].placeholder"
          :type="inputProps[2].type"
          :maxlength="inputProps[2].maxlength"
          :clearable="true"
          @blur="fixIosBug"
          ref="telNo"
        >
          <template slot="prepend">手机号</template>
        </cube-input>
      </div>
      <div class="choose-protocol">
        <i class="check" @click="chooseProtocol"></i>
        <div>
          我已阅读并同意
          <router-link tag="span" :to="{ name: 'reportProtocol' }">《服务协议》</router-link>
        </div>
      </div>
    </div>
    <div class="desc1"></div>
    <div class="desc2"></div>
    <button class="bottom-btn" @click="queryReport">立即查询</button>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { getLoanCustList } from 'api/loanProduct'
import {
  checkPhone,
  checkCustName,
  checkIdCardCode
} from 'common/js/validator'

export default {
  data () {
    return {
      title: '网贷检测',
      loanCustList: [],
      chooseProtocolFlag: true,
      inputProps: [
        {
          placeholder: '请输入姓名',
          type: 'text',
          maxlength: 11,
          text: ''
        },
        {
          placeholder: '请输入身份证号',
          type: 'text',
          maxlength: 18,
          text: ''
        },
        {
          placeholder: '请输入手机号',
          type: 'text',
          maxlength: 11,
          text: ''
        }
      ]
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
      const _self = this
      getLoanCustList().then(res => {
        _self.loanCustList = res.data
        _self.loanCustList.forEach(item => {
          item.randTime = Math.floor(Math.random() * 10 + 1)
        })
      })
    },
    chooseProtocol (e) {
      if (e.target.className === 'check') {
        e.target.classList.remove('check')
        e.target.classList.add('uncheck')
        this.chooseProtocolFlag = false
      } else {
        e.target.classList.remove('uncheck')
        e.target.classList.add('check')
        this.chooseProtocolFlag = true
      }
    },
    queryReport () {
      if (!this.chooseProtocolFlag) {
        this.$createToast({
          txt: '请勾选服务协议',
          time: 2000,
          type: 'warn'
        }).show()
      }
      if (!checkCustName(this.inputProps[0].text, this.$refs.idCardName)) {
        return
      }
      if (!checkIdCardCode(this.inputProps[1].text, this.$refs.idCardCode)) {
        return
      }
      if (!checkPhone(this.inputProps[2].text, this.$refs.telNo)) {
        return
      }
      console.log('submit')
    },
    fixIosBug () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
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
    padding: 30px 32px 48px 32px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 24px 0px rgba(152, 165, 209, 0.3);
    border-radius: 24px;
    border: 1px solid rgba(229, 237, 250, 1);

    .cube-input {
      height: 93px;
      line-height: 93px;
      margin-bottom: 6px;
    }

    .cube-input::after {
      border: 1PX solid transparent;
      border-bottom: 1PX solid #e6e6e6;
    }

    .cube-input-field {
      text-align: right;
      font-size: 32px;
      padding: 0;
    }

    .cube-input-prepend {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(43, 45, 48, 1);
    }

    .choose-protocol {
      font-family: PingFangSC-Regular;
      color: #5D5D77;
      font-size: 0;
      margin-top: 38px;

      > .check {
        inline-block-direction();
        width: 24px;
        height: 25px;
        background: url('~images/creditAnalysis/check.png') no-repeat;
        background-size: cover;
      }

      > .uncheck {
        inline-block-direction();
        width: 24px;
        height: 25px;
        background: url('~images/creditAnalysis/uncheck.png') no-repeat;
        background-size: cover;
      }

      > div {
        inline-block-direction();
        margin-left: 12px;
        font-size: 24px;

        > span {
          color: rgba(80, 131, 247, 1);
        }
      }
    }
  }

  .desc1 {
    border-top: 12px solid #F4F6F8;
    border-bottom: 12px solid #F4F6F8;
  }

  >.bottom-btn {
    width: 100%;
    height: 98px;
    background: linear-gradient(90deg, rgba(57, 157, 250, 1) 0%, rgba(105, 102, 243, 1) 100%);
    position: fixed;
    bottom: 0;
    z-index: 1;
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
}
</style>

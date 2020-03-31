<template>
  <div class="member">
    <cube-scroll>
      <div class="header">
        <div class="user-info">
          <div class="user-info-left"></div>
          <div class="user-info-right">
            <div class="tel">13567174440</div>
            <div class="due-time">会员于2020-03-20到期</div>
          </div>
        </div>
      </div>
      <div class="new-flash-warpper">
        <i class="icon-new-flash"></i>
        <div class="slide-loan-list">
          <cube-slide :data="loanCustList" direction="vertical" :showDots="false" :interval="2000">
            <cube-slide-item v-for="(item, index) in loanCustList" :key="index">
              <div class="slide-item">{{item.name}}{{item.telNo}}开通黑钻会员</div>
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
      <div class="middle-content-wrapper">
        <div class="title title1"></div>
        <ul class="financial-service-list">
          <li>
            <div class="left-part">
              <img src="./images/icon1.png" alt />
            </div>
            <div class="right-part">
              <div class="name">会员产品</div>
              <div class="desc">50+专属产品可申请</div>
            </div>
          </li>
          <li>
            <div class="left-part">
              <img src="./images/icon2.png" alt />
            </div>
            <div class="right-part">
              <div class="name">审核加速</div>
              <div class="desc">专属渠道下款更快</div>
            </div>
          </li>
          <li>
            <div class="left-part">
              <img src="./images/icon3.png" alt />
            </div>
            <div class="right-part">
              <div class="name">信用卡代偿</div>
              <div class="desc">信用卡还款优先</div>
            </div>
          </li>
          <li>
            <div class="left-part">
              <img src="./images/icon4.png" alt />
            </div>
            <div class="right-part">
              <div class="name">信用卡免费申请</div>
              <div class="desc">超高额度在线申请</div>
            </div>
          </li>
          <li>
            <div class="left-part">
              <img src="./images/icon5.png" alt />
            </div>
            <div class="right-part">
              <div class="name">信用分析</div>
              <div class="desc">多头黑名单查询 权威报告解读</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="middle-content-wrapper">
        <div class="title title2"></div>
        <ul class="entertainment-list">
          <li>
            <div class="bg bg1">
              <div class="corner">即将上线</div>
              <div class="tips">话费充值立减10元</div>
            </div>
            <button>去充值</button>
          </li>
          <li>
            <div class="bg bg2">
              <div class="corner">即将上线</div>
              <div class="tips">视频会员立减10元</div>
            </div>
            <button>去充值</button>
          </li>
          <li>
            <div class="bg bg3">
              <div class="corner">即将上线</div>
              <div class="tips">专属小说立减10元</div>
            </div>
            <button>去充值</button>
          </li>
        </ul>
      </div>
      <div style="height:100px;"></div>
    </cube-scroll>
    <div class="bottom-btn">
      <div class="before"></div>
      <div class="btn-left">
        <div>
          <div class="price">
            <span class="discount">
              <span>￥</span>20
              <span>/月</span>
            </span>
            <img src="./images/corner.png" alt />
            <span class="original">原价￥30</span>
          </div>
        </div>
      </div>
      <div class="btn-right">立即开通</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getLoanCustList } from 'api/loanProduct'
export default {
  data () {
    return {
      loanCustList: []
    }
  },
  created () {
    this._getLoanCustList()
  },
  methods: {
    _getLoanCustList () {
      getLoanCustList().then(res => {
        this.loanCustList = res.data
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.member {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .header {
    width: 750px;
    height: 338px;
    background: url('./images/bg-banner-open.png') no-repeat;
    background-size: cover;
    padding-top: 142px;
    box-sizing: border-box;

    .user-info {
      width: 690px;
      height: 201px;
      border: 1px solid transparent;
      margin: 0 auto 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 45px;
      box-sizing: border-box;

      > .user-info-left {
        width: 124px;
        height: 124px;
        background: url('./images/user.png') no-repeat;
        background-size: cover;
        position: relative;

        > img {
          display: block;
          width: 32px;
          height: 32px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      > .user-info-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 120px;
        margin-left: 30px;
        font-family: PingFangSC-Semibold, PingFang SC;

        > .tel {
          font-size: 42px;
          font-weight: 600;
          color: rgba(23, 25, 29, 1);
        }

        > .due-time {
          font-size: 26px;
          font-weight: 400;
          color: rgba(133, 116, 105, 1);
        }
      }
    }
  }

  .new-flash-warpper {
    width: 100%;
    height: 80px;
    padding-left: 40px;
    background: #ffffff f;
    box-sizing: border-box;

    .icon-new-flash {
      width: 36px;
      height: 37px;
      background-image: url('./images/broadcast.png');
      background-size: 100% 100%;
      display: inline-block;
      vertical-align: middle;
    }

    .slide-loan-list {
      width: 480px;
      display: inline-block;
      vertical-align: middle;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(43, 45, 48, 1);
      margin-left: 30px;
      height: 80px;
      line-height: 80px;
    }
  }

  .middle-content-wrapper {
    border-top: 12px solid #F4F6F8;

    .title {
      width: 440px;
      height: 34px;
      margin: 24px auto 24px;
    }

    .title1 {
      background: url('./images/title1.png') center center no-repeat;
      background-size: cover;
    }

    .title2 {
      background: url('./images/title2.png') no-repeat;
      background-size: cover;
    }

    .financial-service-list {
      margin: 0 32px 28px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        display: flex;
        align-items: center;
        margin: 0 0 20px 0;
        padding: 0 16px;
        box-sizing: border-box;
        width: 334px;
        height: 156px;
        background: rgba(245, 237, 232, 1);
        border-radius: 8px;

        &:last-child {
          flex: 1;
          justify-content: unset;
        }

        img {
          width: 80px;
          height: 80px;
        }

        .right-part {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 68px;
          margin-left: 12px;
          font-family: PingFangSC-Medium, PingFang SC;

          .name {
            font-size: 30px;
            font-weight: 500;
            color: rgba(55, 55, 55, 1);
            line-height: 26px;
          }

          .desc {
            font-size: 24px;
            font-weight: 400;
            color: rgba(182, 133, 104, 1);
            line-height: 20px;
            white-space: nowrap;
          }
        }
      }
    }

    .entertainment-list {
      margin: 0 32px 28px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        width: 218px;
        height: 280px;
        border-radius: 8px;
        border: 1px solid rgba(225, 229, 237, 1);
        display: flex;
        flex-direction: column;
        align-items: center;

        .bg {
          width: 218px;
          height: 200px;
          margin-bottom: 12px;
          position: relative;

          .corner {
            width: 105px;
            padding: 6px 12px;
            text-align: center;
            background: linear-gradient(90deg, rgba(240, 222, 197, 1) 0%, rgba(223, 190, 164, 1) 100%);
            border-radius: 0px 0px 8px 8px;
            margin: 0 auto;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 49, 46, 1);
          }

          .tips {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(76, 76, 76, 1);
            position: absolute;
            bottom: 13px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }
        }

        .bg1 {
          background: url('./images/entertainment1.png') no-repeat;
          background-size: cover;
        }

        .bg2 {
          background: url('./images/entertainment2.png') no-repeat;
          background-size: cover;
        }

        .bg3 {
          background: url('./images/entertainment3.png') no-repeat;
          background-size: cover;
        }

        button {
          width: 136px;
          height: 48px;
          background: linear-gradient(138deg, rgba(91, 91, 91, 1) 0%, rgba(51, 51, 51, 1) 100%);
          border-radius: 31px;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(232, 210, 184, 1);
        }
      }
    }
  }

  .bottom-btn {
    width: 690px;
    height: 110px;
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100px;
    z-index: 1;
    display: flex;

    > .btn-left {
      width: 450px;
      height: 110px;
      display: inline-block;
      vertical-align: middle;
      background: linear-gradient(270deg, rgba(52, 54, 58, 1) 0%, rgba(23, 25, 29, 1) 100%);
      border-radius: 100px 0px 0px 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      > div {
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        > .price {
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(229, 201, 176, 1);
          display: flex;
          align-items: flex-end;

          > img {
            width: 119px;
            height: 36px;
          }

          > .discount {
            font-size: 60px;

            > span {
              font-size: 34px;
            }
          }

          > .original {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(217, 174, 135, 1);
            text-decoration: line-through;
            margin-left: 16px;
          }
        }
      }
    }

    > .btn-right {
      width: 240px;
      height: 110px;
      display: inline-block;
      vertical-align: middle;
      background: linear-gradient(270deg, rgba(240, 222, 197, 1) 0%, rgba(223, 190, 164, 1) 100%);
      border-radius: 0px 100px 100px 0px;
      font-size: 36px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 49, 46, 1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

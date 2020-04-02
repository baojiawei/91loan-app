<template>
  <div class="report-detail-wrapper">
    <nav-bar :title="title"></nav-bar>
    <div class="detail-wrapper">
      <cube-scroll>
        <div class="header">
          <div class="user-info-wrapper">
            <div class="avatar"></div>
            <div class="info">
              <div class="name">**梅</div>
              <div class="additional">
                <div>
                  <label>手机号码</label>
                  <span>135****8888</span>
                </div>
                <div>
                  <label>身份证号</label>
                  <span>320*************88</span>
                </div>
                <div>
                  <label>评估时间</label>
                  <span>2019-06-24 00:00:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <report-wrapper
          :title="reportWrapperTextArr[0].title"
          :advice="reportWrapperTextArr[0].advice"
        ></report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[1].title"
          :advice="reportWrapperTextArr[1].advice"
        ></report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[2].title"
          :advice="reportWrapperTextArr[2].advice"
        >
          <ul class="common-list">
            <li>
              <span class="circle"></span>
              <span>运营商认证：</span>
              <span>验证一致</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>在网时长：</span>
              <span>3～6个月</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>在网状态：</span>
              <span>正常</span>
            </li>
          </ul>
        </report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[3].title"
          :advice="reportWrapperTextArr[3].advice"
        >
          <ul class="common-list">
            <li>
              <span class="circle"></span>
              <span>查询主体是否命中失信黑名单：</span>
              <span>否</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>查询主体是否命中法院执行：</span>
              <span>否</span>
            </li>
          </ul>
        </report-wrapper>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import reportWrapper from './components/reportWrapper'

export default {
  data () {
    return {
      title: '报告详情',
      reportWrapperTextArr: [
        {
          title: '信用分',
          advice: '信用分越高，代表信用越好，贷款成功率越高。'
        },
        {
          title: '黑名单',
          advice:
            '高风险关注名单从身份证、手机号两个维度在我们的源高风险关注名单匹配。用户命中黑名单，贷款通过率低。'
        },
        {
          title: '运营商认证',
          advice:
            '贷款申请运营商认证必须验证一致，且在网状态正常，时常在12个月以上为佳。'
        },
        {
          title: '法院信息',
          advice:
            '若主体命中失信黑名单或命中法院执行，需要积极的与法院和借款方进行沟通协商，及时将所需的欠款还清，方可成功借款。'
        }
      ]
    }
  },
  created () {},
  methods: {},
  components: {
    navBar: navBar,
    reportWrapper: reportWrapper
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.report-detail-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 2;

  .detail-wrapper {
    position: fixed;
    top: 96px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .header {
    width: 100%;
    height: 408px;
    background: url('~images/detail/bg-top.png') no-repeat;
    background-size: cover;
    position: relative;

    .user-info-wrapper {
      position: absolute;
      top: 76px;
      left: 64px;
      display: flex;

      .avatar {
        width: 80px;
        height: 80px;
        background: url('~images/detail/avatar.png') no-repeat;
        background-size: cover;
      }

      .info {
        margin-left: 32px;

        .name {
          font-size: 44px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(43, 45, 48, 1);
          margin-bottom: 42px;
        }

        .additional {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;

          >div {
            margin-bottom: 28px;
          }

          label {
            color: rgba(102, 102, 102, 1);
          }

          span {
            margin-left: 24px;
            color: rgba(43, 45, 48, 1);
          }
        }
      }
    }
  }

  .common-list {
    > li {
      margin-bottom: 20px;

      >.circle {
        width: 10px;
        height: 10px;
        background: rgba(240, 114, 63, 1);
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;
      }

      > span:nth-child(2) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #9097A3;
      }

      > span:nth-child(3) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(43, 45, 48, 1);
      }
    }

    > li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

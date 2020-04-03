<template>
  <div class="report-wrapper">
    <div class="tit">
      <div class="tit-wrapper">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="advice">
      <div class="advice-tit">解读建议</div>
      <p class="advice-info">{{advice}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    advice: {
      type: String,
      default: ''
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.report-wrapper {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 40px;

  .tit {
    width: 100%;
    position: relative;

    > ::before {
      content: ' ';
      width: 8px;
      height: 32px;
      background: rgba(0, 81, 255, 1);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 40px;
    }

    .tit-wrapper {
      padding: 24px 40px 24px 64px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;

      > span:last-child {
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        color: rgba(43, 45, 48, 1);
        font-weight: 500;
      }
    }
  }

  .content {
    margin: 22px 32px 54px 32px;
  }

  .advice {
    margin: 0 32px;
    background: rgba(243, 243, 246, 1);
    border-radius: 4px;
    position: relative;

    .advice-tit {
      width: 130px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: url('~images/detail/bg-tip.png') no-repeat;
      background-size: cover;
      font-size: 24px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      top: -22px;
    }

    .advice-info {
      font-size: 24px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 36px;
      padding: 44px 28px 26px 28px;
    }
  }
}
</style>

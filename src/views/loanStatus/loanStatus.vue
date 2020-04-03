<template>
  <div class="loanStatus-wrapper">
    <nav-bar :title="title"></nav-bar>
    <cube-scroll>
      <div class="loan-comment">
        <loan-comment weight="3"></loan-comment>
      </div>
    </cube-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import loanComment from 'components/loanComment/loanComment'

export default {
  data () {
    return {
      title: '贷款申请'
    }
  },
  created () {},
  methods: {},
  components: {
    navBar: navBar,
    loanComment: loanComment
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.loanStatus-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 2;

  .loan-comment {
    margin: 44px 32px 50px 32px;
  }
}
</style>

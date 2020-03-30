<template>
  <div class="helpCenter-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="scroll-view">
      <cube-scroll>
        <div class="helpCenter">
          <div class="question_title">报告相关</div>
          <ul class="question_ul">
            <li>
              <collapse>
                <template slot="question">为什么要查询报告？</template>
                <template slot="answer">
                  <div>查询报告可以了解自身情况，方便后续做优化。</div>
                </template>
              </collapse>
            </li>
            <li>
              <collapse>
                <template slot="question">查询报告需要做哪些认证？</template>
                <template slot="answer">每种报告的认证资料均不一样，具体可查看查询时要求填写的查询项</template>
              </collapse>
            </li>
            <li>
              <collapse>
                <template slot="question">用户信息安全吗？</template>
                <template slot="answer">平台用户信息全部作加密处理，同时平台承诺用户授权信息仅用于用户指定用途，不做他用。</template>
              </collapse>
            </li>
          </ul>
          <div class="question_title">其他问题</div>
          <ul class="question_ul">
            <li>
              <collapse>
                <template slot="question">收不到验证码怎么办？</template>
                <template slot="answer">
                  1）检查是否被手机拦截；
                  <br/>
                  2）未拦截情况下多次收不到验证码，可尝试稍后再再试。
                </template>
              </collapse>
            </li>
            <li>
              <collapse>
                <template slot="question">如何修改手机号？</template>
                <template slot="answer">目前版本还不能更改手机号，后续版本更新中用户可在新版本中修改手机号。</template>
              </collapse>
            </li>
            <li>
              <collapse>
                <template slot="question">是否可以注销账户？</template>
                <template slot="answer">目前暂不支持注销账户。</template>
              </collapse>
            </li>
          </ul>
        </div>
      </cube-scroll>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import collapse from 'components/collapse/collapse'

export default {
  data () {
    return {
      title: '帮助中心'
    }
  },
  components: {
    navBar: navBar,
    collapse: collapse
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .scroll-view
    position: fixed
    top: 96px
    left: 0
    right: 0
    bottom: 0
  .helpCenter-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
  .question_ul li:first-child .question
    border-none()
</style>

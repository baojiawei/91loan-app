<template>
  <div class="circleProgress-wrapper">
    <svg
      style="transform: rotate(-90deg)"
      :width="width"
      :height="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad3" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0" stop-color="rgb(110,213,243)" />
          <stop offset="1" stop-color="rgb(21,111,251)" />
        </linearGradient>
      </defs>
      <circle
        :r="(width-radius)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke-width="radius"
        :stroke="backgroundColor"
        fill="none"
      />
      <circle
        ref="$bar"
        :r="(width-radius)/2"
        :cy="width/2"
        :cx="width/2"
        stroke="url(#grad3)"
        :stroke-width="radius"
        :stroke-linecap="isRound ? 'round' : 'square'"
        :stroke-dasharray="(width-radius)*3.14"
        :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100"
        fill="none"
      />
    </svg>
    <div class="count">
      <animate-number from="1" :to="count"></animate-number>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: [Number, String], // 圆的大小
    radius: [Number, String], // 进度条厚度
    barColor: String, // 进度条颜色
    backgroundColor: String, // 背景颜色,
    count: [Number, String], // 传入的分数
    totalCount: {
      // 一圈总分
      type: [Number, String],
      default: 750
    },
    isAnimation: {
      // 是否是动画效果
      type: Boolean,
      default: true
    },
    isRound: {
      // 是否是圆形画笔
      type: Boolean,
      default: true
    },
    id: {
      // 组件的id，多组件共存时使用
      type: [String, Number],
      default: 1
    },
    duration: {
      // 整个动画时长
      type: [String, Number],
      default: 1000
    },
    delay: {
      // 延迟多久执行
      type: [String, Number],
      default: 200
    },
    timeFunction: {
      // 动画缓动函数
      type: String,
      default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)'
    }
  },
  data () {
    return {
      idStr: `circle_progress_keyframes_${this.id}`
    }
  },
  computed: {
    progress () {
      return ((this.count / this.totalCount) * 100).toFixed()
    }
  },
  beforeDestroy () {
    // 清除旧组件的样式标签
    document.getElementById(this.idStr) &&
      document.getElementById(this.idStr).remove()
  },
  mounted () {
    if (this.isAnimation) {
      // 重复定义判断
      if (document.getElementById(this.idStr)) {
        console.warn('vue-circle-progress should not have same id style')
        document.getElementById(this.idStr).remove()
      }
      // 生成动画样式文件
      const style = document.createElement('style')
      style.id = this.idStr
      style.type = 'text/css'
      style.innerHTML = `
      .circleProgress-wrapper { width: ${this.width}px;height: ${this.width}px}
      @keyframes circle_progress_keyframes_name_${this.id} {
      from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
      to {stroke-dashoffset: ${((this.width - this.radius) *
        3.14 *
        (100 - this.progress)) /
        100}px;}}
      .circle_progress_bar${
        this.id
      } {animation: circle_progress_keyframes_name_${this.id} ${
        this.duration
      }ms ${this.delay}ms ${this.timeFunction} forwards;}`
      // 添加新样式文件
      document.getElementsByTagName('head')[0].appendChild(style)
      // 往svg元素中添加动画class
      this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.circleProgress-wrapper {
  position: relative;

  .count {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(43, 45, 48, 1);
  }
}
</style>

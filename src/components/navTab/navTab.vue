<template>
  <div class="navTab">
    <div class="top-tab">
      <div class="black" v-show="isBlackShow" @click.stop="closeTab"></div>
      <ul class="dropDown-menu">
        <li v-for="(item,index) in menuList" :key="index">
          <div @click="showToggle(item,index)" class="nav-title">
            <span>{{item.name}}</span>
            <i class="icon-down-arrow" :class="item.isSubShow? 'open': 'close'"></i>
          </div>
          <ul class="desc" :class="item.isSubShow? 'show': 'hide'" v-show="item.isSubShow">
            <li v-for="(subItem,index) in item.subItems" :key="index">
              <div v-bind="subItem.prop" @click="getListByProp($event)">{{subItem.name}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isBlackShow: false
    }
  },
  props: {
    menuList: {
      type: Array
    }
  },
  methods: {
    showToggle: function (item, ind) {
      this.menuList.forEach(i => {
        if (i.isSubShow !== this.menuList[ind].isSubShow) {
          i.isSubShow = false
        }
      })
      this.isBlackShow = item.isSubShow = !item.isSubShow
    },
    closeTab: function () {
      this.menuList.forEach(i => {
        i.isSubShow = false
      })
      this.isBlackShow = false
    },
    getListByProp: function (e) {
      this.closeTab()
      this.$emit('getListByProp', e)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  .black
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.1)
    z-index: 1

  .top-tab
    .dropDown-menu
      width: 750px
      height: 88px
      display: flex
      align-items: center
      position: fixed
      top: 0
      background: $color-background
      z-index: 9
      > li
        display block
        flex: 1
        text-align: center
        font-size: $font-size-30
        color: #4a4a4a
        .nav-title
          > span
            display: inline-block
            vertical-align: middle
          > i
            display: inline-block
            vertical-align: middle
            margin-left: 10px
        .desc
          position: absolute
          top: 88px
          left: 0
          right: 0
          line-height: 84px
          padding: 0 36px
          text-align: left
          box-sizing: border-box
          font-size: $font-size-28
          background: $color-background
          > li:not(:last-child)
            border-bottom-1px()

  .open {
    transform: rotate(-180deg);
    transition: transform 0.6s;
  }

  .close {
    transform: rotate(0deg);
    transition: transform 0.6s;
  }

  .show, .hide {
    -moz-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    -o-transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
  }

  .show {
    transform: scaleY(1);
    animation: showAnimation 0.5s ease-in-out;
    transition: max-height 1s ease-in-out;
  }

  .hide {
    transform: scaleY(0);
    animation: hideAnimation 0.4s ease-out;
    transition: max-height 0.6s ease-out;
  }

  @keyframes showAnimation {
    0% {
      transform: scaleY(0.1);
    }

    40% {
      transform: scaleY(1.04);
    }

    60% {
      transform: scaleY(0.98);
    }

    80% {
      transform: scaleY(1.04);
    }

    100% {
      transform: scaleY(0.98);
    }

    80% {
      transform: scaleY(1.02);
    }

    100% {
      transform: scaleY(1);
    }
  }

  @keyframes hideAnimation {
    0% {
      transform: scaleY(1);
    }

    60% {
      transform: scaleY(0.98);
    }

    80% {
      transform: scaleY(1.02);
    }

    100% {
      transform: scaleY(0);
    }
  }
</style>

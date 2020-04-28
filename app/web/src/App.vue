<template>
  <div id="app">

    <!-- 纵向Swiper -->
    <div ref="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 基本信息 -->
        <div class="swiper-slide">
          <BaseInfo />
        </div>
        <!-- 基本信息END -->

        <!-- 项目经历 -->
        <div class="swiper-slide">
          <Projects />
        </div>
        <!-- 项目经历END -->

        <!-- 作品展示 -->
        <div class="swiper-slide">
          <DemoCase />
        </div>
        <!-- 作品展示END -->
      </div>
    </div>
    <!-- 纵向SwiperEND -->

    <!-- 悬浮操作栏 -->
    <div class="fav">
      <!-- github -->
      <div class="fav-item" @click="gotoGitHub">
        <span class="fa fa-github"></span>
      </div>

      <div class="fav-item" @click="slidePrev">
        <span class="fa fa-sort-up"></span>
      </div>

      <div class="fav-item" @click="slideNext">
        <span class="fa fa-sort-down"></span>
      </div>
    </div>
    <!-- 悬浮操作栏END -->
  </div>
</template>

<script>
import Swiper from 'swiper'
import BaseInfo from './views/BaseInfo'
import Projects from './views/Projects'
import DemoCase from './views/DemoCase'

export default {
  name: 'App',
  components: {
    BaseInfo,
    Projects,
    DemoCase
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      const swiper = new Swiper(this.$refs.swiper, {
        direction: 'vertical',
        // 开启鼠标滚轮切换
        mousewheel: true
      })
      this.swiper = swiper
    },

    // 下一张
    slideNext() {
      this.swiper && this.swiper.slideNext()
    },

    // 上一张
    slidePrev() {
      this.swiper && this.swiper.slidePrev()
    },

    gotoGitHub() {
      window.open('https://github.com/leeui2020/resume.git', '_blank')
    }
  }
}
</script>

<style lang="scss">
@import '~swiper/css/swiper.css';
@import '~font-awesome/css/font-awesome.css';
@import './scss/main.scss';

.fav {
  $size: 36px;

  right: $spacing-sm;
  bottom: $spacing-sm;
  width: $size;
  position: fixed;
  z-index: 10;

  &-item {
    width: $size;
    height: $size;
    line-height: $size;
    text-align: center;
    cursor: pointer;
    border: 1px solid $border-color;
    border-radius: $radius-df;
    overflow: hidden;
    background-color: $bg-color;

    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-width: 0;
    }

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &.disabled {
      opacity: .5;
    }
  }
}
</style>

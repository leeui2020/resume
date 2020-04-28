<template>
  <div class="content">
    <div class="content-caption">个人作品</div>
    <div class="democase">
      <div class="democase-item" v-for="(v, k) of democase" :key="k">
        <img class="democase-image" :src="v.image" />
        <div class="democase-title">{{ v.title }}</div>
        <a :href="v.link" class="democase-action fa fa-external-link"></a>
      </div>
    </div>
  </div>
</template>

<script>
import DemoCase0 from '@/assets/democase_0.png'
import DemoCase1 from '@/assets/democase_1.png'
import DemoCase2 from '@/assets/democase_2.png'
import DemoCase3 from '@/assets/democase_3.png'

export default {
  name: 'DemoCase',
  data() {
    return {
      democase: [
        {
          title: '经典扫雷游戏',
          image: DemoCase0,
          link: 'https://saolei.game.leexiaohui.top/'
        },
        {
          title: '网络名片',
          image: DemoCase1,
          link: 'https://lixiaohui2019.gitee.io/buscard/'
        },
        {
          title: '批量图片裁剪工具',
          image: DemoCase2,
          link: 'https://lixiaohui2019.gitee.io/demo20200411/'
        },
        {
          title: '物理跟踪插件',
          image: DemoCase3,
          link: 'https://wuliu.leexiaohui.top/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: $spacing-lg;

  &-caption {
    font-size: $text-xl;
    font-weight: 600;
    text-align: center;
    padding: $spacing-lg 0;
  }
}

.democase {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  &-item {
    width: calc(100% / 3 - #{$spacing-df * 2});
    margin: $spacing-df;
    position: relative;
    border: 1px solid $border-color;
    border-radius: $radius-df;
    overflow: hidden;
    position: relative;
  }

  &-image {
    width: 100%;
  }

  &-title {
    line-height: 40px;
    text-align: center;
  }

  &-action {
    right: $spacing-sm;
    bottom: $spacing-sm;
    position: absolute;
    text-decoration: none;
    color: $text-color-dark;
    font-size: $text-sm;
  }
}
</style>

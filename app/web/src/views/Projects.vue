<template>
  <div class="content">
    <div class="content-caption">项目经历</div>
    <div class="project">
      <div class="project-item" v-for="(v, k) of projects" :key="k">
        <div class="project-type">{{ v.type }}</div>
        <div class="project-content" v-html="v.description.join('<br>')" />
        <div class="project-title">{{ v.title }}</div>
        <div class="project-date">{{ v.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          type: '前端',
          date: '2019.08 - 2020.01',
          title: '汽车竞拍平台',
          description: [
            '1. 负责前端部分开发工作；',
            '2. 参与项目讨论，接口设计。'
          ]
        },
        {
          type: '全栈',
          date: '2019.04 - 2019.05',
          title: '门店预约系统',
          description: [
            '1. 技术选型：uniapp + eggjs + mongodb；',
            '2. 负责项目规划、接口设计；',
            '3. 负责数据库设计、后台服务搭建；',
            '4. 负责前端部分工作。'
          ]
        },
        {
          type: '全栈',
          date: '2018.07 - 2018.08',
          title: '线上充值系统',
          description: [
            '1. 技术选型：vue + express + mongodb；',
            '2. 负责项目规划、接口设计；',
            '3. 负责数据库设计、后台服务搭建；',
            '4. 负责前端部分工作。'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: $spacing-xl;

  &-caption {
    font-size: $text-xl;
    font-weight: 600;
    text-align: center;
    padding: $spacing-xl 0;
    margin-bottom: $spacing-xl;
  }
}

.project {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &-item {
    width: calc(100% / 3 - #{$spacing-sm * 2});
    margin: $spacing-sm;
    border-radius: $radius-df;
    border: 1px solid $border-color;
    overflow: hidden;
    padding-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 400px) {
      width: 100%;
      margin: 0;
      margin-bottom: $spacing-df;
    }
  }

  &-type {
    top: $radius-df;
    left: 0;
    font-size: $text-sm;
    background-color: $color-primary;
    color: $text-color-inverse;
    position: absolute;
    line-height: 24px;
    padding: 0 $spacing-sm;
  }

  &-date {
    top: $radius-df;
    right: $radius-df;
    color: $color-label;
    position: absolute;
    font-size: $text-sm;
  }

  &-content {
    flex: 1;
    height: 0;
    padding: $spacing-df;
    line-height: 1.5;
  }

  &-title {
    margin: 0 $spacing-xl;
    text-align: center;
    line-height: 40px;
    border-top: 1px solid $border-color;
  }
}
</style>

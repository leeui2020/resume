<template>
  <div class="content">
    <img src="~@/assets/avatar.png" class="content-avatar" alt="橙续缘">
    <div class="job">橙续缘(前端工程师)</div>

    <!-- 技能标签 -->
    <div class="skill">
      <div class="skill-item" v-for="(v, k) of skills" :key="k">
        <div class="skill-text">{{ v[0] }}</div>
        <div class="skill-score">{{ v[1] }}</div>
      </div>
    </div>
    <!-- 技能标签END -->

    <div class="table">
      <div class="table-item" v-for="(v, k) of info" :key="k">
        <div class="table-label">{{ v.label }}</div>
        <div class="table-value">{{ v.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseInfo',
  data() {
    return {
      // 基本信息
      info: [
        { label: '姓名', value: '李晓辉' },
        { label: '生日', value: '1997/10/16' },
        { label: '住所', value: '深圳南山区' },
        { label: '联系', value: '13560784981(手机/微信)' },
        { label: '邮箱', value: '1287338537@qq.com' },
        { label: '学历', value: '大专' }
      ],

      // 技能标签
      skills: [
        ['vue', '✔'],
        ['uniapp', '✔'],
        ['node.js', '✔']
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: $spacing-df;

  &-avatar {
    width: $avatar-size;
    height: $avatar-size;
    border-radius: $radius-df;
  }
}

// 展示信息
.table {
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  margin-top: $spacing-xl;

  &-item {
    width: 100%;
    padding: $spacing-sm;

    @media screen and (min-width: 400px) {
      width: 50%;
    }

    @media screen and (min-width: 800px) {
      width: calc(100% / 3);
    }

    @media screen and (max-width: 400px) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .table-label {
        margin: 0;
      }
    }
  }

  &-label {
    color: $color-label;
    font-size: $text-sm;
    margin-bottom: $spacing-xs;
  }
}

.job {
  margin-top: $spacing-xl;
  font-size: $text-xl;
  font-weight: 900;
}

.skill {
  display: flex;
  margin-top: $spacing-df;

  $height: 26px;
  $bg-text: rgb(94, 94, 94);
  $bg-score: rgb(60, 200, 30);

  &-item {
    display: flex;
    align-items: center;
    margin: 0 $spacing-xs;
    height: $height;
    font-size: $text-sm;
    border-radius: $radius-sm;
    overflow: hidden;
  }

  &-text {
    height: $height;
    line-height: $height;
    background-color: $bg-text;
    color: $text-color-inverse;
    padding: 0 $spacing-sm;
  }

  &-score {
    height: $height;
    line-height: $height;
    background-color: $bg-score;
    color: $text-color-inverse;
    padding: 0 $spacing-sm;
  }
}
</style>

<template>
  <div class="wrap" ref="wrapper">
    <el-form-item label="请选择文章">
      <ul>
        <li v-for="item in 10">
          <el-radio v-model="mediaSelectValue" :label="item">测试列表</el-radio>
        </li>
      </ul>
<!--      <span v-if="list.length<=0">暂无内容</span> -->
    </el-form-item>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mediaSelectValue: '',
      }
    },
    mounted() {
      //初始化获取元素样式值
      let heightCss = this.$refs.wrapper.clientHeight; // 1
      if (heightCss > 300) {
        this.$refs.wrapper.style.height = this.$refs.wrapper.style.height + 267 + 'px';
      }
    },
  }
</script>

<style scoped lang="scss">
  .wrap {
    background-color: #fff;
    overflow: auto;
  }
</style>

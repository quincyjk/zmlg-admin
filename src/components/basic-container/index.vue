<template>
  <div class="basic-container" :style="styleName">
    <el-card>
      <slot></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'basicContainer',
  props: {
    radius: {
      type: [Number],
      default: 10
    },
    background: {
      type: String
    }
  },
  computed: {
    styleName() {
      return {
        borderRadius: this.radius,
        background: this.background
      }
    }
  }
}
</script>

<style lang="scss">
.basic-container {
  margin: 10px;
  box-sizing: border-box;
  &--block {
    height: 100%;
    .el-card {
      height: 100%;
    }
  }
  .el-card {
    width: 100%;
  }
}
</style>

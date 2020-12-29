<template>
  <div class="filter_search">
    <div :class="[{'auto-height':isActive},'filter_search_item']">
      <slot></slot>
      <el-button class="open" type="warning" size="mini" v-show="categDataList.length>20" @click="handOpen()">展开</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      categDataList: Array
    },
    data() {
      return {
        isActive: false,
      }
    },
    methods: {
      handOpen() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter_search {
    background-color: #fff;

    .auto-height {
      transition: 0.3s;
      height: auto !important;
    }

    .filter_search_item {
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
      display: flex;
      white-space: nowrap;
      padding: 10px;
      position: relative;
      height: 45px;
      overflow: hidden;
      border-bottom: 1px solid #eee;
    }

    .open {
      position: absolute;
      right: 8px;
      top: 8px;
    }

  }
</style>

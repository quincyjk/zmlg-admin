<template>
  <div style="display: flex;">
    <span class="filter_search_title">{{categeTitle}}：</span>
    <ul class="filter_search_list ">
      <li :class="{current:isActive===null}" @click="handSelect(null,null,categeTitle)">全部</li>
      <li :class="{current:isActive===index}" v-for="(item,index) in categDataList" :key="index" @click="handSelect(index,item.name,categeTitle)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      categDataList: Array,
      categeTitle: String,
      tagSelect: String,
    },
    data() {
      return {
        isActive: null,
      }
    },
    mounted() {
    },
    methods: {
      handSelect(index, item, categeTitle) {
        this.isActive = index
        this.$emit('selectData', index, item, categeTitle)
      }
    },
    watch: {
      tagSelect(val) { //普通的watch监听
          if(val == '清空'){
            this.isActive = null
          }
        if(val == this.categeTitle){
          this.isActive = null
        }
      },

    }
  }
</script>

<style scoped lang="scss">
  .filter_search_title {
    font-size: 15px;
  }



  .filter_search_list {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-wrap: wrap;

    .current {
      background: #f60;
      color: #fff;
    }

    li {
      padding: 0 6px;
      font-size: 14px;
      line-height: 24px;
      height: 24px;
      color: #666;
      cursor: pointer;
      margin: 0 4px;
      box-sizing: border-box;
      margin-bottom: 5px;
      border-radius: 3px;
    }

    li:hover {
      background: #fdb8b8;
      color: #fff;
    }
  }
</style>

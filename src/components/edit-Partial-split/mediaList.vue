<template>
  <div class="wrap" ref="wrapper">
      <p class="title">
        已选媒体
         <span>总价：<span style="color: red;font-weight: bold;">{{price}}</span>元</span>
         <span style="margin-left: 20px;">当前可用余额不足支付<span style="color: red;font-weight: bold;">xxx</span>元,将无法成功发布稿件请为您的账号充值</span>
      </p>
      <div class="box-list">
        <el-tag size="medium"  style="margin-bottom: 10px;" v-for="item in mediaList">{{item.name}},<span style="color:red;">{{item.price}}元</span></el-tag>
      </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        mediaList:[]
      }
    },
    updated() {
      //初始化获取元素样式值
      let heightCss = this.$refs.wrapper.clientHeight; // 1
      if (heightCss > 300) {
        this.$refs.wrapper.style.height = this.$refs.wrapper.style.height + 267 + 'px';
      }
    },
    computed:{
      price(){
        var result = 0
        for(let i in this.mediaList){
          result += this.mediaList[i].price
        }
        return result
      }
    },
    mounted(){
      for(var i = 0; i<= 100 ;i++){
        var arr = {
          name:"今日头条",
          price:207
        }
        this.mediaList.push(arr)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap{
        background-color: #fff;
        overflow: auto;
    .title{
      font-size: 15px;
      padding: 10px;
    }
    .box-list{

    }
  }

</style>

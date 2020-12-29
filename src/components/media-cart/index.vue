<template>
  <div>
    <!-- 购物车导航 -->
    <div class="rightNav" >
      <div class="cartRight" @click="activeShow = false">
        <svg-icon icon-class="cart-k" class-name="card-panel-icon" />
        <span class="cart" >媒体清单</span>
        <span class="number">{{cartList.length}}</span>
      </div>
    </div>
    <!-- 购物车侧栏 -->
    <div class="webCartWrap" v-show="activeShow == false" @click="activeShow = true">
    </div>
    <div :class="[{'current':activeShow},'webCart']">
      <div class="oneKeyDel">
        <el-button size="mini" @click="handDeleteAll" type="danger">一键清空</el-button>
      </div>
      <ul class="cartList">
        <li v-for="item in cartList">
          <div class="titlePic">
            <span class="title">{{item.channel}}</span>
            <span class="titlePicMoney">{{item.member}}￥</span>
            <svg-icon icon-class="delete-k" style="float: right;cursor: pointer;" @click="handDeleteCartList(item)"
              class-name="card-panel-icon" />
          </div>
        </li>
      </ul>
      <div class="positionBottom">
        <span class="selected">已选媒体<span>{{cartList.length}}</span>个</span>
        <div class="exportBig">

          <span class="tianchong">
            <svg-icon icon-class="export-k" style="margin-right: 5px;" class-name="card-panel-icon" />导出报价</span>
          <span class="money totalmoney">金额:<span>￥{{price}}</span></span>
        </div>
        <div class="subMit" style="color:#FFF" @click="handNextStep">立即投放</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      cartList: Array
    },
    data() {
      return {
        activeShow: true,
      }
    },
    computed: {
      price() {
        let result = 0
        for (let i in this.cartList) {
          result += parseInt(this.cartList[i].member)
        }
        return result
      }
    },
    methods: {
      // 一键删除
      handDeleteAll() {
        this.$emit('handDeleteAll')
      },
      // 下一步
      handNextStep() {
        this.$emit('handNextStep')
      },
      // 单个删除
      handDeleteCartList(item) {
        this.$emit('handDeleteCartList',item)
      }

    }
  }
</script>

<style lang="scss" scoped>
  .webCartWrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
  }

  .webCart {
    position: fixed;
    top: 0;
    right: 0px;
    background: #fff;
    width: 350px;
    height: 100%;
    z-index: 99;
    box-shadow: 0 0 10px rgba(19, 148, 223, 0.5);
    transform: translate(0px, 0px);
    transition: all 0.3s ease;
    z-index: 1000;

    .oneKeyDel {
      height: 40px;
      line-height: 40px;
      text-align: right;
      padding: 0 10px;
    }

    .cartList {
      overflow: auto;
      display: block;
      height: 78%;
    }

    ul li .titlePic {
      padding: 10px;

      .title {
        font-size: 15px;
      }

      .titlePicMoney {
        font-weight: bold;
        color: red;
      }
    }

    .positionBottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 347px;
      background: #fff;
      z-index: 9;
      box-shadow: 0 -2px 5px rgba(255, 183, 183, 0.3);
    }

    .subMit {
      width: 327px;
      height: 40px;
      background: #d80808;
      border: none;
      margin: 10px 10px 20px;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      cursor: pointer;
    }

    .selected {
      border-bottom: 1px dashed #ccc;
      width: 100%;
      display: block;
      text-indent: 10px;
      line-height: 50px;

      span {
        font-weight: bold;
        color: #ff0000;
        margin: 0 3px;
        font-size: 16px;
      }
    }

    .exportBig {
      padding: 0 10px;
      line-height: 40px;
      overflow: hidden;
    }

    .tianchong {
      font-size: 14px;
      color: #333;
      cursor: pointer;
    }

    .money {
      float: right;
      font-size: 14px;
      color: #333;

      span {
        font-weight: bold;
        color: #ff0000;
        margin-left: 5px;
      }
    }
  }

  .webCart.current {
    transform: translateX(100%);
  }

  .rightNav {
    position: fixed;
    right: 0;
    top: 11%;
    width: 50px;
    background: #822626;
    box-shadow: 2px 0px 10px #058AFF;
    height: 80%;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    color: #fff;

    .cartRight {
      cursor: pointer;
      text-align: center;

      .cart {
        width: 30px;
        display: block;
      }

      .number {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        font-size: 12px;
        text-align: center;
        display: block;
        margin: 0 auto;
        background: #ce0505;
        color: #fff;
        line-height: 24px;
      }
    }

  }
</style>

<template>
  <aside style="background-color: #fff;margin-bottom: 0;">
    <p>
      接单赚钱啦！！！（媒体主入驻接单及审核相关问题可咨询 QQ:800131850）
    </p>
    <p>
      如果您有自营或第一手的媒体资源，可以申请加入平台资源库，接单赚钱!
    </p>
    <p>
      <span class="sign">注：报价要尽可能低，如果发现提供的媒体报价比其他同行高，平台将会把媒体删除下架，停止合作。</span>
    </p>
    <el-divider></el-divider>
    <el-row>
      <el-button><router-link to="/media/postWeMedia" >添加自媒体</router-link></el-button>
      <el-button type="primary"><router-link to="/media/postWeixinMedia" style="color: #fff;">添加微信公众账号</router-link></el-button>
      <el-button type="success"><router-link to="/media/postWeiboMedia" style="color: #fff;">添加微博账号</router-link></el-button>
      <el-button type="info"><router-link to="/media/postFriendMedia" style="color: #fff;">添加朋友圈账号</router-link></el-button>
      <el-button type="warning"><router-link to="/media/mediaQuotationSheet" style="color: #fff;">批量导入媒体报价表</router-link></el-button>
      <el-button type="danger"><router-link to="/media/setMediaTop" style="color: #fff;">设置媒体置顶</router-link></el-button>
    </el-row>
  </aside>
</template>

<script>
</script>

<style>
</style>

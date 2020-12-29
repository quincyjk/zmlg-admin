<template>
<div>
  <aside style="background-color: #fff;margin-bottom: 0;">
    <p>
      <span class="sign">2020国庆中秋放假安排：</span>10月1号平台客服休假1天，其余时间白天正常安排值班。放假期间部分媒体仍可接单，可自助提交订单。
    </p>
    <p>
      <span class="sign">1、本平台禁止投放内容包括：政治敏感话题、反动、负面维权、博彩、色情、虚假广告、黑稿等违法违规内容，否则后果自负甚至封号！</span>
    </p>
    <p>
      <span class="sign">2、使用本平台投放广告内容都将视为同意本协议</span>《平台使用协议》 <span class="sign">，发布违规内容被删除或封号，平台将不予退款。</span>
    </p>
    <p>
      3、当订单进度变成”已收稿，编辑发布中“状态时，不可修改、取消或删除。因此,请在”草稿状态“之前进行预览,确认好文章内容，再提交审核，否则发布成功后很难再修改。
    </p>
    <p>
      4、文章的发布时间大概1~2天，快的几分钟，一般当天出结果，有些媒体第二天才有结果甚至更长时间，具体的可以参考平台上实时统计的平均出稿速度”用时长“，周未如果不能发布的媒体，周一安排发布。
    </p>
  </aside>
  <aside style="background-color: #fff;border-top: 1px solid #eee;margin-bottom: 0;" v-show="showTypeColumn">
    <p>
      您会员账户[15875865540] 是代理商级别 进入代理商管理后台 | 自媒体接单平台 | 查看代理商收益政策 余额 <span class="sign">45.00</span>元 我要充值
    </p>
  </aside>
  <br>
</div>
</template>

<script>

  export default{
    props:{
      showTypeColumn:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
  }
</style>

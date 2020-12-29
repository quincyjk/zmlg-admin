<template>
 <div>
   <TipBoard :showTypeColumn="true"></TipBoard>
   <aside style="background-color: #fff;">
     全部回复    全部通知       有<span class="sign">0</span>条待处理    有<span class="sign">0</span>条处理中    有<span class="sign">0</span>新回复    有<span class="sign">0</span>紧急通知
   </aside>
   订单列表查询
 </div>
</template>

<script>
  import TipBoard from '@/components/TipBoard'
  export default {
    components: {
      TipBoard
    }
  }
</script>

<style>
</style>

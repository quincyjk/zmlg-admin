<template>
  <div>
    <p>付款过程有什么疑问，麻烦找客服专员帮您解决！</p>
    <el-tabs type="border-card">
      <el-tab-pane label="在线支付">
        <el-form ref="form" style="width: 500px;" :model="form" label-width="120px">
          <el-form-item>
            <img src="http://img.linkgou.com/images/alipay_logo.jpg" alt="">
          </el-form-item>
          <el-form-item label="充值金额">
            <div style="display: flex;">
              <el-input v-model="form.name"></el-input><span style="margin-left: 10px;">元</span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即充值</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="汇款机构">
        <div style="display: flex;">
          <div>
            <img width="200" src="http://img.linkgou.com/images/zhonghang.jpg" alt="">
              <div class="payment-card">
                  <div>
                    <p class="payment-card-tip"><span style="white-space: nowrap;">账号:</span>7185 6166 5177(开户行：中国银行 广州 锦城大厦支行)</p>
                    <p class="payment-card-tip"><span style="white-space: nowrap;">户名:</span>广州旭云信息科技有限公司（对公账号）</p>
                  </div>
              </div>
          </div>
          <div style="margin-left: 20px;">
            <img width="160" src="http://img.linkgou.com/images/alipay_logo.jpg" alt="">
              <div class="payment-card" style="background-color:  rgb(32 129 228);">
                  <div>
                    <p class="payment-card-tip"><span style="white-space: nowrap;">账号:</span>1275522625@qq.com</p>
                    <p class="payment-card-tip"><span style="white-space: nowrap;">户名:</span>广州旭云信息科技有限公司</p>
                  </div>
              </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="支付宝扫码支付" style="text-align: center;">
        <h3>扫描付款成功后请将截图通知客服入账</h3>
        <img width="400" src="http://img.linkgou.com/images/zfbqrcode.png" alt="">
        <p>需要微信付款的加微信</p>
         <p>微信号：18520022850 （请备注领告充值）	</p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .payment-card{
       width: 400px;
       height: 200px;
       border-radius: 5px;
       background: #bb1a1a;
       display: flex;
       padding: 20px;
       align-items: center;
       .payment-card-tip{
         font-size: 13px;
         color: #fff;
         display: flex;
       }
  }
</style>

<template>
  <div>
    <aside style="background-color: #fff;">
      <h3>代理商收益计算方式：</h3>
      <p>
        市场价 - 代理价=每篇稿收益；如： 市场价80元-代理价25元=收益55元。如果一个月发稿数量为500篇，您的收益为：500*55=27500元
        可换代理商域名网址和LOGO，本平台提供数据接口，具体事宜请与本公司工作人员联系
      </p>
      <img src="http://img.linkgou.com/images/logo.png" alt="">
      <img src="http://img.linkgou.com/images/oem_logo_demo.png" alt="">
    </aside>
    <aside style="background-color: #fff;">
      <h3>普通客户收益计算方式：</h3>
      <p>
        客户发稿每篇5元收益；如您介绍客户发1000篇，则收益是1000*5=5000元
      </p>
      <p>
        将本平台推广链接提供给客户自助发稿时才会产生数据。只要客户访问过此链接并注册充值发稿，系统将会跟踪统计此客户为您的业绩收益。
      </p>
      <p>
        推广链接：
      </p>
     <p>
      <div class="qrcode" ref="qrCodeUrl"></div>
     </p>
     <p>
       复制推广链接或二维码放在您公司自己网站上作为自助发稿平台入口，或QQ、微信、自媒体等网络媒体平台推广等等，您只需坐等收益就可以了。
     </p>
    </aside>
  </div>

</template>

<script>
import QRCode from 'qrcodejs2'
export default{
  data(){
    return{

    }
  },
  mounted(){
    this.creatQrCode();
  },
  methods:{
    creatQrCode() {
            var qrcode = new QRCode(this.$refs.qrCodeUrl, {
                text: 'http://www.baidu.com', // 需要转换为二维码的内容
                width: 100,
                height: 100,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            })
        },
  }
}


</script>

<style>
</style>

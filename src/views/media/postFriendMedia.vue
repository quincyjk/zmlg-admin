<template>
  <div>
    <p>扫描以下二维码，去绑定微信认证</p>
    <span id="login_container"></span>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {
      this.setWxerwma()
    },
    methods:{
       setWxerwma () {
            const s = document.createElement('script')
            s.type = 'text/javascript'
            s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
            const wxElement = document.body.appendChild(s)
            wxElement.onload = function () {
              var obj = new WxLogin({
                id: 'login_container', // 需要显示的容器id
                appid: 'wx72cc4f1d59d6acf3', // 公众号appid wx*******
                scope: 'snsapi_login', // 网页默认即可
                redirect_uri: encodeURIComponent('http://www.baidu.com'), // 授权成功后回调的url
                state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
                style: 'black', // 提供"black"、"white"可选。二维码的样式
                href: '' // 外部css文件url，需要https
              })
            }
          },
    }



  }
</script>

<style>
</style>

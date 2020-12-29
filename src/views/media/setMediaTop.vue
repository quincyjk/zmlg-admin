<template>
  <aside style="background-color: #fff;margin-bottom: 0;">
    <p>
      <span style="color: red;">置顶状态： 需要开通定制平台，媒体才可以置顶显示 </span>（我添加的媒体资源将在广告营销平台上显示，从几万条媒体数据中排序在第一页，提高订单交易量）
    </p>
    <p>
      代理商可以添加自己的媒体接单，开通定制平台后，广告营销平台都会默认开通媒体置顶显示，自己名下的广告主客户更容易选中媒体下单。
      为什么要定制代理平台
    </p>
    <h2>
      为什么要定制代理平台
    </h2>
    <p>
      1、可以突出自己公司的品牌、向客户展示自己的实力，更容易获取订单。
    </p>
    <p>
      2、可以发展自己的客户，让客户自己在线自己提交稿件，系统自动返回收益，代理商省时省力。
    </p>
    <p>
      3、代理商也可以添加自己的媒体接单，自己的媒体将会置顶优先展示，广告主客户更容易选中媒体下单。
    </p>
    <p>
      4、多重收益方式：媒体端接收源源不断的客户订单收益；自己拓展的广告客户收益；
    </p>
    <p>
      5、自己不需要懂技术，即可共享客户，共享媒体，永久拥有自己的创业平台（不需年费）。
    </p>
    <h2>
      平台部署流程
    </h2>
    <p>
      1、代理商自己需要准备域名、服务器空间，或者有能正常访问并可以使用FTP上传网页文件的网站也行。对服务器要求不高，只要能运行html网页就可以。

    </p>
    <p>
      2、提交申请资料通过审核后，点击下载"生成代理平台首页"保存在本地电脑。
    </p>
    <p>
      3、重命名刚才下载的网页文件（重命名可以是 index.html，rw.html，ruanwen.html等），也可用编辑器打开源码，根据自己需要修改title内容（非title部分不可修改）。
    </p>
    <p>
      4、把重命名后的网页上传到申请资料填写对应的代理商自己域名服务器空间，也可根据自己网站布局新建一个栏目存放此网页。
    </p>
    <p>
      5、上传成功后，代理商自己营销平台最终访问网址，需要反馈给后台工作人员绑定即可。
    </p>
    <p>
      定制平台示例：<a href="www.zmlgao.com">www.zmlgao.com</a>
    </p>
    <h2>
      代理负责人联系方式
    </h2>
    <p>微信：18520022850（备注开通代理平台）</p>
    <p>Q Q：2060610308（备注开通代理平台）</p>

    <p style="margin: 10px 0;">
      <el-button type="success"><router-link to="/oem/applicationAgency" style="color: #fff;">立即开通代理平台</router-link></el-button>
      <el-button type="info">生成代理平台首页</el-button>
    </p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </aside>


</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="方式一、定制平台OEM">
        <el-row>
          <el-button>立即开通代理平台</el-button>
          <el-button type="primary">下载PC端部署代码</el-button>
          <el-button type="success">下载移动端部署代码</el-button>
        </el-row>
        <br>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
        <aside >
          <p>提交申请资料后，请联系客服审核开通</p>
          <p>审核员微信号：18520022850（备注开通代理平台）</p>
          <p>审核员Q Q：800131850 （备注开通代理平台）</p>
          <p>定制代理平台示例：http://www.zmlgao.com</p>
          <h5>
            如果您是专业网络营销广告公关公司，有能力开发客户资源，可定制营销平台（功能包括展示代理商LOGO、域名、联系方式及收款账号等），此方式定制代理平台OEM，快捷方便，代理商无需懂技术。
          </h5>
          <h1>
            为什么要定制代理平台
          </h1>
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
            <p>
              5、自己不需要懂技术，即可共享客户，共享媒体，永久拥有自己的创业平台（不需年费）。
            </p>
            <h1>
              平台部署流程
            </h1>
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
              <p>
                5、上传成功后，代理商自己营销平台最终访问网址，需要反馈给后台工作人员绑定即可。
              </p>
        </aside>
      </el-tab-pane>
      <el-tab-pane label="方式二、使用API接口">
        <el-row>
          <el-button>立即开通代理平台</el-button>
          <el-button type="primary">下载PC端部署代码</el-button>
          <el-button type="success">下载移动端部署代码</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
        <br>
        <aside>
          <p>api接口密钥 apikey： <span style="color: red;">提交申请资料，审核通过后才会生成api接口密钥用于调API</span></p>
          <h5>
            使用API接口，代理商需要有较强技术团队，通过API接口读取媒体资源，开发自己的营销平台。
          </h5>
          <h5>
            API接口文档：领告营销平台http接口文档V1.0
          </h5>
          <h5>
            代理负责人联系方式
          </h5>
          <p>微信：18520022850（备注开通代理平台）</p>
          <p>Q Q：2060610308（备注开通代理平台）</p>
        </aside>
      </el-tab-pane>
    </el-tabs>
  </div>
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

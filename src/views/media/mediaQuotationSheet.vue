<template>
  <div>
    <mediaColumn></mediaColumn>
    <br>
    <el-tabs type="border-card">
      <el-tab-pane label="上传商业媒体">
        <div style="text-align: center;">
           <p>资源EXCEL数据格式(只支持2003 xls)</p>
          <img width="100%" src="http://www.linkgou.com/media_excel/media_excel.jpg" alt="">
          <p>请先下载资源格式模板，填好数据后再提交</p>
          <el-button type="primary">下载</el-button>
        </div>
        <UploadQuotationSheet></UploadQuotationSheet>
      </el-tab-pane>
      <el-tab-pane label="上传自媒体">
        <div style="text-align: center;">
           <p>资源EXCEL数据格式(只支持2003 xls)</p>
          <img width="100%" src="http://www.linkgou.com/wemedia_excel/media_excel.jpg" alt="">
          <p>请先下载资源格式模板，填好数据后再提交</p>
          <el-button type="primary">下载</el-button>
        </div>
          <UploadQuotationSheet></UploadQuotationSheet>
      </el-tab-pane>
      <el-tab-pane label="上传微信公众号媒体">
        <div style="text-align: center;">
           <p>资源EXCEL数据格式(只支持2003 xls)</p>
          <img width="100%" src="http://www.linkgou.com/weixin_excel/media_excel.jpg" alt="">
          <p>请先下载资源格式模板，填好数据后再提交</p>
          <el-button type="primary">下载</el-button>
        </div>
          <UploadQuotationSheet></UploadQuotationSheet>
      </el-tab-pane>
      <el-tab-pane label="上传微博媒体">

        <div style="text-align: center;">
          <p>资源EXCEL数据格式(只支持2003 xls)</p>
          <img width="100%" src="http://www.linkgou.com/weibo_excel/media_excel.jpg" alt="">
          <p>请先下载资源格式模板，填好数据后再提交</p>
          <el-button type="primary">下载</el-button>
        </div>
          <UploadQuotationSheet></UploadQuotationSheet>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import mediaColumn from '@/components/mediaColumn'
    import UploadQuotationSheet from '@/components/UploadQuotationSheet'
  export default {
    components: {
      mediaColumn,
      UploadQuotationSheet
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
</style>

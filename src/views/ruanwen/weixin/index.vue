<template>
  <div>
    <mediaList></mediaList>
    <br>
    <div style="background-color: #fff;padding: 0 10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="方式一：创建新的微博内容" name="first">
          <postWeixin v-if="activeName=='first'"></postWeixin>
        </el-tab-pane>
        <el-tab-pane label="方式二：从发布列表选择" name="second">
          <fromWeixinDraft v-if="activeName=='second'"></fromWeixinDraft>
        </el-tab-pane>
        <el-tab-pane label="方式三：提交WORD文档文案" name="three">
          <uploadWeixin v-if="activeName=='three'"></uploadWeixin>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import mediaList from '@/components/edit-Partial-split/mediaList'
  import postWeixin from '@/components/ruanwen/weixin/post_weixin'
  import fromWeixinDraft from '@/components/ruanwen/weixin/from_weixin_draft'
  import uploadWeixin from '@/components/ruanwen/weixin/upload_weixin'
  export default {
    components: {
      mediaList,
      postWeixin,
      fromWeixinDraft,
      uploadWeixin
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {

    }
  }
</script>

<style>
</style>

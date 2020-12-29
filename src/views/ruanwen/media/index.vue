<template>
  <div>
    <mediaList></mediaList>
    <br>
    <div style="background-color: #fff;padding: 0 10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="方式一：创建新的软文" name="first">
          <postRuanwen v-if="activeName=='first'"></postRuanwen>
        </el-tab-pane>
        <el-tab-pane label="方式二：从发布列表选择" name="second">
          <fromRuanwenDraft v-if="activeName=='second'"></fromRuanwenDraft>
        </el-tab-pane>
        <el-tab-pane label="方式三：提交WORD文档稿件" name="third">
          <uploadRuanwen v-if="activeName=='third'"></uploadRuanwen>
        </el-tab-pane>
        <el-tab-pane label="方式四：转载来源" name="fourth">
          <postLink v-if="activeName=='fourth'"></postLink>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import mediaList from '@/components/edit-Partial-split/mediaList'
  import postRuanwen from '@/components/ruanwen/media/post_ruanwen'
  import fromRuanwenDraft from '@/components/ruanwen/media/from_ruanwen_draft'
  import uploadRuanwen from '@/components/ruanwen/media/upload_ruanwen'
  import postLink from '@/components/ruanwen/media/post_link'
  export default {
    components: {
      mediaList,
      postRuanwen,
      fromRuanwenDraft,
      uploadRuanwen,
      postLink
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

<template>
  <div>
    <mediaList></mediaList>
    <br>
    <div style="background-color: #fff;padding: 0 10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="方式一：创建新的微博内容" name="first">
          <postWeibo v-if="activeName=='first'"></postWeibo>
        </el-tab-pane>
        <el-tab-pane label="方式二：从发布列表选择" name="second">
          <fromWeiboDraft v-if="activeName=='second'"></fromWeiboDraft>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import mediaList from '@/components/edit-Partial-split/mediaList'
  import postWeibo from '@/components/ruanwen/weibo/post_weibo'
  import fromWeiboDraft from '@/components/ruanwen/weibo/from_weibo_draft'
  export default {
    components: {
      mediaList,
      postWeibo,
      fromWeiboDraft,
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

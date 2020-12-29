<template>
  <div>
    <mediaList></mediaList>
    <br>
    <div style="background-color: #fff;padding: 0 10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="方式一：创建新的帖子" name="first">
          <postBbs v-if="activeName=='first'"></postBbs>
        </el-tab-pane>
        <el-tab-pane label="方式二：从发布列表选择" name="second">
          <fromBbsDraft v-if="activeName=='second'"></fromBbsDraft>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import mediaList from '@/components/edit-Partial-split/mediaList'
  import postBbs from '@/components/ruanwen/bbs/post_bbs'
  import fromBbsDraft from '@/components/ruanwen/bbs/from_bbs_draft'
  export default {
    components: {
      mediaList,
      postBbs,
      fromBbsDraft
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

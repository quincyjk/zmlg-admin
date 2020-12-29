<template>
  <div>
    <mediaList></mediaList>
    <br>
    <div style="background-color: #fff;padding: 0 10px;">
      <el-tabs v-model="activeName">
        <el-tab-pane label="方式一：直发图文" name="first">
          <postFriend v-if="activeName=='first'"></postFriend>
        </el-tab-pane>
        <el-tab-pane label="方式二：分享链接" name="second">
          <postFriendLink v-if="activeName=='second'"></postFriendLink>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import mediaList from '@/components/edit-Partial-split/mediaList'
  import postFriend from '@/components/ruanwen/friend/post_friend'
  import postFriendLink from '@/components/ruanwen/friend/post_friend_link'
  export default {
    components: {
      mediaList,
      postFriend,
      postFriendLink
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

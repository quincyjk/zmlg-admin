<template>
  <basic-container :class="['settings', { mobile: device == 'mobile' }]">
    <el-tabs ref="tabs" :tab-position="device == 'mobile' ? 'top' : 'left'" stretch>
      <el-tab-pane label="用户资料">
        <base-setting></base-setting>
      </el-tab-pane>
      <el-tab-pane label="安全设置" :lazy="true">
        <security-setting></security-setting>
      </el-tab-pane>
      <el-tab-pane label="通知设置" :lazy="true"> </el-tab-pane>
    </el-tabs>
  </basic-container>
</template>

<script>
import { mapState } from 'vuex'
import BaseSetting from './BaseSetting'
import SecuritySetting from './SecuritySetting'
export default {
  components: { BaseSetting, SecuritySetting },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      device: state => state.app.device,
      themeColor: state => state.settings.themeColor
    })
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.settings {
  ::v-deep.el-tabs__item {
    line-height: 56px;
    height: 56px;
    padding: 0 24px !important;
  }

  ::v-deep.el-tabs--left .el-tabs__item.is-left,
  .el-tabs--left .el-tabs__item.is-left {
    padding-right: 100px !important;
  }
  ::v-deep.el-tabs--left .el-tabs__nav-wrap.is-left {
    min-height: 500px !important;
  }
  ::v-deep.el-tabs__item.is-active {
    background-color: rgba(var(--rgbThemeColor), 0.1);
  }
  ::v-deep.el-card__body {
    padding: 20px 0px;
  }
}
.mobile ::v-deep.el-card__body {
  padding: 0px;
}
</style>

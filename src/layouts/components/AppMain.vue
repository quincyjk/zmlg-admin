<template>
  <section class="app-main">
    <div class="app-container">
      <transition name="fade-transform" mode="out-in">
        <div class="main-view" ref="mainView">
          <keep-alive :include="cachedViews">
            <router-view :key="key" />
          </keep-alive>
          <div v-if="$store.state.settings.showFooter" id="main-footer">
            <span v-html="$store.state.settings.footerTxt"></span>
            <span> ⋅ </span>
            <a href="http://www.beian.miit.gov.cn" target="_blank">{{ $store.state.settings.caseNumber }}</a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cachedViews
      },
      key() {
        return this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-main {
    /* 50= navbar  50  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: auto !important;
    height: 100%;
    position: absolute;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    background: #f0f2fc;
    clear: both;

    // .main-view {
    //   height: 100%;
    //   overflow:auto;
    // }
  }

  .fixed-header+.app-main {
    padding-top: 50px;
  }

  .hasTagsView {
    .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      min-height: calc(100vh - 84px);
    }

    .fixed-header+.app-main {
      padding-top: 84px;
    }
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>

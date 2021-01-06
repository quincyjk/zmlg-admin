<template>
  <div >
      <TipBoard></TipBoard>
      <div class="components-container">
        <el-row :gutter="20">
          <el-col :span="17">
            <div class="left-container-list">
              <p class="left-container-title">账号概况</p>
              <el-row :gutter="20">
                <el-col :span="6">
                  <router-link to="/account/setting"><div class="grid-content bg-purple">代理商级别 账号：15875865540</div></router-link>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
              </el-row>
            </div>
            <div class="left-container-list">
              <p class="left-container-title">账号概况</p>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
              </el-row>
            </div>
            <div class="left-container-list">
              <p class="left-container-title">账号概况</p>
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费财务报表</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">立即充值</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">代理商级别 账号：15875865540</div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">消费余额：45.00元</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="top-container" ref="offsetBottom">
              <p class="tipTitle">实时推荐</p>
              <template v-for="item in infoData">
                <div v-html="item.content"></div>
              </template>
            </div>
            <div class="editorBox">
              <markdown-editor ref="markdownEditor" v-model="content" :options="{hideModeSwitch:true,previewStyle:'tab'}"
                height="200px" />
              <button id="analytic" @click="getHtml">发送</button>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
  import splitPane from 'vue-splitpane'
  import TipBoard from '@/components/TipBoard'
  import MarkdownEditor from '@/components/MarkdownEditor'
  export default {
    components: {
      TipBoard,
      splitPane,
      MarkdownEditor
    },
    data() {
      return {
        infoData: [],
        content: '针对有会议同传需求的用户，推出百度AI同传会议版，支持线下、线上多种会议形式，提供双语字幕投屏、手机边听边看、行业术语定制、查看会议记录等功能；针对看视频、听音频、在线会议交流等场景，推出了百度AI同传助手，能够拾取电脑声音，实时生成同传双语字幕，辅助跨语言的信息获取和交流'
      }
    },
    methods: {
      getHtml() {
        var content = this.$refs.markdownEditor.getHtml();
        var title = this.$refs.markdownEditor.getHtml();
        if (!title) {
          this.$notify.error({
            title: '错误',
            message: '内容不能为空',
          });
          return
        }
        this.infoData.push({
          content: content
        })
        this.content = ''
        setTimeout(() => {
          this.$refs.offsetBottom.scrollTop = this.$refs.offsetBottom.scrollHeight
        }, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .components-container {
    position: relative;
    height: 100vh;
    margin: 0;
    overflow: auto;
  }

  .tipTitle {
    box-shadow: 0 4px 5px #ececec;
    margin-bottom: 13px;
    font-size: 15px;
  }

  .left-container-list {
    background-color: #fff;
    margin-bottom: 20px;
  }

  .left-container-title {
    font-size: 15px;
    margin: 0;
    padding: 20px;
    padding-bottom: 10px;
  }

  .top-container {
    background-color: #fff;
    padding: 10px;
    width: 100%;
    height: 400px;
    font-size: 14px;
    overflow: auto;
  }

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .row-bg {
    padding: 10px 0;
  }

  .editorBox {
    position: relative;
  }

  #analytic {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 50px;
    height: 30px;
    background-color: #ff7800;
    color: #fff;
    z-index: 1000000;
    outline: none;
    cursor: pointer;
    border: none;
  }

  #analytic:hover {
    background-color: #198bf7;
    transition: 0.3s;
  }
</style>

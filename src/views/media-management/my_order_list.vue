<template>
  <div>
    <mediaColumn></mediaColumn>
    <aside style="background-color: #fff;margin-bottom: 0;">
      <p>
        注意：
      </p>
      <p>
        1、禁止发布政治敏感话题、违法、违规、反动、负面维权新闻、博彩、色情、虚假广告等内容，请直接拒单！
      </p>
      <p>
        2、执行订单发布时，不要随便修改客户稿件内容，如有问题请联系平台客服跟客户确认再安排发布！
      </p>
      <p>
        3、朋友圈发布后请立即上传朋友圈截图以便广告主审核，及时收集点赞并上传点赞/评论截图（即先上传朋友圈执行图，再上传点赞/评论截图）。
      </p>
      <p>
        <span class="sign"> 4、回填的发布结果链接必须和媒体号/头条号（媒体名称）对应一致发布的，否则不予结算，并停止合作。</span>
      </p>
      <p>
        <span class="sign"> 5、媒体编辑接单后，超过两天没回填发布结果链接到平台，系统会自动取消订单。</span>
      </p>
    </aside>
    <aside style="background-color: #fff;">
      全部订单    有<span class="sign">0</span>条待执行    有<span class="sign">0</span>条执行中    有<span class="sign">0</span>条超时，需加急处理    有<span class="sign">0</span>条申请撤稿
    </aside>
    <el-tabs type="border-card">
      <el-tab-pane label="我的订单列表">
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="待收稿，未执行订单">
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="已收稿，未回链订单">
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="已申请撤稿订单">
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import mediaColumn from '@/components/mediaColumn'
  export default {
    components: {
      mediaColumn
    },
    data(){
      return{
        tableData:[]
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <foldWrap :categDataList="categDataList">
      <mediaSelect :categDataList="categDataList" :tagSelect="tagSelect" :categeTitle="categType1" @selectData="handSelectData"></mediaSelect>
    </foldWrap>
    <foldWrap :categDataList="categDataList">
      <mediaSelect :categDataList="categDataList" :tagSelect="tagSelect" :categeTitle="categType2" @selectData="handSelectData"></mediaSelect>
    </foldWrap>
    <foldWrap :categDataList="categDataList">
      <mediaSelect :categDataList="categDataList" :tagSelect="tagSelect" :categeTitle="categType3" @selectData="handSelectData"></mediaSelect>
    </foldWrap>
    <!-- 筛选条件 -->
    <div class="condition">
      <span class="condition-title">已选条件:</span>
      <el-tag v-for="item in tags" closable @close="handleClose(item)">
        {{item.name}}
      </el-tag>
      <span style="font-size: 14px;color: #888;font-weight: 400;margin-left: 10px;" v-if="tags.length<=0">暂时没有选择过滤条件</span>
      <el-button size="small" v-show="tags.length>0" @click="handEmpty">清空</el-button>
    </div>
    <!-- 更多条件 -->
    <div class="condition" style="height: auto;">
      <span class="condition-title">更多条件:</span>
      <div class="condition-item">
        <el-form :inline="true" :model="formInline" size="mini" class="demo-form-inline">
          <el-form-item label="联系方式">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="周末可发">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="百度收录">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="白名单媒体">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="百度权重">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            ~
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <br> <br>
          <el-form-item label="自媒体V认证">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <br>
    <aside style="background-color: #fff;margin-bottom: 0;">
      <p style="font-size: 13px;">
        注：因搜索引擎算法复杂且经常更新，有些客户稿件也有可能涉及敏感关键字，因此并不能保证每篇稿件都能收录，只能说一个收录概率；文章平均阅读量仅供参考，实际阅读量取决于稿件内容，平台不作保证。
      </p>
      <p style="font-size: 13px;">
        出稿平均时间：快的几分钟，一般当天出结果，有些稍慢需要一两天甚至更长时间；出稿率：稿件内容质量高且符合媒体频道要求出稿成功率就越高；
      </p>
    </aside>
    <el-table ref="multipleTable" v-loading="loading" :data="tableData" element-loading-text="拼命加载中" border fit
      highlight-current-row @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column prop="platform" label="平台" width="180" align="center">
      </el-table-column>
      <el-table-column prop="channel" label="媒体频道" width="180" align="center">
      </el-table-column>
      <el-table-column prop="address" label="分类/地区" align="center">
      </el-table-column>
      <el-table-column prop="member" label="会员价" align="center">
      </el-table-column>
      <el-table-column prop="agent" label="代理价" align="center">
      </el-table-column>
      <el-table-column prop="information" label="联系方式 [只供参考]
                  百度收录 [只供参考]" align="center">
      </el-table-column>
      <el-table-column prop="publishing" label="用时长 [只供参考]
   出稿率 [只供参考]" align="center">
      </el-table-column>
      <el-table-column prop="weight" label="百度权重
   [只供参考]" align="center">
      </el-table-column>
      <el-table-column prop="remarks" label="备注" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="warning" @click="handCollection(scope.$index)">{{scope.row.collection | collectionVlaue}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 20px;">
      <p style="font-size: 15px;">共有 {{count*5}}条记录</p>
      <el-pagination background layout="prev, pager, next" :total="count" @current-change="handCurrentPage">
      </el-pagination>
    </div>
    <mediaCart :cartList="cartList" @handNextStep="handNextStep" @handDeleteCartList="handDeleteCartList"
      @handDeleteAll="handDeleteAll"></mediaCart>


  </div>
</template>

<script>
  import {
    webSiteList
  } from '@/api/ruanwen'
  import foldWrap from '@/components/fold-wrap'
  import mediaSelect from '@/components/media-select'
  import mediaCart from '@/components/media-cart'
  export default {
    components: {
      foldWrap,
      mediaSelect,
      mediaCart
    },
    data() {
      return {
        loading: false,
        tableData: [],
        cartList: [],
        selectFrom: {
          page: 1,
          limit: 50,
        },
        count: 0,
        categDataList: [{
            name: '门户知名网站'
          },
          {
            name: '地方重点门户'
          },
          {
            name: '中央级媒体'
          }
        ],
        tags: [],
        tagSelect: '',
        categType1: '按媒体分类',
        categType2: '按位置分类',
        categType3: '知名大媒体',
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    filters: {
      collectionVlaue: function(value) {
        if (value == 1) {
          return '收藏'
        } else {
          return '取消收藏'
        }
      }
    },

    mounted() {

      // for (var i = 0; i <= 100; i++) {
      //   var arr = {
      //     name: '门户知名网站'
      //   }
      //   this.categDataList.push(arr)
      // }
      this.getDataList()
    },
    methods: {
      // 获取数据
      async getDataList() {
        var {
          data
        } = await webSiteList(this.selectFrom)
        this.tableData = data.items
        this.count = data.total / 5
      },
      // 勾选
      handleSelectionChange(val) {
        this.cartList = val
      },
      // 分页选择
      handCollection(index) {
        if (this.tableData[index].collection == 1) {
          this.tableData[index].collection = 2
        } else {
          this.tableData[index].collection = 1
        }
      },
      // 分页选择
      handCurrentPage(val) {
        this.selectFrom.page = val
        this.getDataList()
      },
      // 单个删除购物车列表
      handDeleteCartList(item) {
        this.cartList.forEach((val) => {
          if (val.id == item.id) {
            this.$refs.multipleTable.toggleRowSelection(val);
          }
        })
      },
      // 分类选择组件返回的值
      handSelectData(index, item, categType) {

        if (this.tags == '') {
          this.tags.push({
            name: item,
            categType: categType
          })
        }
        var promiseAll = []
        for (let i in this.tags) {
          var p = new Promise((resolve, reject) => {
            if (this.tags[i].categType == categType) {
              if (item == null) {
                this.tags.splice(i, 1)
              } else {
                this.tags[i].name = item
              }
            } else {
              resolve()
            }
          })
          promiseAll.push(p)
        }
        Promise.all(promiseAll).then(() => {
          this.tags.push({
            name: item,
            categType: categType
          })
        })
      },
      // 清空移除选择
      handEmpty() {
        this.tagSelect = '清空'
        this.tags = []
      },
      // 删除全部购物车列表
      handDeleteAll() {
        this.cartList = []
        this.$refs.multipleTable.clearSelection();
      },
      // 单个删除购物车列表
      handDeleteCartList(item) {
        this.cartList.forEach((val) => {
          if (val.id == item.id) {
            this.$refs.multipleTable.toggleRowSelection(val);
          }
        })
      },
      // 下一步
      handNextStep() {
        this.$router.push('/ruanwen/media')
      },
      // 单个移除选择
      handleClose(item) {
        this.tagSelect = item.categType
        setTimeout(() => {
          this.tagSelect = ''
        }, 100)
        this.tags.splice(this.tags.indexOf(item), 1)
      },
      onSubmit() {
        console.log('submit!');
      },


    }

  }
</script>
<style lang="scss" scoped>
  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 0;
  }

  .condition {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 10px;
    position: relative;
    height: 45px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    background-color: #fff;

    .condition-title {
      font-size: 15px;
      font-weight: 600;
    }

    .condition-item {
      margin: 0 10px;
    }
  }
</style>

<template>
  <div>
    <aside style="background-color: #fff;">
      <el-row>
        <el-button>系统默认</el-button>
        <el-button type="primary" @click="price_set_type=3">所有客户默认上浮比例</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">所有客户默认加价X元</el-button>
        <el-button type="warning">所有客户默认组合</el-button>
      </el-row>
    </aside>
    <aside style="background-color: #fff;" v-if="price_set_type==0">
      <p>当前设置使用的价格： <span style="color: red;">系统价格（默认）</span></p>
      <el-button type="primary">使用系统默认价格</el-button>
    </aside>
    <aside style="background-color: #fff;" v-if="price_set_type==3">
      <p>当前设置使用的价格： <span style="color: red;">系统价格（默认）</span></p>
      设置对所有客户价格上浮
      <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      <el-button type="primary">使用系统默认价格</el-button>
    </aside>
    <aside style="background-color: #fff;" v-if="price_set_type==4">
      <p>当前设置使用的价格： <span style="color: red;">系统价格（默认）</span></p>
      <el-button type="primary">使用系统默认价格</el-button>
    </aside>
    <aside style="background-color: #fff;" v-if="price_set_type==6">
      <p>当前设置使用的价格： <span style="color: red;">系统价格（默认）</span></p>
      <el-button type="primary">使用系统默认价格</el-button>
    </aside>
    <aside style="background-color: #fff;">
      <h3>提示建议：</h3>
      <p>一、设置对外价格需要认真考虑，如果您的客户是以高端企业群体为主，愿意支付较高的发稿费用，可以设置价格上浮比例高一些，主要是根据自身情况而定。一旦设置对外价格，请不要随便更换。</p>
      <p>二、如果系统所设置的价格都不符合您的要求，您可以帮客户代发稿，不需要提供本自助发稿后台给客户。</p>
      <p>三、代理商收益计算方式：自定义价格 - 代理价=收益；如发一篇 搜狐滚动代理价是25元，自定义价格是80元，则收益是80元-25元=55元。您发展的客户发稿越多您收益就越高</p>
    </aside>
    <el-tabs type="border-card">
      <el-tab-pane label="商业新闻媒体">


        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="媒体类型">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
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
          </el-form-item>
          <el-form-item label="百度权重">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>


        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="自媒体">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="媒体类型">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
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
          </el-form-item>
          <el-form-item label="百度权重">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>


        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="微博">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="媒体类型">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="参考粉丝量">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>


        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="微信公众号">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="媒体类型">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地区">
            <el-input v-model="formInline.name" placeholder="活动区域" />

          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>


        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="朋友圈">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item label="所在地">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item label="媒体名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="论坛">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="论坛名称">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item label=" 版块名称 ">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item label="分类关键字">
            <el-input v-model="formInline.name" placeholder="活动区域" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
                }],
                 value: '',
        price_set_type:0,
        tableData: [],
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods:{

    }
  }
</script>


<style>
</style>

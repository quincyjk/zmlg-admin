<template>
  <div>
    <mediaColumn></mediaColumn>
    <br>
    <el-tabs style="background-color: #fff;" v-model="activeName" type="card" >
      <el-tab-pane label="添加自媒体" name="first">
        <el-form ref="form" style="width: 500px;" :model="form" label-width="120px">
          <el-form-item label="自媒体平台">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="媒体号/头条号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="媒体ID">
                <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="媒体号案例">
                <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="媒体类别">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="媒体地区">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="参考粉丝量">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="参考阅读数">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="可接单内容类型">
            <el-radio-group v-model="form.resource">
              <el-radio label="文章 "></el-radio>
              <el-radio label="视频 "></el-radio>
              <el-radio label="动态（微头条） "></el-radio>
              <el-radio label="问答 "></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="最低报价">
           <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="周末是否可接单">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="是否官方自媒体">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="自媒体V认证">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="备注说明">
                <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </el-form>
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
    data() {
      return {
        activeName: 'first',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
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
                value: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <mediaColumn></mediaColumn>
    <br>
    <el-tabs style="background-color: #fff;" v-model="activeName" type="card" >
      <el-tab-pane label="添加微博账号" name="first">
        <el-form ref="form" style="width: 500px;" :model="form" label-width="120px">
          <el-form-item label="微博名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="微博主页">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="媒体平台">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="媒体类型">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="粉丝数/万">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="直发报价">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述">
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

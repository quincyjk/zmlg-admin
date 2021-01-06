<template>
  <div style="background-color: #fff; padding: 20px;">
    <h3>收益转入平台帐号余额   收益余额: <span style="color: red;">0</span> 元 </h3>
    <el-form style="width: 500px;" ref="form" :model="form" label-width="120px">
      <el-form-item label="平台账号：">
        123465789
      </el-form-item>
      <el-form-item label="转账金额：" >
        <div style="display: flex;">
          <el-input v-model="form.name"></el-input><span style="margin-left: 10px;">元</span>
        </div>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定提交</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          name: '',
        }
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

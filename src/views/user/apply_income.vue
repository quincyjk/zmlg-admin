<template>
  <el-tabs type="border-card">
    <el-tab-pane label="绑定支付宝">
      <el-form style="width: 500px;" ref="form" :model="form" label-width="120px">
        <el-form-item label="支付宝姓名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="支付宝账号：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
        <el-form-item>
          <el-button type="primary" >确定提交</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="绑定银行卡">
      <el-form style="width: 500px;" ref="form" :model="form" label-width="120px">
        <el-form-item label="银行及支行：">
            <el-input v-model="form.name"></el-input>
            （如：中国工商银行 广州 黄花岗科技支行）
          </el-form-item>
          <el-form-item label="银行卡户名：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="银行卡账号：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
        <el-form-item>
          <el-button type="primary" >确定提交</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>

  </el-tabs>
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

      }
    }
</script>

<style>
</style>

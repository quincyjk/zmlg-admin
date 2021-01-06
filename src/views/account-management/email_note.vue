<template>
  <aside style="background-color: #fff;">
    <p>    亲们，如果需要及时了解发布状态或通知，可在此设置邮件提醒</p>
    <br>
    <el-form ref="form" style="width: 500px;" :model="form" label-width="120px">
      <el-form-item label="接收邮件">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定修改</el-button>
        </el-form-item>
      </el-form>
  </aside>
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

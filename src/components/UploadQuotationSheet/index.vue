<template>
  <el-form :model="ruleForm" style="width: 500px;" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-form-item label="上传文件">
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="1" :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传2003 xls文件</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="备注信息">
      <el-input type="textarea"></el-input>
    </el-form-item>
      <el-form-item label="">
        <el-button type="success">上传</el-button>
        <el-button type="primary">返回</el-button>
      </el-form-item>

  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        fileList: []
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style>
</style>

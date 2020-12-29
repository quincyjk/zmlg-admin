<template>
  <el-form ref="ruleForm" :rules="ruanwenRules" style="width: 1200px;padding: 10px;" :model="ruanwen" label-width="120px">

    <el-form-item label="文章标题必填" prop="title">
      <el-input v-model="ruanwen.title"></el-input>
    </el-form-item>
<el-form-item label="稿件转载链接" prop="title">
      <el-input v-model="ruanwen.title"></el-input>
    </el-form-item>
    <el-form-item label="强调要求" prop="title">
      <template>
        <el-radio v-model="ruanwen.highlight" label="1">没要求，联系方式、网址（超链）及入口（即文章列表）可以不带，能带上的尽量带上（推荐）</el-radio>
        <el-radio v-model="ruanwen.highlight" label="2">按下面附言的要求处理（媒体根据自己审稿要求，可能会发布不成功）</el-radio>
      </template>
    </el-form-item>
    <el-form-item label="截稿时间" prop="title">
      <template>
        <el-radio v-model="ruanwen.expiry_date" label="2">默认工作日2天内完成（特殊情况请附言备注说明）</el-radio>
        <el-radio v-model="ruanwen.expiry_date" label="7">一周内完成</el-radio>
      </template>
    </el-form-item>
    <remarkItemInc :ruanwen="ruanwen"></remarkItemInc>
    <el-form-item>
      <el-button type="primary" @click="handSubmitForm('ruleForm')">提交稿件内容</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  import remarkItemInc from '@/components/remark-item-inc'
  export default {
    components: {
      Tinymce,
      remarkItemInc
    },
    data() {
      return {
        ruanwen: {
          title: '',
          remark: '',
          highlight: '1',
          expiry_date: '2',
        },
        content: '',
        ruanwenRules: {
          title: [{
            required: true,
            message: '请填写信息',
            trigger: 'blur'
          }, ]
        },
      }
    },
    methods: {
      // 提交表单
      handSubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      // 上传
      handleFlieChange(event) {
        var file = this.$refs.file.files[0]
        if (!file) {
          return
        }
        var reg = /^.+\.docx?$/;
        if (!reg.test(file.name)) {
          this.$message('只允许上传doc，docx文件');
          return
        }
        if (file.size > 1024 * 1024 * 5) {
          this.$message('上传文件不能大于5MB');
          return
        }
      }
    }
  }
</script>

<style>
</style>

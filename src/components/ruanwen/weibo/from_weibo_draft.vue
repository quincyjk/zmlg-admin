<template>
  <el-form ref="ruleForm" :rules="ruanwenRules" style="width: 1200px;padding: 10px;" :model="ruanwen" label-width="120px">
    <selectList></selectList>
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
  import MarkdownEditor from '@/components/MarkdownEditor'
  import remarkItemInc from '@/components/remark-item-inc'
    import selectList from '@/components/edit-Partial-split/selectList'
  export default {
    components: {
      MarkdownEditor,
      remarkItemInc,
      selectList
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
    mounted(){
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
    }
  }
</script>

<style>
</style>

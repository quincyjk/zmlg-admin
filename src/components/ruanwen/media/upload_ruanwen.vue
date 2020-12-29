<template>
  <el-form ref="ruleForm" :rules="ruanwenRules" style="width: 1200px;padding: 10px;" :model="ruanwen" label-width="120px">

    <el-form-item label="上传Word稿件" style="width: 500px;">
      <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-remove="handleRemove"
        :on-change="handleSelection" :file-list="fileList" :limit="1" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">上传我的文档</el-button>
        <div slot="tip" class="el-upload__tip">最多可同时上传 1 个文件，只允许上传 doc，docx 文件。</div>
      </el-upload>
      <span v-show="fileList.length<=0">还未选择要上传的WORD稿件</span>
    </el-form-item>
    <el-form-item label="文件上传">
      <template v-if="uploadName">
        <p >{{uploadName}}上传成功，继续往下面填写表单，然后提交给编辑审核 </p>
        <br>
      </template>
      <el-button type="success" :disabled="disabled" @click="submitUpload">开始上传</el-button>
    </el-form-item>
    <template v-if="uploadName">
      <el-form-item label="文章标题必填" prop="title">
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
    </template>
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
        fileList: [],
        disabled: true,
        uploadName: '',
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
      // 文件选取
      handleSelection(file,fileList) {

        if (!file) {
          this.fileList=[]
          return
        }
        var reg = /^.+\.docx?$/;
        if (!reg.test(file.name)) {
          this.fileList=[]
          this.$message('只允许上传doc，docx文件');
          return
        }
        if (file.size > 1024 * 1024 * 5) {
          this.fileList=[]
          this.$message('上传文件不能大于5MB');
          return
        }
        this.fileList.push(file)
      },
      // 上传文件
      submitUpload() {
        this.$refs.upload.submit();
      },
      // 删除文件
      handleRemove(file, fileList) {
        this.fileList = []
      },
    },
    watch:{
      fileList(val){
         if(val.length>0){
           this.disabled = false
         }else{
              this.disabled = true
         }
      }
    }
  }
</script>

<style>
</style>

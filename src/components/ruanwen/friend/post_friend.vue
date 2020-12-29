<template>
  <el-form ref="ruleForm" :rules="ruanwenRules" style="width: 1200px;padding: 10px;" :model="ruanwen" label-width="120px">
    <el-form-item label="上传WORD文档">
      <div style="position: relative;display: inline-block;">
        <el-button type="primary">上传WORD文档，即可在下面文章正文框自动上传图片并编辑内容</el-button>
        <input type="file" ref="file" style="position: absolute;width: 100%;height: 100%;left: 0;top: 0;opacity: 0;"
          @change="handleFlieChange">
      </div>
      <br>
      <span>只支持DOC,DOCX格式，建议使用谷歌、搜狗、360、火狐浏览器、IE10 以上。</span>
    </el-form-item>
    <el-form-item label="文章标题必填" prop="title">
      <el-input v-model="ruanwen.title"></el-input>
    </el-form-item>
	<el-form-item label="点评语" prop="title">
	  <el-input
	    type="textarea"
	    :rows="5"
	    placeholder="请输入内容"
	    v-model="ruanwen.textarea">
	  </el-input>
	</el-form-item>
    <el-form-item label="活动封面" prop="title">
      <el-upload action="#" multiple :auto-upload="false" list-type="picture-card" :on-preview="handlePictureCardPreview" :limit="9"
        :on-exceed="handleExceed" :on-remove="handleRemove" :on-change="handleOnchange">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>
    <el-form-item label="文章正文必填" prop="title">
      <p style="color: red;">*为了让您的稿件容易通过审核发布，请尽量提供链接转载来源</p>
      <Tinymce :height="300" v-model="content"></Tinymce>
      <br>
      <el-button type="success">预览稿件</el-button>
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
        dialogImageUrl: '',
        dialogVisible: false,
        ruanwen: {
          title: '',
          textarea:'',
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
      // 选取图片
      handleOnchange(file,fileList){
        console.log(file,fileList)
      },
      // 删除图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      // 预览大图
      handlePictureCardPreview(file) {
        console.log(file)
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      // 验证限制是否多张
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择9个文件`);
      },
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

<style scoped lang="scss">

</style>

<template>
  <div style="background-color: #fff;padding-bottom: 10px;">
    <el-form ref="form" :model="form" style="width: 500px;" label-width="120px">
     <el-tag style="margin: 10px;">基础信息</el-tag>
      <el-form-item label="平台注册账号">
        123456789
      </el-form-item>
      <el-form-item label="负责人姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司或个人名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属地区">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="主营业务">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="负责人身份证">
        <p>
          请分别上传身份证正反两面照片，以及本人手持身份证合影高清照片
          <br>
          图片格式必须为:bmp, jpeg, jpg, gif，且单张图片不可大于2M
        </p>
        <ul class="uploader-item">
          <li>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-change="handleUploadPositive" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlPositive" :src="imageUrlPositive" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>身份证正面</p>
          </li>
          <li>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-change="handleUploadBack" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlBack" :src="imageUrlBack" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>身份证背面</p>
          </li>
          <li>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-change="handleUploadGroup" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlGroup" :src="imageUrlGroup" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>本人手持身份证合影</p>
          </li>
        </ul>
      </el-form-item>
      <el-form-item label="营业执照">
        <p>
         如果没有营业执照，可以提供身份证
        </p>
        <ul class="uploader-item">
          <li>
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-change="handleUploadBusiness" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlBusiness" :src="imageUrlBusiness" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>营业执照或身份证</p>
          </li>
        </ul>
      </el-form-item>
    <el-tag style="margin: 10px;">代理商平台定制信息</el-tag>
    <el-form-item label="代理平台名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="代理商平台客服电话">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="代理商平台客服QQ">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="代理商平台LOGO">
      <p>(logo规格：250 x 60 pixels)</p>
      <ul class="uploader-item">
        <li>
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-change="handleUploadBusiness" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrlBusiness" :src="imageUrlBusiness" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p>营业执照或身份证</p>
        </li>
      </ul>
    </el-form-item>
    <el-form-item label="代理商域名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="代理商收款帐号">
      <el-input   type="textarea" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="代理商域名备案号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="版权信息">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item >
     <el-button type="primary">确定提交</el-button>
     <el-button type="success">返回</el-button>
    </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: ''
        },
        imageUrlPositive: '',
        imageUrlBack: '',
        imageUrlGroup: '',
        imageUrlBusiness:''
      }
    },
    methods: {
      handleUploadPositive(file) {
        this.imageUrlPositive = URL.createObjectURL(file.raw);
      },
      handleUploadBack(file){
          this.imageUrlBack = URL.createObjectURL(file.raw);
      },
      handleUploadGroup(file){
          this.imageUrlGroup = URL.createObjectURL(file.raw);
      },
      handleUploadBusiness(file){
        this.imageUrlBusiness = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .uploader-item {
    display: flex;

    li {
      margin: 0 10px;
      text-align: center;
    }
  }
</style>

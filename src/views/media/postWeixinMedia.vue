<template>
  <div>
    <mediaColumn></mediaColumn>
    <br>
    <el-tabs style="background-color: #fff;" v-model="activeName" type="card" >
      <el-tab-pane label="添加微信公众号" name="first">
        <el-form ref="form" style="width: 500px;" :model="form" label-width="120px">
          <el-form-item label="微信名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="微信号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="行业类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="粉丝数">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否认证号">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="头条价格">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="粉丝截图">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
              :on-change="handleUploadFans" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlFans" :src="imageUrlFans" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="二维码">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
               :on-change="handleUploadQoreCode" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlqoreCode" :src="imageUrlqoreCode" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="周末是否可接单">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
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
      <el-tab-pane label="Excel导入公众号" name="two">
        请先下载公众号格式模板，填好后联系客服处理
        <el-button type="primary">下载</el-button>
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
        value: '',
      imageUrlFans: '',
        imageUrlqoreCode: '',
        }
    },
    methods: {
      onSubmit(){

      },
       handleUploadFans(file){
        this.imageUrlFans = URL.createObjectURL(file.raw);
      },
     handleUploadQoreCode(file){
        this.imageUrlqoreCode = URL.createObjectURL(file.raw);
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
    border: 1px dashed #d9d9d9;
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
    border: dashed 1px #ccc;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<template>
  <el-dialog title="修改头像" :visible.sync="visible" :maskClosable="false" :confirmLoading="confirmLoading" :width="dialogWidth" :footer="null" @cancel="cancelHandel">
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :style="{ height: '350px' }">
        <vue-cropper
          ref="cropper"
          :img="options.img"
          :info="true"
          :autoCrop="options.autoCrop"
          :autoCropWidth="options.autoCropWidth"
          :autoCropHeight="options.autoCropHeight"
          :fixedBox="options.fixedBox"
          @realTime="realTime"
        >
        </vue-cropper>
      </el-col>
      <el-col :xs="24" :md="12" :sm="12" :style="{ height: '350px' }">
        <div class="avatar-upload-preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :lg="2" :md="2" :xs="{ span: 4, offset: 1 }" :sm="2">
        <el-upload name="file" action="" :auto-upload="false" :on-change="onChange" :show-file-list="false">
          <el-button icon="upload">选择图片</el-button>
        </el-upload>
      </el-col>
      <el-col :span="1" :offset="2">
        <el-button icon="el-icon-plus" @click="changeScale(1)" />
      </el-col>
      <el-col :span="1" :offset="1">
        <el-button icon="el-icon-minus" @click="changeScale(-1)" />
      </el-col>
      <el-col :span="1" :offset="1">
        <el-button icon="el-icon-refresh-left" @click="rotateLeft" />
      </el-col>
      <el-col :span="1" :offset="1">
        <el-button icon="el-icon-refresh-right" @click="rotateRight" />
      </el-col>
      <el-col :span="2" :offset="6">
        <el-button type="primary" @click="finish('blob1')">保存</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import { isImage, isSizeLt } from '@/utils/validate'
export default {
  data() {
    return {
      dialogWidth: '800px',
      visible: false,
      id: null,
      confirmLoading: false,
      fileList: [],
      uploading: false,
      options: {
        // img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        img: '',
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true
      },
      previews: {}
    }
  },
  mounted() {
    var val = document.body.clientWidth
    const def = 800 // 默认宽度
    if (val < def) {
      this.dialogWidth = '100%'
    } else {
      this.dialogWidth = def + 'px'
    }
  },
  methods: {
    edit(id) {
      this.visible = true
      this.id = id
      /* 获取原始头像 */
    },
    close() {
      this.id = null
      this.visible = false
    },
    cancelHandel() {
      this.close()
    },
    changeScale(num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft()
    },
    rotateRight() {
      this.$refs.cropper.rotateRight()
    },
    onChange(file) {
      const _this = this
      if (!file || !file.raw) {
        return
      }
      if (!isImage(file.raw.type)) {
        _this.$message.error('图片格式错误!')
        return
      }
      if (isSizeLt(file.raw.size)) {
        _this.$message.error('上传图片大小不能超过3MB!')
        return
      }
      const reader = new FileReader()
      // 把Array Buffer转化为blob 如果是base64不需要
      // 转化为base64
      reader.readAsDataURL(file.raw)
      reader.onload = () => {
        this.options.img = reader.result
      }
      // 转化为blob
      // reader.readAsArrayBuffer(file)

      return false
    },

    // 上传图片（点击上传按钮）
    finish(type) {
      const _this = this
      const formData = new FormData()
      // 输出
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob(data => {
          const img = window.URL.createObjectURL(data)
          this.model = true
          this.modelSrc = img
          formData.append('file', data, this.fileName)
          this.$http
            .post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(response => {
              console.log('upload response:', response)
              // var res = response.data
              // if (response.status === 'done') {
              //   _this.imgFile = ''
              //   _this.headImg = res.realPathList[0] // 完整路径
              //   _this.uploadImgRelaPath = res.relaPathList[0] // 非完整路径
              //   _this.$message.success('上传成功')
              //   this.visible = false
              // }
              _this.$message.success('上传成功')
              _this.$emit('ok', response.url)
              _this.visible = false
            })
        })
      } else {
        this.$refs.cropper.getCropData(data => {
          this.model = true
          this.modelSrc = data
          _this.$emit('ok', data)
          _this.visible = false
        })
      }
    },
    okHandel() {
      const vm = this

      vm.confirmLoading = true
      setTimeout(() => {
        vm.confirmLoading = false
        vm.close()
        vm.$message.success('上传头像成功')
      }, 2000)
    },

    realTime(data) {
      this.previews = data
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-upload-preview {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>

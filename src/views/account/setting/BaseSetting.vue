<template>
  <div class="user-setting">
    <div class="user-setting__main">
      <div class="user-setting__title">用户资料</div>
      <div class="user-setting__tip">tip: 亲，为了给您提供更好的服务，请完善以下真实资料，谢谢！</div>
      <el-form ref="form" :model="form" :rules="rules" label-position="top">
        <el-row :gutter="16">
          <el-col :md="24" :lg="16">
            <el-form-item label="真实姓名" prop="realName">
              <el-input v-model="form.realName" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="手机号码">
              <span style="margin-right:20px">{{ regMobile(user.mobile) }}</span>
              <el-button type="primary" @click="$refs.mobile.dialog = true">更换手机</el-button>
            </el-form-item>
            <el-form-item label="联系QQ" prop="qq">
              <el-input v-model="form.qq" placeholder="请输入QQ" />
            </el-form-item>
            <el-form-item label="微信号" prop="weixinId">
              <el-input v-model="form.weixinId" placeholder="请输入微信号" />
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入电话" />
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item label="所属公司" prop="company">
              <el-input v-model="form.company" placeholder="请输入单位" />
            </el-form-item>
          </el-col>
          <el-col :md="24" :lg="8" :style="{ minHeight: '180px' }">
            <div class="avatar__title">设置头像</div>
            <div class="upload-preview" @click="$refs.modal.edit(1)">
              <div class="mask" :class="{ active: !form.avatarPath }">
                <i class="el-icon-plus"></i>
              </div>
              <img v-show="form.avatarPath" :src="form.avatarPath" />
            </div>

            <div class="qrcode-wrapper">
              <img :src="qrCodeSrc" width="120" />
              <p>(扫码绑定微信公众号,接收订单通知)</p>
            </div>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" :loading="submitLoading" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>

      <avatar-modal ref="modal" @ok="setavatar" />
      <updateMobile ref="mobile" :mobile="user.mobile" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { updateInfo, getBindQrCode } from '@/api/user'
import AvatarModal from './AvatarModal'
import updateMobile from './updateMobile'
import { number, mobile, phone, email } from '@/utils/validate'
import { regMobile } from '@/utils'
import Avatar from '@/assets/images/avatar.png'
export default {
  components: {
    AvatarModal,
    updateMobile
  },
  data() {
    return {
      submitLoading: false,
      form: {},
      rules: {
        realName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        qq: [
          { required: true, message: '请输入QQ', trigger: 'blur' },
          { pattern: number, message: 'QQ必须为数字', trigger: 'blur' }
        ],
        weixinId: [{ required: true, message: '请输入微信号', trigger: 'blur' }],
        phone: [{ pattern: phone, message: '电话格式错误', trigger: 'blur' }],
        email: [{ pattern: email, message: '邮箱格式错误', trigger: 'blur' }]
      },
      qrCodeSrc: null
    }
  },
  computed: {
    ...mapGetters(['user', 'imgPath'])
  },
  mounted() {
    this.form = {
      id: this.user.userId,
      realName: this.user.realName,
      mobile: this.user.mobile,
      qq: this.user.qq,
      weixinId: this.user.weixinId,
      phone: this.user.phone,
      email: this.user.email,
      company: this.user.company,
      avatarPath: this.user.avatarPath ? this.imgPath + this.user.avatarPath : Avatar
    }
    //更新一次用户资料，防止过时
    this.$store.dispatch('getInfo').then(() => {})
    //获取绑定二维码
    if (this.user.isOemDisplay) {
      getBindQrCode().then(res => {
        this.qrCodeSrc = res.data
      })
    }
  },
  methods: {
    regMobile,
    setavatar(url) {
      this.form.avatarPath = url
    },

    onSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.submitLoading = true
          updateInfo(this.form)
            .then(() => {
              this.$notify({
                title: '保存成功',
                type: 'success',
                duration: 2500
              })
              this.$store.dispatch('getInfo').then(() => {})
              this.submitLoading = false
            })
            .catch(() => {
              this.submitLoading = false
            })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-setting {
  &__main {
    padding: 8px 40px;
  }
  &__item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }
  &__title {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  &__tip {
    color: rgb(249 0 0 / 75%);
    font-size: xx-small;
    font-style: italic;
    margin: 10px 0px;
  }
  &__meta {
    flex: 1;
    .title {
      margin: 6px 0;
      font-weight: 700;
      font-size: 14px;
    }
    .subtitle {
      margin: 8px 0;
      font-size: 14px;
      color: #555;
    }
  }
}

.avatar__title {
  font-weight: 700;
  font-size: 14px;
  color: #606266;
  margin: 0px 0px 20px 80px;
}

.upload-preview {
  position: relative;
  margin: 30px auto;
  width: 100%;
  max-width: 180px;
  max-height: 180px;
  min-height: 180px;
  border-radius: 50%;
  box-shadow: 0 0 4px #303133;

  .upload-icon {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 1.4rem;
    padding: 0.5rem;
    background: rgba(222, 221, 221, 0.7);
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .mask {
    opacity: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }
    &.active {
      opacity: 1;
    }
    i {
      font-size: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -1rem;
      margin-top: -1rem;
      color: #d6d6d6;
    }
  }

  img,
  .mask {
    width: 100%;
    max-width: 180px;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }
}

.qrcode-wrapper {
  position: relative;
  margin: 80px auto;
  width: 100%;
  text-align: center;
}
</style>

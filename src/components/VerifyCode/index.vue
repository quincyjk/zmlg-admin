<!-- 获取验证码组件 -->
<template>
  <div class="verify-code">
    <el-input :value="value" @input="updateVal" :placeholder="placeholder"></el-input>
    <el-button type="primary" :loading="codeLoading" :disabled="isDisabled" @click="sendCode">{{ buttonName }}</el-button>
  </div>
</template>

<script>
import { isMobile, isEmail } from '@/utils/validate'
import { getMobileCode, getEmailCode } from '@/api/verify'
export default {
  name: 'VerifyCode',
  props: {
    value: {
      type: String
    },
    cd: {
      type: Number,
      default: 1800
    },
    mode: {
      type: String,
      default: 'mobile' //mobile-短信，email-邮件
    },
    type: {
      type: String,
      default: 'identify' //identify-基础认证，reset_password-重置密码
    },
    action: {
      type: Function,
      default: getMobileCode
    },
    placeholder: {
      type: String
    },
    sendEnabled: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    sendEnabled(val) {
      this.isDisabled = !val
    }
  },
  data() {
    return {
      codeLoading: false,
      isDisabled: false,
      time: 0,
      buttonName: '获取验证码'
    }
  },

  methods: {
    updateVal: function() {
      let val = event.target.value
      this.$emit('input', val)
    },
    //发送验证码
    sendCode() {
      if (this.validateContact()) {
        this.codeLoading = true
        this.buttonName = '验证码发送中'
        if (this.mode == 'mobile') {
          this.sendSms()
        } else {
          this.sendEmail()
        }
      }
    },
    validateContact() {
      if (this.mode == 'mobile') {
        if (!this.value) {
          this.$message({
            type: 'error',
            message: '手机号码不能为空',
            center: true
          })
          return false
        }
        if (!isMobile(this.value)) {
          this.$message({
            type: 'error',
            message: '请输入正确的手机号码',
            center: true
          })
          return false
        }
      } else {
        if (!this.value) {
          this.$message({
            type: 'error',
            message: '邮箱地址不能为空',
            center: true
          })
          return false
        }
        if (!isEmail(this.value)) {
          this.$message({
            type: 'error',
            message: '请输入正确的邮箱地址',
            center: true
          })
          return false
        }
      }
      return true
    },
    sendSms() {
      let action
      if (this.action) {
        action = this.action
      } else {
        action = getMobileCode
      }
      action({ mobile: this.value, type: this.type })
        .then(res => {
          this.handleSuccess()
        })
        .catch(err => {
          this.handleError()
        })
    },
    sendEmail() {
      let action
      if (this.action) {
        action = this.action
      } else {
        action = getEmailCode
      }
      action({ email: this.value, type: this.type })
        .then(res => {
          this.handleSuccess()
        })
        .catch(err => {
          this.handleError()
        })
    },
    handleSuccess() {
      this.$message({
        showClose: true,
        message: '发送成功，验证码30分钟内有效',
        type: 'success'
      })
      this.codeLoading = false
      this.isDisabled = true
      this.timer()
    },
    handleError() {
      this.buttonName = '重新获取'
      this.isDisabled = false
      this.codeLoading = false
    },
    timer() {
      const _this = this
      _this.time = this.cd
      this.timer = window.setInterval(function() {
        _this.buttonName = _this.time + '秒后重新获取'
        --_this.time
        if (_this.time < 0) {
          _this.buttonName = '重新获取'
          _this.time = 1800
          _this.isDisabled = false
          window.clearInterval(_this.timer)
        }
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.verify-code {
  display: flex;
  & > * {
    margin-right: 10px;
  }
}
</style>

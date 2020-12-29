<template>
  <div style="display: inline-block;">
    <el-dialog :visible.sync="dialog" :close-on-click-modal="false" :before-close="cancel" :title="title" append-to-body width="475px" @close="cancel">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="100px">
        <el-form-item label="新手机号码" prop="mobile"> <verify-code v-model="form.mobile" :sendEnabled="sendCodeEnabled"/></el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="form.code" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="cancel">取消</el-button>
        <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store'
import { updateMobile } from '@/api/user'
import VerifyCode from '@/components/VerifyCode'
import { isMobile } from '@/utils/validate'
export default {
  props: {
    mobile: {
      type: String
    }
  },
  components: {
    VerifyCode
  },
  data() {
    const validMobile = (rule, value, callback) => {
      if (value === '' || value === null) {
        this.sendCodeEnabled = false
        callback(new Error('手机号码不能为空'))
      } else if (value === this.mobile) {
        this.sendCodeEnabled = false
        callback(new Error('新手机号码不能与旧手机号码相同'))
      } else if (!isMobile(value)) {
        this.sendCodeEnabled = false
        callback(new Error('手机号码格式错误'))
      } else {
        this.sendCodeEnabled = true
        callback()
      }
    }
    return {
      loading: false,
      dialog: false,
      title: '修改绑定手机',
      form: { mobile: '', code: '' },
      sendCodeEnabled: true,
      rules: {
        mobile: [{ required: true, validator: validMobile, trigger: 'change' }],
        code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },

    doSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loading = true
          updateMobile(this.form)
            .then(res => {
              this.loading = false
              this.resetForm()
              this.$notify({
                title: '绑定手机成功',
                type: 'success',
                duration: 1500
              })
              store.dispatch('getInfo').then(() => {})
            })
            .catch(err => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = { mobile: '', code: '' }
    }
  }
}
</script>

<style scoped></style>

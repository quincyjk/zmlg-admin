<template>
  <div style="display: inline-block">
    <el-dialog :visible.sync="dialog" :close-on-click-modal="false" :before-close="cancel" :title="title" append-to-body width="600px" @close="cancel">
      <el-form ref="form" :model="form" :rules="rules" size="small" label-width="120px">
        <el-form-item v-if="type == 2" label="银行及支行" prop="bank">
          <el-input v-model="form.bank" type="bank" auto-complete="on" style="width: 370px;" />
        </el-form-item>
        <el-form-item :label="type == 1 ? '支付宝姓名' : '银行卡户名'" prop="name">
          <el-input v-model="form.name" type="name" auto-complete="on" style="width: 370px;" />
        </el-form-item>
        <el-form-item :label="type == 1 ? '支付宝账号' : '银行卡账号'" prop="accounts">
          <el-input v-model="form.accounts" type="accounts" auto-complete="on" style="width: 370px;" />
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
import { addPayAccounts, updatePayAccounts } from '@/api/user'
export default {
  props: {
    type: {
      type: Number,
      default: 1
    },
    accounts: {
      type: Object
    }
  },
  data() {
    return {
      loading: false,
      dialog: false,
      title: '绑定收款账号',
      form: { type: this.type, name: '', accounts: '', bank: '' },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        accounts: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        bank: [{ required: true, message: '请输入银行及支行名称', trigger: 'blur' }]
      }
    }
  },
  watch: {
    dialog() {
      if (this.accounts) {
        this.form = {
          id: this.accounts.id,
          type: this.type,
          name: this.accounts.name,
          accounts: this.accounts.accounts,
          bank: this.accounts.bank
        }
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
          updatePayAccounts(this.form)
            .then(res => {
              this.loading = false
              this.resetForm()
              this.$notify({
                title: '绑定成功',
                type: 'success',
                duration: 1500
              })
              this.$emit('update')
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
      this.form = { type: this.type, name: '', accounts: '', bank: '' }
    }
  }
}
</script>

<style scoped></style>

<template>
  <div class="user-setting">
    <div class="user-setting__main">
      <div class="user-setting__title">安全设置</div>
      <div class="user-setting__item">
        <div class="user-setting__meta">
          <p class="title">
            <i class="el-icon-user"></i>
            账号安全
          </p>
          <p class="subtitle">更改当前账号密码</p>
        </div>
        <div class="user-setting__menu">
          <el-button size="small" @click="$refs.password.dialog = true">修改</el-button>
        </div>
      </div>
      <div class="user-setting__item">
        <div class="user-setting__meta">
          <p class="title">
            <i class="el-icon-mobile-phone"></i>
            绑定手机
          </p>
          <p class="subtitle">
            更改您的绑定手机号码<template v-if="user.mobile && user.mobileIdentify">，当前已绑定手机号：{{ regMobile(user.mobile) }}</template>
          </p>
        </div>
        <div class="user-setting__menu">
          <el-button size="small" @click="$refs.mobile.dialog = true">修改</el-button>
        </div>
      </div>
      <div class="user-setting__item">
        <div class="user-setting__meta">
          <p class="title">
            <i class="el-icon-bank-card"></i>
            绑定收款账号
          </p>
          <p class="subtitle">设置您的收款账号</p>
          <div class="content">
            <div class="item">
              支付宝：&nbsp;&nbsp;<svg-icon icon-class="alipay_color" className="item__icon" :size="2" />
              <template v-if="alipayAccounts">
                <div class="item__main">{{ alipayAccounts.name }} {{ alipayAccounts.accounts }}</div>
                <div class="item__menu"><el-button size="small" @click="$refs.alipayAccounts.dialog = true">修改</el-button></div>
              </template>
              <template v-else
                ><div class="item__main">未绑定</div>
                <div class="item__menu"><el-button type="primary" size="small" @click="$refs.alipayAccounts.dialog = true">立即绑定</el-button></div></template
              >
            </div>
            <div class="item">
              银行卡：&nbsp;&nbsp;<svg-icon icon-class="bank_card" className="item__icon" :size="2" />
              <template v-if="bankCardAccounts">
                <div class="item__main">{{ bankCardAccounts.name }} {{ bankCardAccounts.accounts }} {{ bankCardAccounts.bank }}</div>
                <div class="item__menu"><el-button size="small" @click="$refs.bankCardAccounts.dialog = true">修改</el-button></div>
              </template>
              <template v-else
                ><div class="item__main">未绑定</div>
                <div class="item__menu"><el-button type="primary" size="small" @click="$refs.bankCardAccounts.dialog = true">立即绑定</el-button></div></template
              >
            </div>
          </div>
        </div>
      </div>

      <updatePassword ref="password" />
      <updateMobile ref="mobile" :mobile="user.mobile" />
      <updatePayAccounts ref="alipayAccounts" :type="1" :accounts="alipayAccounts" @update="initPayAccounts" />
      <updatePayAccounts ref="bankCardAccounts" :type="2" :accounts="bankCardAccounts" @update="initPayAccounts" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import updatePassword from './updatePassword'
import updateMobile from './updateMobile'
import updatePayAccounts from './updatePayAccounts'
import { regMobile } from '@/utils'
import { getPayAccounts } from '@/api/user'
export default {
  components: {
    updatePassword,
    updateMobile,
    updatePayAccounts
  },
  data() {
    return {
      alipayAccounts: null,
      bankCardAccounts: null
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    regMobile,
    initData() {
      this.initPayAccounts()
    },
    initPayAccounts() {
      getPayAccounts().then(res => {
        res.data.forEach(item => {
          if (item.type == 1) {
            this.alipayAccounts = item
          }
          if (item.type == 2) {
            this.bankCardAccounts = item
          }
        })
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
    .content {
      font-size: 14px;
      margin: 8px 0;
      .item {
        margin: 8px 0;
        display: flex;
        align-items: center;
        &__icon {
          margin-right: 10px;
        }
        &__main {
          width: 50%;
        }
        &__menu {
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <aside style="background-color: #fff;margin-bottom: 0;">
      <p>
        收益余额: <span style="color: red;">0</span>元
      </p>
      <el-row>
        <el-button type="primary"> <router-link style="color: #fff;" to="user/apply_income">提现到支付宝或银行卡</router-link></el-button>
        <el-button type="success"> <router-link style="color: #fff;" to="user/apply_to_myamount">收益转入平台帐号余额</router-link></el-button>
      </el-row>
    </aside>
    <aside style="background-color: #fff;">
      提示：由于申请账款太多，需要时间处理，支付宝或银行卡一般6天内完成提现到账，请耐心等待！
    </aside>
    <el-tabs type="border-card">
      <el-tab-pane label="收益提现列表">
        <el-table
             :data="tableData"
             style="width: 100%">
             <el-table-column
               prop="date"
               label="日期"
               width="180">
             </el-table-column>
             <el-table-column
               prop="name"
               label="姓名"
               width="180">
             </el-table-column>
             <el-table-column
               prop="address"
               label="地址">
             </el-table-column>
           </el-table>
      </el-tab-pane>
      <el-tab-pane label="收益明细列表">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="时间">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="交易名称">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收益来源">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
         <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        tableData:[],
        formInline: {
                  user: '',
                  region: ''
                }
      }
    }
  }
</script>

<style>
</style>

<template>
  <div>
    <aside style="background-color: #fff;">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </aside>
    <el-tabs type="border-card">
      <el-tab-pane label="我的客户列表">

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
      <el-tab-pane label="创建新客户帐号">
        
        <el-button type="primary">立即开通代理平台</el-button>
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData:[],
          formInline: {
            user: '',
            region: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style>
</style>

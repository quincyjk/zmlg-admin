<template>
  <div>
    <aside style="background-color: #fff;">
      <h3>我当前是代理商</h3>
      <p style="color: red;">分销商后台权限跟代理商一样，可定制营销平台，功能包括独立展示LOGO、域名、客服QQ电话联系方式、收款账号、客户管理等。</p>
      <p style="color: red;">分销商及其名下客户（即三级分销商）发稿成功，您作为其代理商都有收益（每个订单收益为1~10元）。</p>
    </aside>
    <aside style="background-color: #fff;">
      <h3>代理（分销）功能介绍：</h3>
      <p>1、分类：分为代理商和分销商，代理商可以发展分销商和直接终端客户；分销商只能发展直接终端客户。</p>
      <p>2、权限：分销商后台权限跟代理商一样，可定制营销平台，功能包括独立展示LOGO、域名、客服QQ电话联系方式、收款账号、客户管理等。</p>
      <p>3、管理：代理商和分销商，都直接由领告平台官方审核管理及直接沟通处理订单问题。代理商不能管理分销商，只能享受分销商发稿收益。</p>
      <p>4、收益：分销商及其名下客户发稿成功，代理商都有收益。即是说代理商可通过发展直接客户和分销商实现收益最大化。</p>
      <p>5、建议：有些会员可能是同行从业者、媒介或自己朋友对价格比较敏感，或者也希望定制营销平台，根据情况可以把这个会员转为分销商。</p>
      <p>代理商收益示例 如：代理商加价1~10元给分销商，则分销商自己及名下客户发稿成功，这1~10元将作为收益返给代理商。</p>
    </aside>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style>
</style>

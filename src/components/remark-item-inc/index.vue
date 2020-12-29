<template>
  <el-form-item label="附言备注" prop="title">
    <el-input
    type="textarea"
    rows="5"
    @input="handInput($event)"
    maxlength="255"
    placeholder="1、有什么需要注意的，可以附言备注给编辑参考，不作为发布内容。2、有部分网站标题只能显示17个字，请提供一条17个字内的备用标题。"
    v-model="ruanwen.remark">
    </el-input>
    <span>还可以输入<span style="color: red;">{{numValue}}</span>个字</span>
   </el-form-item>
</template>

<script>
  export default{
    props:{
      ruanwen:Object
    },
    data(){
      return{
        numValue:255,
      }
    },
    methods:{
      // 统计还输入的字符
      handInput(event){
        this.numValue =  255-event.length
      },
    }
  }
</script>

<style>
</style>

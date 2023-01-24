<template>
  <el-button type="primary" size="large" class="w-100">{{ btnText }}</el-button>
</template>
<script lang='ts' setup>
const props = defineProps({
  btnText:{
    type:String,
    default:'确定'
  }
})
</script>
<style lang='scss' scoped>

</style>
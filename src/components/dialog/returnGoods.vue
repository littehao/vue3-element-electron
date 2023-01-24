<template>
  <el-dialog v-model="dialogVisible" title="退货" width="50%">
    <div class="w-100">
      <div class="flex align-center justify-between mb-5 flex-1">
        <span class="fs-14 ft999999 font-weight-bold carlabel">商品名称</span>
        <span class="ft000000 font-weight-bold fs-14">大份牛肉面</span>
      </div>
      <div class="flex align-center justify-between mb-5 flex-1">
        <span class="fs-14 ft999999 font-weight-bold carlabel">数量</span>
        <el-input-number :min="1" v-model="count" size="small" />
      </div>
      <div class="flex align-center justify-between mb-5 flex-1">
        <span class="fs-14 ft999999 font-weight-bold carlabel">规格</span>
        <span class="ft000000 font-weight-bold fs-14">大份、红烧味</span>
      </div>
      <div class="flex align-center justify-between mb-5 flex-1">
        <span class="fs-14 ft999999 font-weight-bold carlabel">小计</span>
        <span class="ftf56c6c fs-14 font-weight-bold">¥12.00</span>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const dialogVisible = ref(false);
const count = ref(1);

const show = () => {
  dialogVisible.value = true;
};
const hide = () => {
  dialogVisible.value = false;
};
defineExpose({
  show,
  hide,
});
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.carlabel {
  width: 70px;
}
</style>

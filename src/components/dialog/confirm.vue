<template>
  <el-dialog v-model="dialogVisible" :title="title" width="50%">
    <div class="text-center">{{ content }}</div>
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
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  content: {
    type: String,
    default: "内容",
  },
});
const dialogVisible = ref(false);

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
</style>

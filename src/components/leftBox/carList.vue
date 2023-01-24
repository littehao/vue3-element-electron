<template>
  <div class="h-100 w-100 flex flex-column">
    <div class="goodsList flex-1 overflow-auto pl-10 pr-10">
      <carCard></carCard>
    </div>
    <div class="submit p-20 border-top">
      <div class="flex align-center justify-between mb-20">
        <div class="flex align-center">
          <span class="fs-14 ft999999 font-weight-bold mr-5">总计</span>
          <span class="ft000000 font-weight-bold fs-14">36件</span>
        </div>
        <div class="flex align-center">
          <span class="fs-14 ft999999 font-weight-bold mr-5">应收</span>
          <span class="ftf56c6c fs-14 font-weight-bold">¥12.00</span>
        </div>
      </div>
      <comButton btnText="结账"></comButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import carCard from "./carCard.vue";
import comButton from "../comButton/index.vue";
</script>
<style lang="scss" scoped>
.goodsList {
  height: calc(100% - 124px);
  > div:last-child {
    border: 0;
  }
}
</style>

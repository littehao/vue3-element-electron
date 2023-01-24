<template>
  <div class="border-bottom p-10 w-100">
    <div class="flex align-center justify-between mb-5">
      <div class="flex align-center">
        <span class="fs-14 ft999999 font-weight-bold carlabel">序号</span>
        <span class="ft000000 font-weight-bold fs-14">01</span>
      </div>
      <span
        class="border ft007dff rounded fs-12 return-goods cursor font-weight-bold"
        @click="returnGoodsShow"
        >退货</span
      >
    </div>
    <div class="flex align-center justify-between mb-5">
      <div class="flex align-center">
        <span class="fs-14 ft999999 font-weight-bold carlabel">商品名称</span>
        <span class="ft000000 font-weight-bold fs-14">大份牛肉面</span>
      </div>
    </div>
    <div class="flex align-center justify-between mb-5">
      <div class="flex align-center">
        <span class="fs-14 ft999999 font-weight-bold carlabel">数量</span>
        <span class="ft000000 font-weight-bold fs-14">x12</span>
      </div>
    </div>
    <div class="flex align-center justify-between">
      <div class="flex align-center">
        <span class="fs-14 ft999999 font-weight-bold carlabel">规格</span>
        <span class="ft000000 font-weight-bold fs-14">大份、红烧味</span>
      </div>
      <div class="flex align-center">
        <span class="fs-14 ft999999 font-weight-bold mr-5">小计</span>
        <span class="ftf56c6c fs-14 font-weight-bold">¥12.00</span>
      </div>
    </div>
  </div>
  <returnGoods ref="returnGoodsDom"></returnGoods>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import returnGoods from "../dialog/returnGoods.vue";
const returnGoodsDom: any = ref(null);
const returnGoodsShow = () => {
  returnGoodsDom.value.show();
};
</script>
<style lang="scss" scoped>
.carlabel {
  width: 70px;
}
.return-goods {
  padding: 0px 10px;
}
</style>

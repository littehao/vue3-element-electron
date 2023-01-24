<template>
  <div class="common-layout h-100">
    <el-container class="h-100">
      <el-header class="headerbg flex align-center">
        <headerLeft></headerLeft>
        <headerRight></headerRight>
      </el-header>
      <el-container class="main-container">
        <el-aside width="350px" class="border-top h-100">
          <!--购物车-->
          <carList></carList>
          <!--订单列表-->
          <!-- <orderList></orderList> -->
        </el-aside>
        <el-main class="mainbg">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import headerLeft from "@/components/header/headerLeft.vue";
import headerRight from "@/components/header/headerRight.vue";
import carList from "@/components/leftBox/carList.vue";
import orderList from "@/components/leftBox/orderList.vue";
</script>
<style lang="scss" scoped>
.headerbg {
  padding: 0;
}
.main-container {
  height: calc(100% - 61px);
}
.mainbg {
  background-color: var(--el-color-primary-light-9);
}
</style>

<template>
  <div class="flex align-center justify-between w-100 pl-20 pr-20">
    <div class="flex align-center headNav">
      <router-link to="/">收银</router-link>
      <router-link to="/order">订单</router-link>
    </div>
    <div class="flex align-center">
      <span class="mr-10 fs-18">admin</span>
      <span class="bg007dff logout flex align-center justify-center rounded cursor" @click="logout">
        <el-icon color="#fff"><SwitchButton /></el-icon>
      </span>
    </div>
  </div>

  <confirm ref="confirmDom" title="退出登录" content="确认退出登录吗？"></confirm>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import confirm from '../dialog/confirm.vue';
const dialogVisible = ref(false)
const confirmDom:any = ref(null)
const logout = () => {
  confirmDom.value.show()
}

</script>
<style lang='scss' scoped>
@import '@/assets/styles/variables.scss';
.headNav a{
  color:$color-999999;
  width:100px;
  text-align: center;
  font-weight: 600;
  &.router-link-active.router-link-exact-active{
    color:$color-007dff;
  }
}
.logout{
  width:20px;
  height:20px;
}

</style>
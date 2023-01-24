<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

//判断是否登录
const username = localStorage.getItem('username')
if(username){
  router.push('/')
} else {
  router.push('/login')
}
</script>

<style scoped>

</style>

<template>
  <div class='bgColor w-100 h-100 flex justify-center align-center'>
      <div class='layout-login' @keyup='enterSubmit'>
        <h3 class='text-center ftffffff mb-10'>收银台系统</h3>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
        >
          <el-form-item class='mb-10' prop='username'>
              <el-input v-model='ruleForm.username' size="large" placeholder='请输入用户名' prefix-icon='User' />
          </el-form-item>
          <el-form-item class='mb-30' prop='password'>
              <el-input v-model='ruleForm.password' size="large" placeholder='请输入密码' prefix-icon='Lock' show-password />
          </el-form-item>
          <el-form-item>
              <el-button type='primary' class='w-100' size="large" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import LoginApi from '@/api/loginApi'
const router = useRouter()

const enterSubmit = (e:KeyboardEvent) => {
    if(e.key === 'Enter') {
      // submitForm()
    }
}

const ruleForm = reactive({
  username: 'admin',
  password: '111111'
})

const submitForm = () => {
  let data = {
    ...ruleForm
  }
  ElMessage({
    message: '登录成功',
    type: 'success'
  })
  localStorage.setItem('username',data.username)
  router.push('/')
  // LoginApi.login(data).then((res) => {
  //   console.log(res)
  //   ElMessage({
  //     message: '登录成功',
  //     type: 'success'
  //   })
  // }).catch((err) => {
  //   console.log(err)
  //   ElMessage({
  //     message: '请求失败',
  //     type: 'error'
  //   })
  // })
}
</script>

<style lang='scss' scoped>
.layout-login {
    width: 400px;
    margin: 0 auto;
    :deep(.el-input__wrapper){
        border: 1px solid hsla(0, 0%, 100%, 0.2);
        box-shadow:none;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #ddd;
    }
    :deep(.el-input__inner){
      color:#fff;
    }
}

</style>

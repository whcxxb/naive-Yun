<template>
  <div class="account">
    <div class="account-box">
      <h3 class="top">🍔请登录</h3>
      <n-form ref="formRef" :model="formValue" :rules="rules" :size="size">
        <n-form-item label="用户名" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
        </n-form-item>
        <n-form-item label="密码" path="user.pwd">
          <n-input v-model:value="formValue.user.pwd" placeholder="输入密码" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" size="large" block @click="handleValidateClick"> 登录 </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FormInst, useMessage, NButton } from 'naive-ui'
// import { userLogin } from '@/api/user'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref('medium')
const formValue = ref({
  user: {
    name: '',
    pwd: ''
  }
})
const rules = {
  user: {
    name: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur'
    },
    pwd: {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    }
  }
}
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<style lang="less" scoped>
.account {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  .account-box {
    flex: 1;
    width: 384px;
    padding: 30px 0;
    margin: 0 auto;
  }
  .top {
    text-align: center;
  }
}
</style>

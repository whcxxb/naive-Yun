<template>
  <div class="account">
    <div class="account-box">
      <div class="title">
        <h2>☁️naive云</h2>
        <div>一个可以游览天下の云</div>
      </div>
      <el-card class="box-card">
        <el-form :model="formInline">
          <el-form-item>
            <el-input v-model="formInline.userName" size="large" :prefix-icon="Message" placeholder="邮箱" />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formInline.password"
              size="large"
              :prefix-icon="Unlock"
              show-password
              type="password"
              placeholder="密码"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="formInline.isPsw" label="记住我" />
          </el-form-item>
          <el-form-item>
            <el-button style="margin: 0 auto; padding: 20px" color="#18a058" @click="onSubmit">🚀登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <div class="restPsd">
        <el-button link @click="toPsw">忘记密码</el-button>
        <el-button link @click="toReg">注册账号</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Unlock, Message } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// 表单信息
const formInline = reactive({
  userName: 'admin',
  password: '123',
  isPsw: false
})
// 登录
const onSubmit = () => {
  console.log('submit!')
}
const router = useRouter()
// 忘记密码
const toPsw = () => {
  router.push('/forgetPassword')
}
// 注册
const toReg = () => {
  router.push('/register')
}
</script>

<style lang="less" scoped>
.account {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-image: url(../../assets/img/login.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  .account-box {
    width: 384px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .box-card {
    margin-top: 20px;
    padding: 30px 20px;
  }
  .restPsd {
    display: flex;
    justify-content: space-between;
  }
}
@media (max-width: 450px) {
  .account-box {
    width: 100% !important;
  }
}
</style>

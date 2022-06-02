<template>
  <div>
    <div class="info-top">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card style="width: 220px; height: 120px">
            <div class="row">
              <div>
                <h5>会员到期</h5>
                <span>2022-07-01</span>
              </div>
              <div>
                <img src="~@/assets/img/user.png" alt="" />
              </div>
            </div>
            <span>距离重置流量还有 29 天</span>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="width: 220px; height: 120px">
            <div class="row">
              <div>
                <h5>会员到期</h5>
                <span>2022-07-01</span>
              </div>
              <div>
                <img src="~@/assets/img/liu.png" alt="" />
              </div>
            </div>
            <span>距离重置流量还有 29 天</span>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="width: 220px; height: 120px">
            <div class="row">
              <div>
                <h5>会员到期</h5>
                <span>2022-07-01</span>
              </div>
              <div>
                <img src="~@/assets/img/ma.png" alt="" />
              </div>
            </div>
            <span>距离重置流量还有 29 天</span>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card style="width: 220px; height: 120px">
            <div class="row">
              <div>
                <h5>会员到期</h5>
                <span>2022-07-01</span>
              </div>
              <div>
                <img src="~@/assets/img/todo.png" alt="" />
              </div>
            </div>
            <span>距离重置流量还有 29 天</span>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="info-btm">
      <el-row style="margin-top: -80px" :gutter="20">
        <el-col :span="12">
          <el-card style="width: 480px; height: 260px">
            <template #header>
              <span>我的订阅</span>
            </template>
            <div class="content">
              <div class="des">
                <span>VIP1 9.9元月享100GB</span>
                <span>于 2022-07-01 到期，距离到期还有 29 天，29 日后重置流量</span>
                <span>已用流量</span>
                <el-progress :percentage="20" color="18a058" />
              </div>
              <div>
                <el-button color="#18a058">操作</el-button>
              </div>
            </div>
          </el-card>
          <el-card style="width: 480px; height: 260px">
            <template #header> 订阅连接 </template>
            重要通知，系统更新完毕，恢复正常使用，请重新更新订阅。 2022-05-28
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style="width: 480px; height: 260px">
            <template #header> 重要通知！！！ </template>
            重要通知，系统更新完毕，恢复正常使用，请重新更新订阅。 2022-05-28
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.info-top {
  padding: 20px 30px;
  height: 200px;
  background: linear-gradient(90deg, #18a058, #2dce89) !important;
  .row {
    display: flex;
    img {
      margin-left: 40px;
      width: 48px;
    }
  }
}
.info-btm {
  padding: 10px 30px;
  .content {
    display: flex;
    justify-content: space-between;
    .des {
      display: flex;
      flex-direction: column;
      width: 300px;
      font-size: 16px !important;
      :nth-child(2) {
        margin-bottom: 10px;
      }
      :nth-child(3) {
        padding: 3px;
        width: 60px;
        font-size: 12px;
        color: #fff;
        border-radius: 15px;
        text-align: center;
        background-color: #18a058;
      }
    }
    button {
      margin-top: 40px;
      font-weight: 600;
      padding: 20px;
    }
  }
}
</style>

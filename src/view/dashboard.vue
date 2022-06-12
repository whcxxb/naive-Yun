<template>
  <div>
    <div class="info-top">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card style="height: 120px">
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
          <el-card style="height: 120px">
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
          <el-card style="height: 120px">
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
          <el-card style="height: 120px">
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
          <el-card style="height: 260px">
            <template #header>
              <span>我的订阅</span>
            </template>
            <div class="content">
              <div class="des">
                <span>VIP1 9.9元月享100GB</span>
                <span>于 2022-07-01 到期，距离到期还有 29 天，29 日后重置流量</span>
                <span>已用流量</span>
                <el-progress :percentage="20" color="18a058" />
                <span>已用 305.2 MB / 总计 100.0 GB</span>
              </div>
              <div>
                <el-dropdown trigger="click">
                  <el-button color="#18a058">
                    操作<el-icon class="el-icon--right"><arrow-down /></el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item>续费订阅</el-dropdown-item>
                      <el-dropdown-item>重置当月流量</el-dropdown-item>
                      <el-dropdown-item>重置订阅信息</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
            </div>
          </el-card>
          <el-card style="height: 260px; margin-top: 20px">
            <template #header> 订阅连接 </template>
            <div class="btns">
              <el-dropdown trigger="click">
                <el-button color="#18a058">
                  Clash订阅<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>复制Clash订阅</el-dropdown-item>
                    <el-dropdown-item>一键导入Clash</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-dropdown trigger="click">
                <el-button style="color: #fff" color="#f0932b">
                  Shadowrocket 订阅<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>续费订阅</el-dropdown-item>
                    <el-dropdown-item>重置当月流量</el-dropdown-item>
                    <el-dropdown-item>重置订阅信息</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-dropdown trigger="click">
                <el-button>
                  Surge订阅<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>续费订阅</el-dropdown-item>
                    <el-dropdown-item>重置当月流量</el-dropdown-item>
                    <el-dropdown-item>重置订阅信息</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-dropdown trigger="click">
                <el-button color="#e84393">
                  Surfboard订阅<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>续费订阅</el-dropdown-item>
                    <el-dropdown-item>重置当月流量</el-dropdown-item>
                    <el-dropdown-item>重置订阅信息</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-button color="#d63031">复制V2ray订阅</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style="height: 160px">
            <template #header> 重要通知！！！ </template>
            <span>重要通知，系统更新完毕，恢复正常使用，请重新更新订阅</span>
            <span>2022-05-28</span>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
</script>

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
  span {
    color: #636e72;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .des {
      display: flex;
      flex-direction: column;
      width: 300px;
      font-size: 16px !important;
      :nth-child(2) {
        margin-bottom: 20px;
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
  .btns {
    button {
      font-size: 14px;
      font-weight: 600;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    }
  }
}
</style>

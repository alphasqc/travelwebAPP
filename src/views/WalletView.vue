<template>
  <div class="walletview">
    <van-nav-bar :fixed="true">
      <template #left>
        <!-- <van-cell is-link @click="showPopup"> -->
          <van-icon name="user-o" size="18" @click="jumplogin" />
        <!-- </van-cell>
        <van-popup name="user-o" v-model:show="show" round position="bottom" :style="{ height: '70%', width: '100%' }" /> -->
      </template>
      <template #title>
        <van-search @click-input="jumpsearch" shape="round" placeholder="请输入搜索关键词" input-align="center" />
      </template>
      <template #right>
        <view @click="jumparea" style="text-align:left">
          <van-icon name="location" size="14" style=" color:red " />
          {{cityname}}
        </view>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    // 接受城市参数
    const cityname = sessionStorage.getItem('key')
    const router = useRouter()
    // 搜索跳转
    const jumpsearch = () => {
      router.push('/search')
    }
    // 登录跳转
    const jumplogin = () => {
      router.push('/login')
    }
    // 城市选择页跳转
    const jumparea = () => {
      router.push('/area')
    }
    return {
      cityname,
      jumplogin,
      jumpsearch,
      jumparea
    }
  }
}
</script>

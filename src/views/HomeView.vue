<template>
<div class="home">
    <van-nav-bar>
      <template #left>
        <van-cell is-link @click="showPopup">
          <van-icon name="user-o" size="18" />
        </van-cell>
        <van-popup name="user-o" v-model:show="show" round closeable position="left" :style="{ height: '100%', width: '50%' }" />
      </template>
      <template #title>
        <van-search @click-input="jumpsearch" shape="round" placeholder="请输入搜索关键词" input-align="center" />
      </template>
      <template #right>
        <van-icon name="notification-f" class-prefix="iconfont" size="18" />
      </template>
    </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
      <van-swipe-item v-model="getdata" v-for="item in 4" :key="item">
        <img :src="item.banner">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import '@/mock/index'

export default {
  setup () {
    // 左侧弹出
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    // 轮播数据获取
    const getdata = () => {
      proxy.$axios.get('/imgurl').then((res) => {
        console.log(res.data)
        return res.data
      }).catch((err) => {
        console.log(err)
      })
    }
    // 搜索跳转
    const router = useRouter()
    const { proxy } = getCurrentInstance()
    const jumpsearch = () => {
      proxy.$axios.get('/imgurl').then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
      router.push('/wallet')
    }
    return {
      show,
      getdata,
      jumpsearch,
      showPopup
    }
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin-top: 20px;
}
</style>

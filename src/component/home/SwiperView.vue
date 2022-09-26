<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
            <van-swipe-item v-for="item in swiperlist" :key="item">
                <img :src="item.banner">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getHome } from '@/axios/api'

export default {
  name: 'SwiperView',
  setup () {
    // 轮播数据获取
    const swiperlist = ref('')
    getHome('imgurl').then((res) => {
      console.log(res.data)
      swiperlist.value = res.data
    })
    return {
      swiperlist
    }
  }
}
</script>

<style>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 15rem;
  /* line-height: 15rem; */
  text-align: center;
  background-color: #39a9ed;
  /* margin-top: 20px; */
}

.my-swipe img {
  width: 100%;
  height: 15rem;
}
</style>

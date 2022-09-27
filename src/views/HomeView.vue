<template>
<div class="home">

    <van-nav-bar>
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

    <OptionsView></OptionsView>

  </div>
</template>

<script>
import { useRouter } from 'vue-router'
// import '@/mock/index'
import OptionsView from '../component/home/OptionsView.vue'

export default {
  name: 'HomeView',
  components: {
    OptionsView
  },
  setup () {
    // 接受城市参数
    const cityname = '城市'
    const getcity = () => {
      cityname.value = sessionStorage.getItem('key')
      console.log(cityname.value)
    }
    // cityname.value = Json.parse(this.$route.params.cityname)
    // 左侧弹出
    // const show = ref(false)
    // const showPopup = () => {
    //   show.value = true
    // }
    // 搜索跳转
    const router = useRouter()
    const jumpsearch = () => {
      router.push('/search')
    }
    // 城市选择页跳转
    const jumparea = () => {
      router.push('/area')
    }
    // 登录跳转
    const jumplogin = () => {
      router.push('/login')
    }
    return {
      getcity,
      cityname,
      // show,
      jumplogin,
      jumpsearch,
      // showPopup,
      jumparea
    }
  }
}
</script>

<style>

</style>

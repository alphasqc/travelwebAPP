<template>
  <div class="home">
    <van-nav-bar :fixed="true">
      <template #left>
        <!-- <van-cell is-link @click="showPopup"> -->
          <img :src="userlist.userimg" class="userimg" alt="" v-if="userlist.islogin" @click="jumpUser">
          <div class="userpot" @click="jumplogin" v-if="!userlist.islogin">
            登录
          </div>
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
// import { ref } from 'vue'
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
    const cityname = sessionStorage.getItem('key')
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    // cityname.value = JSON.parse(this.$route.params.cityname)
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
    // 用户跳转
    const jumpUser = () => {
      router.push('/user')
    }
    return {
      cityname,
      userlist,
      jumpUser,
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
.home{
  padding-bottom: 15%;
}
.home .userimg{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.home .userpot{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  line-height: 2rem;
  font-size: 1px;
  background-color: rgb(235, 235, 235);
}
</style>

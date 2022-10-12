<template>
    <div class="head">
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
        <van-search @click-input="jumpsearch" shape="round" placeholder="请输入搜索关键词" input-align="center" style="height: 2rem;"/>
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
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    return {
      cityname,
      userlist,
      jumplogin,
      jumpsearch,
      jumparea

    }
  }
}
</script>

<style>

.head .userimg{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.head .userpot{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  line-height: 2rem;
  font-size: 1px;
  background-color: rgb(235, 235, 235);
}
.head .userimg{
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
</style>

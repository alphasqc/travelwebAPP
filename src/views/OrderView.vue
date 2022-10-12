<template>
    <div class="order">
      <van-nav-bar title="订单"/>
      <p v-if="!userlist.islogin" style="color: rgb(215, 215, 215)">暂未登录</p>
      <van-tabs v-model:active="active" color="#1989fa" v-if="userlist.islogin">
        <van-tab title="全部">
          <AllorderView></AllorderView>
        </van-tab>
        <van-tab title="待付款">
          <PaidorderView></PaidorderView>
        </van-tab>
        <van-tab title="未出行">
          <UseorderView></UseorderView>
        </van-tab>
        <van-tab title="待点评">
          <WriteorderView></WriteorderView>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
import { ref } from 'vue'
import AllorderView from '@/component/order/AllorderView.vue'
import PaidorderView from '@/component/order/PaidorderView.vue'
import UseorderView from '@/component/order/UseorderView.vue'
import WriteorderView from '@/component/order/WriteorderView.vue'

export default {
  setup () {
    const active = ref(0)
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    return {
      active,
      userlist
    }
  },
  components: { AllorderView, PaidorderView, UseorderView, WriteorderView }
}
</script>

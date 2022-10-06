<template>
    <div class="addorder">
        <van-nav-bar title="订单填写" left-text="返回" left-arrow @click-left="onClickLeft" />

        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>

<script>
import router from '@/router'
// import { Toast } from 'vant'

export default {
  name: 'AddrderView',
  setup () {
    // 返回
    const onClickLeft = () => history.back()
    // 提交按钮事件
    const onSubmit = () => {
    //   Toast('点击按钮')
      router.push('/order')
    }
    return {
      onClickLeft,
      onSubmit
    }
  }
}
</script>

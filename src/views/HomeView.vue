<template>
<div class="home">

    <van-nav-bar>
      <template #left>
        <van-cell is-link @click="showPopup">
          <van-icon name="user-o" size="18" />
        </van-cell>
        <van-popup name="user-o" v-model:show="show" round closeable position="left" :style="{ height: '100%', width: '80%' }" />
      </template>
      <template #title>
        <van-search @click-input="jumpsearch" shape="round" placeholder="请输入搜索关键词" input-align="center" />
      </template>
      <template #right>
        <view @click="jumparea">
          <van-icon name="location" size="14" style=" color:red " />
          城市
        </view>
      </template>
    </van-nav-bar>

    <van-pull-refresh v-model="loading" @refresh="onRefresh">

    <OptionsView></OptionsView>

    </van-pull-refresh>

  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
// import '@/mock/index'
import OptionsView from '../component/home/OptionsView.vue'
import { Toast } from 'vant'

export default {
  name: 'HomeView',
  components: {
    OptionsView
  },
  setup () {
    // 左侧弹出
    const show = ref(false)
    const showPopup = () => {
      show.value = true
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
    // 城市选择页跳转
    const jumparea = () => {
      router.push('/area')
    }
    // 下拉刷新
    const count = ref(0)
    const loading = ref(false)
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功')
        loading.value = false
        count.value++
      }, 1000)
    }
    return {
      count,
      loading,
      onRefresh,
      show,
      jumpsearch,
      jumparea,
      showPopup
    }
  }
}
</script>

<style>

</style>

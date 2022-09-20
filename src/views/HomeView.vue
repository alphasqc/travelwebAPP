<template>
  <div class="home">
    <van-nav-bar>
      <template #left>
        <van-cell is-link @click="showPopup">
          <van-icon name="user-o" size="18" />
        </van-cell>
        <van-popup v-model:show="show" round closeable position="left" :style="{ height: '100%', width: '50%' }" />
      </template>
      <template #title>
        <van-search @click-input="jumpsearch" shape="round" placeholder="请输入搜索关键词" input-align="center" />
      </template>
      <template #right>
        <van-icon name="notification-f" class-prefix="iconfont" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    // 左侧弹出
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    // 搜索跳转
    const router = useRouter()
    const jumpsearch = () => {
      router.push('/wallet')
    }
    return {
      show,
      jumpsearch,
      showPopup
    }
  }
}
</script>

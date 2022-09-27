<template>
  <div class="options">
    <van-tabs swipeable sticky>
      <van-tab title="推荐">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
          <SwiperView></SwiperView>
          <CardView></CardView>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="热门">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
          <HotView></HotView>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="定位">
        <GuideView></GuideView>
      </van-tab>
      <van-tab title="计划"  disabled>内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<style>
</style>

<script>
import SwiperView from './SwiperView.vue'
import CardView from './CardView.vue'
import HotView from './HotView.vue'
import GuideView from './GuideView.vue'

import { Toast } from 'vant'
import { ref } from 'vue'

export default {
  name: 'OptionsView',
  components: {
    SwiperView,
    CardView,
    HotView,
    GuideView
  },
  setup () {
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
      onRefresh
    }
  }
}
</script>

<style>
.van-tab{
  border-bottom: rgb(215, 215, 215) solid 1px;
}
</style>

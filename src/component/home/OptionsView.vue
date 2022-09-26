<template>
  <div class="options">
    <van-tabs v-model:active="active" swipeable sticky="true">
      <van-tab title="推荐">
        <SwiperView></SwiperView>
        <CardView></CardView>
      </van-tab>
      <van-tab title="热门">内容 2</van-tab>
      <van-tab title="定位">内容 3</van-tab>
      <van-tab title="计划">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<style>
</style>

<script>
import SwiperView from './SwiperView.vue'
import CardView from './CardView.vue'
export default {
  name: 'OptionsView',
  components: {
    SwiperView,
    CardView
  },
  setup () {
    return {
    }
  }
}
</script>

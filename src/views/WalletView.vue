<template>
  <div class="wallet">

    <HeadView></HeadView>

    <WoptionView></WoptionView>

    <ScenView></ScenView>
  </div>
</template>

<script>
import HeadView from '@/component/wallect/HeadView.vue'
import WoptionView from '@/component/wallect/WoptionView.vue'
import ScenView from '@/component/wallect/ScenView.vue'

export default {
  setup () {
    return {}
  },
  components: { HeadView, WoptionView, ScenView }
}
</script>

<style>

.wallet{
  padding-bottom: 15%;
}
</style>

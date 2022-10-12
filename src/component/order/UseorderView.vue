<template>
    <div class="useorder">
        <div v-for="item in cardlist" :key="item" style="border-bottom: rgb(215, 215, 215) solid 1px;">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.text"
            :title="item.name"
            :thumb="item.img"
            >
            <template #tags>
                <!-- <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag> -->
            </template>
            <template #footer>
                <van-button size="mini">删除</van-button>
            </template>
            </van-card>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getOrder } from '@/axios/api'

export default {
  setup () {
    // 卡片数据获取
    const cardlist = ref('')
    getOrder('orderlist', 2).then((res) => {
      cardlist.value = res.data
    })
    return {
      cardlist
    }
  }
}
</script>

<style>
    .useorder{
        padding-bottom: 15%;
    }
</style>

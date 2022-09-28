<template>
    <div class="hot">
        <van-row gutter="20" v-for="(item,index) in hotlist" :key="index">
            <van-col span="10">
                <img :src="item.img.url[0]" />
            </van-col>
            <van-col span="14">
                <div class="hotname">{{item.name}}</div>
                <div class="hottitle">{{item.title}}</div>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getHome } from '@/axios/api'

export default {
  name: 'HotView',
  setup () {
    const hotlist = ref('')
    getHome('hotlist').then((res) => {
      hotlist.value = res.data
    })
    return {
      hotlist
    }
  }
}
</script>

<style>
.hot .van-row{
    height: 7rem;
    box-sizing: border-box;
    padding: 0.5rem;
    border-bottom: rgb(215, 215, 215) solid 0.1px;
}
.hot .van-col{
    text-align: left;
    height: 100%;
}
.hot .van-col img{
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
}
.hot .van-col div{
    width: 100%;
}
.hot .hotname{
    font-family: "微软雅黑";
    font-weight: 800;
    font-size: 1rem;
}
.hot .hottitle{
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 5px;
}
</style>

<template>
    <div class="title">
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="item in mainlist.img" :key="item">
                <img :src="item" alt="" style="height: 100%; width: 100%;">
            </van-swipe-item>
        </van-swipe>
        <van-row>
            <van-col span="24" class="feature">{{mainlist.name}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8">评分:{{mainlist.point}}</van-col>
            <van-col span="16" class="maintitle">{{mainlist.title}}</van-col>
        </van-row>
        <van-row>
            <van-col span="10" style="font-size: 10px; color: blue;">开放时间</van-col>
            <van-col span="14" style="font-size: 10px; color: blue;">具体位置：</van-col>
        </van-row>
        <van-row>
            <van-col span="10" style="font-size: 14px;">{{mainlist.opentime}}</van-col>
            <van-col span="14" style="font-size: 14px;">{{mainlist.address}}</van-col>
        </van-row>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getMain } from '@/axios/api'

export default {
  setup () {
    // 接收列表
    const mainlist = ref({})
    const blog = JSON.parse(localStorage.getItem('main'))
    getMain(blog.blog, blog.id).then((res) => {
      mainlist.value = res.data
    })
    return {
      mainlist
    }
  }
}
</script>

<style>
  .main .van-swipe{
    height: 12rem;
  }
  .main .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 12rem;
    text-align: center;
    background-color: #39a9ed;
  }
    .title{
        background-color: white;
        border-radius: 0.5rem;
        margin: 0 0 1rem 0;
    }
    .title .van-col{
        text-align: left;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .feature{
        font-family: '微软雅黑';
        font-size: 1rem;
        font-weight: 700;
    }
    .maintitle{
      height: 2.5rem;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
</style>

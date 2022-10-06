<template>
    <div class="title">
        <!-- 轮播 -->
        <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="item in scenlist.img" :key="item">
                <img :src="item" alt="" style="height: 100%; width: 100%;">
            </van-swipe-item>
        </van-swipe>
        <van-row>
            <van-col span="24" class="feature">{{scenlist.name}}</van-col>
        </van-row>
        <van-row>
            <van-col span="8">{{scenlist.point}}</van-col>
            <van-col span="16">{{scenlist.feature}}</van-col>
        </van-row>
        <van-row>
            <van-col span="10">{{scenlist.time}}</van-col>
            <van-col span="14">{{scenlist.location}}</van-col>
        </van-row>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const scenlist = ref({
      name: '重庆动物园',
      point: '5.0',
      feature: '看看罕见的亚洲金猫',
      time: '08:00~17:30',
      location: '重庆市九龙坡区杨家坪西郊一村一号',
      img: [
        'https://img2.baidu.com/it/u=3633522105,3327760635&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F59914c437c099.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667529506&t=c6b4652e8053415c1849ee6896d538b2',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F54699bf470c9a.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667529506&t=d26a3d394b89032a7aa5635a9aef218f',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-08%2F5a52d7086f955.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667529506&t=35de2213e9f901d5fa49c30d9d59c34e'
      ]
    })
    return {
      scenlist
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
</style>

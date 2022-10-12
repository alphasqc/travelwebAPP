<template>
    <div class="search">
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
            <template #title>
                <van-search v-model="foundtext" shape="round" placeholder="请输入搜索关键词" input-align="center" autofocus />
            </template>
            <template #right>
              <div @click="Search" style="color: blue">搜索</div>
            </template>
        </van-nav-bar>
        <div style="padding: 1rem 4px 0 4px">
          <van-row gutter="20" v-for="(item,index) in scenlist" :key="index" @click="detailsjump(item.id, item.blog)">
              <van-col span="10">
                  <img :src="item.img[0]" />
              </van-col>
              <van-col span="14">
                  <div class="hotname">{{item.name}}</div>
                  <div class="hottitle">{{item.title}}</div>
              </van-col>
          </van-row>

          <van-row gutter="20" v-for="(item,index) in hotellist" :key="index" @click="detailsjump(item.id, item.blog)">
              <van-col span="10">
                  <img :src="item.img[0]" />
              </van-col>
              <van-col span="14">
                  <div class="hotname">{{item.name}}</div>
                  <div class="hottitle">{{item.title}}</div>
              </van-col>
          </van-row>

          <van-row gutter="20" v-for="(item,index) in foodlist" :key="index" @click="detailsjump(item.id, item.blog)">
              <van-col span="10">
                  <img :src="item.img[0]" />
              </van-col>
              <van-col span="14">
                  <div class="hotname">{{item.name}}</div>
                  <div class="hottitle">{{item.title}}</div>
              </van-col>
          </van-row>

          <van-row gutter="20" v-for="(item,index) in roundlist" :key="index" @click="detailsjump(item.id, item.blog)">
              <van-col span="10">
                  <img :src="item.img[0]" />
              </van-col>
              <van-col span="14">
                  <div class="hotname">{{item.name}}</div>
                  <div class="hottitle">{{item.title}}</div>
              </van-col>
          </van-row>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { foundData } from '@/axios/api'
import router from '@/router'
export default {
  setup () {
    // 搜索
    const foundtext = ref('')
    const scenlist = ref('')
    const hotellist = ref('')
    const foodlist = ref('')
    const roundlist = ref('')
    const Search = () => {
      // 卡片数据获取
      foundData('scenlist', foundtext.value).then((res) => {
        scenlist.value = res.data
      })
      // 卡片数据获取
      foundData('hotellist', foundtext.value).then((res) => {
        hotellist.value = res.data
      })
      // 卡片数据获取
      foundData('foodlist', foundtext.value).then((res) => {
        foodlist.value = res.data
      })
      // 卡片数据获取
      foundData('roundlist', foundtext.value).then((res) => {
        roundlist.value = res.data
      })
    }
    // 商品详情跳转
    const detailsjump = (id, blog) => {
      const list = {
        id: id,
        blog: blog
      }
      localStorage.setItem('main', JSON.stringify(list))
      router.push('/main')
    }
    const onClickLeft = () => history.back()
    return {
      foundtext,
      scenlist,
      hotellist,
      foodlist,
      roundlist,
      Search,
      detailsjump,
      onClickLeft
    }
  }
}
</script>

<style>
.hsearchot .van-row{
    height: 5rem;
    box-sizing: border-box;
    padding: 0.5rem;
    border-bottom: rgb(215, 215, 215) solid 0.1px;
}
.search .van-col{
    text-align: left;
    height: 100%;
}
.search .van-col img{
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
}
.search .van-col div{
    width: 100%;
}
.search .hotname{
    font-family: "微软雅黑";
    font-weight: 800;
    font-size: 1rem;
}
.search .hottitle{
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 5px;
}
</style>

<template>
    <div class="write">
      <van-row>
        <van-col class="feature" span="18" style="text-align: left;">用户点评</van-col>
        <van-col span="6" style="font-size: 10px; color: #1989fa;" @click="jumpWrite">查看全部<van-icon name="arrow"  color="#1989fa"></van-icon></van-col>
      </van-row>
      <div class="writebox" v-for="item in writelist" :key="item" style="margin-top: 0.5rem;">

        <van-row style="display: flex; align-items: center;">
          <van-col span="20" style="line-height: 1rem; text-align: left;">
            <img :src="item.userimg" alt="" style="height: 1.5rem; width: 1.5rem; border-radius: 3rem;">
            {{item.name}}
          </van-col>
          <van-col span="4" style="text-align: left; color: white; border-radius: 5px; background-color: #1989fa;">
            <van-icon name="like" color="white"></van-icon>
            {{item.point}}
          </van-col>
        </van-row>

        <van-row style="margin-top: 0.5rem;">
          <van-col span="24" >
            <div class="writetext">
              {{item.text}}
            </div>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="8" style="padding: 0.5rem;" v-for="img in item.img.slice(0,3)" :key="img">
            <img :src="img" alt="" style="width: 100%; height: 5rem; border-radius: 5px;">
          </van-col>
        </van-row>

      </div>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'
import { foundWrite } from '@/axios/api'

export default {
  setup () {
    // 卡片数据获取
    // const writelist = ref('')
    // getHome('writelist').then((res) => {
    //   writelist.value = res.data
    // })

    const jumpWrite = () => {
      router.push('/allwrite')
    }

    // 接收列表
    const writelist = ref({})
    const blog = JSON.parse(localStorage.getItem('main'))
    foundWrite('writelist', blog.id).then((res) => {
      writelist.value = res.data
    })
    return {
      writelist,
      jumpWrite
    }
  }
}
</script>

<style>
    .write{
        background-color: white;
        border-radius: 1rem;
        margin: 0.5rem 0 1rem 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
        min-height: 50px;
    }
    .writetext{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 10px;
    text-align: left;
    }
</style>

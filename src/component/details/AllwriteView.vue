<template>
    <div class="allwrite">
        <van-nav-bar
            title="所有点评"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
        <template #right>
          <van-icon name="edit" size="20" @click="addWrite"></van-icon>
        </template>
        </van-nav-bar>

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
import { ref } from 'vue'
import { foundWrite } from '@/axios/api'
import router from '@/router'

export default {
  setup () {
    const onClickLeft = () => {
      router.push('/main')
    }
    // 接收列表
    const writelist = ref({})
    const blog = JSON.parse(localStorage.getItem('main'))
    foundWrite('writelist', blog.id).then((res) => {
      writelist.value = res.data
    })

    const addWrite = () => {
      router.push('/addwrite')
    }
    return {
      writelist,
      addWrite,
      onClickLeft
    }
  }
}
</script>

<style>
.allwrite .write{
        background-color: white;
        border-radius: 1rem;
        margin: 0.5rem 0 1rem 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
.allwrite .writetext{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 10px;
    text-align: left;
    }
.allwrite .writebox{
  padding: 0 1rem 0 1rem;
}
</style>

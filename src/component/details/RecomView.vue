<template>
    <div class="recom">
      <van-row>
        <van-col class="feature" span="18" style="text-align: left;">大家都喜欢</van-col>
      </van-row>
      <div class="recombox" v-for="item in mainlist.slice(0,5)" :key="item" style="margin: 0.5rem 0 0.5rem 0;">
        <van-row @click="detailsjump(item.id,item.blog)">
          <van-col span="8">
            <img :src="item.img[0]" alt="" style="width: 100%; height: 70px; border-radius: 5px;">
          </van-col>

          <van-col span="16" style="padding-left: 0.5rem;" class="recomfond">

            <van-row style="font-weight: 600; font-size: 14px;">{{item.name}}</van-row>

            <van-row>
              <van-col span="6" style="color: white; background-color: #1989fa; border-radius: 5px; font-size: 14px;">
                <van-icon name="fire" size="12"></van-icon>
                {{item.point}}
              </van-col>
            </van-row>

            <van-row style="font-size: 3px; line-height: 15px;">
              <div style="font-size: 16px; color: red;" v-if="item.tickets != ''">￥{{item.tickets[0].price}}起</div>

            </van-row>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getHome } from '@/axios/api'
// import router from '@/router'

export default {
  setup () {
    // 接收列表
    const mainlist = ref('')
    const blog = JSON.parse(localStorage.getItem('main'))
    getHome(blog.blog, blog.id).then((res) => {
      mainlist.value = res.data
    })
    // 商品详情跳转
    const detailsjump = (id, blog) => {
      const list = {
        id: id,
        blog: blog
      }
      localStorage.setItem('main', JSON.stringify(list))
      location.reload(scrollTo(0, 0))
    }
    return {
      mainlist,
      detailsjump
    }
  }
}
</script>

<style>
    .recom{
        background-color: white;
        border-radius: 1rem;
        margin: 1rem 0 1rem 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .recomfond>*{
      margin: 5px 0 5px 0;
    }
</style>

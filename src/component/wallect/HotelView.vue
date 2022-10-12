<template>
    <div class="hotel">

        <HeadView></HeadView>

        <WoptionView></WoptionView>

        <div class="hotelbox" v-for="item in cardlist" :key="item">
          <van-row gutter="20" @click="detailsjump(item.id, item.blog)">
            <van-col span="10">
              <img :src="item.img[4]" alt="" class="goodimg">
            </van-col>

            <van-col span="14" class="goodtitle">

              <van-row>
                <div style="font-weight: 600;">{{item.name}}</div>
              </van-row>

              <van-row>
                <van-col span="8" style="color: white; background-color: #1989fa; border-radius: 5px;">
                  <van-icon name="fire"></van-icon>
                  {{item.point}}
                </van-col>
              </van-row>

              <van-row>
                {{item.title}}
              </van-row>

              <!-- <van-row>
                <van-col span="24" class="goodprice">
                  ￥{{item.rooms[0].price}}.0/人起
                </van-col>
              </van-row> -->
            </van-col>
          </van-row>
        </div>

    </div>
</template>

<script>
import WoptionView from './WoptionView.vue'
import HeadView from './HeadView.vue'
import { ref } from 'vue'
import { getHome } from '@/axios/api'
import router from '@/router'

export default {
  setup () {
    // 卡片数据获取
    const cardlist = ref('')
    getHome('hotellist').then((res) => {
      cardlist.value = res.data
    })
    // 商品详情跳转
    const detailsjump = (id, blog) => {
      const list = {
        id: id,
        blog: blog
      }
      localStorage.setItem('main', JSON.stringify(list))
      router.push('/main')
    }
    return {
      cardlist,
      detailsjump
    }
  },
  components: { WoptionView, HeadView }
}
</script>

<style>
.hotelbox{
  padding: 4px 0 4px 0;
  margin: 0 16px 0 16px;
  border-bottom: rgb(215, 215, 215) solid 1px;
  min-height: 5rem;
}
.hotel .goodimg{
  width: 100%;
  border-radius: 6px;
}
.hotel .goodtitle>*{
  font-family: '微软雅黑';
  text-align: left;
  margin: 4px 0 4px 0;
}
.hotel .goodtitle>:nth-child(3){
  font-size: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.hotel .goodprice{
  font-size: 14px;
  text-align: right;
  color: red;
}
.hotel{
  padding-bottom: 15%;
}

</style>

<template>
    <div class="book">
        <div class="feature" style="text-align: left; margin: 1rem 0 1rem 0;">预订价格</div>
        <div class="bookbox" v-for="item in mainlist.tickets" :key="item">
            <van-row>
                <van-col span="18" style="font-family: '微软雅黑' font-weight: 700" class="ticbox">
                  {{item.name}}
                </van-col>
            </van-row>
            <van-row style="height: 30px; margin-top: 0.5rem; font-size: 12px;">
              <van-col span="18" v-if="item.price != 0" style="color: red;">
                ￥{{item.price}}.00
              </van-col>
              <van-col span="18" v-if="item.price == 0"></van-col>
              <van-col span="6" style="height: 100%;">
                <van-button round type="primary" style="height: 100%;" @click="jumpAddorder(item.price, item.name)">
                  预订
                </van-button>
              </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import router from '@/router'
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

    const jumpAddorder = (price, name) => {
      const order = {
        price: price,
        name: name
      }
      localStorage.setItem('order', JSON.stringify(order))
      router.push('/addorder')
    }
    return {
      mainlist,
      jumpAddorder
    }
  }
}
</script>

<style>
    .book .van-col{
        text-align: left;
    }
    .bookbox{
        border: rgb(215, 215, 215) solid 1px;
        width: 90%;
        height: 50px;
        background-color: white;
        box-shadow: 0 1px 1px 0 rgba(192, 192, 192, 0.5);
        border-radius: 0.1rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .book{
        /* background-color: white; */
        border-radius: 1rem;
        /* margin: 1rem 0 1rem 0; */
        padding: 0 1rem 0 1rem;
    }
    .ticbox{
      height: 1.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
</style>

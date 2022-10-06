<template>
    <div class="book">
        <div class="feature" style="text-align: left; margin: 1rem 0 1rem 0;">景点门票</div>
        <div class="bookbox" v-for="item in booklist" :key="item">
            <van-row>
                <van-col span="18" style="font-family: '微软雅黑'; font-weight: 700;">门票({{item.name}})</van-col>
                <van-col span="6" style="font-size: 2px;">原价:￥25</van-col>
            </van-row>
            <van-row style="height: 30px;">
              <van-col span="18"></van-col>
              <van-col span="6" style="height: 100%;">
                <van-button round type="primary" style="height: 100%;" @click="jumpAddorder">预订</van-button>
              </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
  setup () {
    const booklist = ref([
      {
        name: '成人票',
        price: '24.5',
        num: 24001
      },
      {}
    ])
    const jumpAddorder = () => {
      router.push('/addorder')
    }
    return {
      booklist,
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
</style>

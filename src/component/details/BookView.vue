<template>
    <div class="book">
        <div class="feature" style="text-align: left; margin-bottom: 2rem;">景点门票</div>
        <div class="bookbox" v-for="item in booklist" :key="item">
            <van-row>
                <van-col span="20" style="font-family: '微软雅黑'; font-weight: 700;">门票({{item.name}})</van-col>
                <van-col span="4" style="font-size: 2px;">原价:￥25</van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const booklist = ref([
      {
        name: '成人票',
        price: '24.5',
        num: 24001
      }
    ])
    return {
      booklist
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
        height: 100px;
        background-color: white;
        box-shadow: 0 1px 1px 0 rgba(192, 192, 192, 0.5);
        border-radius: 0.1rem;
        padding: 1rem;
    }
    .book{
        /* background-color: white; */
        border-radius: 1rem;
        margin: 1rem 0 1rem 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
</style>

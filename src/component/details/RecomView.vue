<template>
    <div class="recom">
      <van-row>
        <van-col class="feature" span="18" style="text-align: left;">大家都喜欢</van-col>
      </van-row>
      <div class="recombox" v-for="item in recomlist" :key="item" style="margin: 0.5rem 0 0.5rem 0;">
        <van-row>
          <van-col span="8">
            <img :src="item.img" alt="" style="width: 100%; height: 70px; border-radius: 5px;">
          </van-col>

          <van-col span="16" style="padding-left: 0.5rem;" class="recomfond">

            <van-row style="font-weight: 700;">{{item.name}}</van-row>

            <van-row>
              <van-col span="6" style="color: white; background-color: #1989fa; border-radius: 5px;">
                <van-icon name="fire"></van-icon>
                {{item.point}}
              </van-col>
            </van-row>

            <van-row style="font-size: 3px; line-height: 15px;">
              门票
              <div style="font-size: 20px; color: red;">￥{{item.price}}</div>
              起
            </van-row>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const recomlist = ref([
      {
        name: '重庆欢乐谷',
        point: '7.6',
        price: 79,
        img: 'https://ts1.cn.mm.bing.net/th/id/R-C.0cbdc94f3439cffafbf3e25c1f3fc64f?rik=mdpxRzISFj5guQ&riu=http%3a%2f%2fimg.fotomen.cn%2f2015%2f01%2f20481.jpg&ehk=OD8XxEir6MEJvGmjg02ZW7GRWOksSCtqdaq7vnwRgh0%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        name: '武隆天生三桥',
        point: '8.2',
        price: 125,
        img: 'https://img.zcool.cn/community/010d5c5b9d17c9a8012099c8781b7e.jpg@1280w_1l_2o_100sh.jpg'
      },
      {
        name: '仙女山国家森林公园',
        point: '7.6',
        price: 50,
        img: 'https://pic1.zhimg.com/671d035f870f7348277637d35d175e44_r.jpg?source=1940ef5c'
      }
    ])
    return {
      recomlist
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

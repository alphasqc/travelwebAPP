<template>
    <div class="addorder">
      <div>

        <van-nav-bar title="订单填写" left-text="返回" left-arrow @click-left="onClickLeft" />

        <van-card
          :num="1"
          :price="tickets.price"
          :desc="tickets.name"
          :title="mainlist.name"
          :thumb="mainlist.img[3]"
        />

        <van-row justify="center">
          <van-col span="8">商品价格：</van-col>
          <van-col span="8">￥{{tickets.price}}.00</van-col>
        </van-row>
        <van-row justify="center">
          <van-col span="8">数量：</van-col>
          <van-col span="8">{{num}}</van-col>
        </van-row>
        <van-row justify="center">
          <van-col span="8">实付金额：</van-col>
          <van-col span="8">￥{{tickets.price*num}}.00</van-col>
        </van-row>
        <van-row style="height: 5rem; ">
          <van-col span="24">
            <van-cell-group inset>
              <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注"
                type="textarea"
                maxlength="50"
                placeholder="请输入留言"
                show-word-limit
              />
            </van-cell-group>
          </van-col>
        </van-row>

        <van-submit-bar :price="tickets.price*num*100" button-text="提交订单" @submit="onSubmit(mainlist, tickets, num)" />
      </div>
    </div>
</template>

<script>
import router from '@/router'
// import { Toast } from 'vant'
import { ref } from 'vue'
import { getHome, getMain } from '@/axios/api'
import axios from 'axios'

export default {
  name: 'AddrderView',
  setup () {
    // 返回
    const onClickLeft = () => {
      router.push('/main')
    }
    // 提交按钮事件
    const onSubmit = (mainlist, tickets, num) => {
    //   Toast('点击按钮')
      const orderlist = {
        name: mainlist.name,
        price: tickets.price,
        num: num,
        type: 1,
        img: mainlist.img[1],
        blog: 'orderlist',
        text: tickets.name
      }
      getHome('orderlist').then((res) => {
        // res.data.forEach(res => {
        axios.request({
          method: 'post',
          url: 'http://localhost:3000/orderlist/',
          data: orderlist
        })
        // })
      })
      router.push('/order')
    }
    const num = 1
    const message = ref('')
    // 接收列表
    const mainlist = ref([])
    const blog = JSON.parse(localStorage.getItem('main'))
    getMain(blog.blog, blog.id).then((res) => {
      mainlist.value = res.data
    })
    const tickets = JSON.parse(localStorage.getItem('order'))
    return {
      tickets,
      message,
      mainlist,
      num,
      onClickLeft,
      onSubmit
    }
  }
}
</script>

<style>
.addorder .van-row>:nth-child(2){
  color: red;
  text-align: right;
}
.addorder .van-row>:nth-child(1){
  text-align: left;
}
.addorder *{
  font-family: "微软雅黑";
}
.addorder .van-row>*{
  font-size: 14px;
}
.addorder .van-row{
  padding: 0.7rem 0 0.7rem 0;
  background-color: rgb(250, 250, 250);
  border-top: rgb(205, 205, 205) 1px solid;
}
</style>

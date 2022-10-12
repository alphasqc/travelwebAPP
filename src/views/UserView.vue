<template>
    <div class="user">
        <div class="usertop">
            <!-- <van-nav-bar border>
                <template #left>
                    <van-icon name="bars" size="24" />
                </template>
                <template #right>
                    <van-icon name="setting-o" size="24" />
                </template>
            </van-nav-bar> -->

            <img :src="imglist" alt="">
        </div>

        <div class="userhead" v-if="userlist.islogin">
            <img :src="userlist.userimg" alt="">
            {{userlist.name}}
        </div>

        <div class="userhead" v-if="!userlist.islogin" @click="jumpLogin">
            <img src="https://pic4.zhimg.com/50/v2-6afa72220d29f045c15217aa6b275808_hd.jpg?source=1940ef5c" alt="">
            请登录
        </div>

        <van-row justify="center" @click="infoJump">
            <van-col span="20">
                <van-icon name="user-o" color="#1989fa" />
                个人信息
            </van-col>
        </van-row>
        <van-row justify="center" @click="shoplistJump">
            <van-col span="20">
                <van-icon name="records" color="#1989fa" />
                我的订单
            </van-col>
        </van-row>
        <van-row justify="center" @click="loveJump">
            <van-col span="20">
                <van-icon name="star-o" color="#1989fa" />
                我的收藏
            </van-col>
        </van-row>
        <van-row justify="center" @click="histroyJump">
            <van-col span="20">
                <van-icon name="todo-list-o" color="#1989fa" />
                浏览历史
            </van-col>
        </van-row>
        <van-row justify="center" @click="exitUser">
            <van-col span="20">
                <van-icon name="revoke" color="#ee0a24" />
                退出登录
            </van-col>
        </van-row>
    </div>
</template>

<script>
import router from '@/router'

export default {
  setup () {
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    const imglist = 'https://www.yulumi.cn/gl/uploads/allimg/201128/1622554M7-0.jpg'
    // 内容功能
    const infoJump = () => {
      router.push('/infoview')
    }
    const shoplistJump = () => {
      router.push('/order')
    }
    const loveJump = () => {
      router.push('/loveview')
    }
    const histroyJump = () => {
      router.push('/histroy')
    }
    const exitUser = () => {
      userlist.islogin = false
      localStorage.setItem('userInfo', JSON.stringify(userlist))
      router.push('/home')
    }
    const jumpLogin = () => {
      router.push('/login')
    }
    return {
      userlist,
      imglist,
      infoJump,
      shoplistJump,
      loveJump,
      histroyJump,
      exitUser,
      jumpLogin
    }
  }
}
</script>

<style>
    .usertop{
        height: 10rem;
    }

    .userhead{
        width: 6rem;
        height: 6rem;
        border-radius: 5rem;
        border: rgb(162, 162, 162) solid 3px;
        background-color: black;
        margin: 0 auto;
        position: relative;
        top: -3rem;
    }

    .userhead img{
        height: 100%;
        width: 100%;
        border-radius: 5rem;
    }

    .user img{
        height: 100%;
        width: 100%;
    }

    .user .van-nav-bar{
        background-color: rgba(255, 255, 255, 0);
    }

    .user .van-col{
        font-size: 20px;
        height: 2rem;
        margin-bottom: 1rem;
        border-bottom: rgb(215, 215, 215) solid 1px;
        text-align: left;
    }

    .user .van-nav-bar{
        background-color: rgba(255, 255, 255, 0);
    }
</style>

<template>
    <div class="user">
        <div class="usertop">
            <van-nav-bar border>
                <template #left>
                    <van-icon name="bars" size="24" />
                </template>
                <template #right>
                    <van-icon name="setting-o" size="24" />
                </template>
            </van-nav-bar>

            <img :src="imglist" alt="">
        </div>

        <div class="userhead">
            <img :src="userimg" alt="">
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
            <van-col span="20" style="color:red">
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
    const imglist = 'https://www.yulumi.cn/gl/uploads/allimg/201128/1622554M7-0.jpg'
    const userimg = 'https://img2.woyaogexing.com/2020/06/19/02d268db09ff4e8e9608fd64adbbeed8!400x400.jpeg'
    // 内容功能
    const infoJump = () => {
      router.push('/info')
    }
    const shoplistJump = () => {
      router.push('/shoplist')
    }
    const loveJump = () => {
      router.push('/love')
    }
    const histroyJump = () => {
      router.push('/histroy')
    }
    const exitUser = () => {

    }
    return {
      imglist,
      userimg,
      infoJump,
      shoplistJump,
      loveJump,
      histroyJump,
      exitUser
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
        top: -1rem;
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

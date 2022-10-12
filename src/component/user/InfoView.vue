<template>
    <div class="info">
        <van-nav-bar
            title="修改个人信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

        <p v-if="!userlist.islogin" style="color: black;">暂未登录</p>
        <div v-if="userlist.islogin">
            <van-row style="margin: 3rem 0 3rem 0;" align="center">
                <van-col span="10">
                    <img :src="userlist.userimg" alt="">
                </van-col>
                <van-col span="14">
                    {{userlist.name}}
                </van-col>
            </van-row>

            <van-row>
                用户名:
            </van-row>
            <van-row>
                <van-col span="24">
                <van-cell-group inset >
                    <van-field v-model="username"  placeholder="请输入用户名" />
                </van-cell-group>
                </van-col>
            </van-row>

            <van-row style="margin-top: 1rem;">
                密码:
            </van-row>
            <van-row style="margin-bottom: 2rem;">
                <van-col span="24">
                <van-cell-group inset >
                    <van-field v-model="userpass"  placeholder="请输入密码" />
                </van-cell-group>
                </van-col>
            </van-row>

            <van-button type="primary" size="normal" style="width: 80%;" @click="userInfo">修改</van-button>
        </div>

    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
  setup () {
    // 返回上一级
    const onClickLeft = () => history.back()
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    const username = ref('')
    const userpass = ref('')
    const userInfo = () => {
      userlist.name = username.value
      userlist.password = userpass.value
      localStorage.setItem('userInfo', JSON.stringify(userlist))
      router.push('/user')
    }
    return {
      username,
      userpass,
      userlist,
      userInfo,
      onClickLeft
    }
  }
}
</script>

<style>
.info .van-row{
    margin-left: 1rem;
}
.info .van-col{
    text-align: left;
}
.info{
    min-height: 35.5rem;
    background-color: rgb(235, 235, 235);
}
.info .van-col img{
    margin-left: 2rem;
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
}
</style>

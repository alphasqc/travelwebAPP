<template>
    <div class="login">
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <p>请登录</p>
        <van-cell-group inset>
            <!-- 输入任意文本 -->
            <van-field v-model="logininfo.name" label="用户名" placeholder="请输入用户名" />
            <!-- 输入密码 -->
            <van-field v-model="logininfo.password" type="password" label="密码"  placeholder="请输入密码" />
        </van-cell-group>
        <van-row justify="center">
            <van-col span="18">
                <van-button type="primary" @click="userlogin">登录</van-button>
            </van-col>
        </van-row>
        <van-row justify="center">
            <van-col span="16">
                <a @click="jumpregist">没有账号？注册一个</a>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'
import { Dialog } from 'vant'

export default {
  setup () {
    const logininfo = ref({
      name: '',
      password: ''
    })
    const userinfo = JSON.parse(localStorage.getItem('userInfo'))
    // 返回上一页
    const onClickLeft = () => history.back()
    // 登录
    const userlogin = () => {
      if (logininfo.value.name === userinfo.name && logininfo.value.password === userinfo.password) {
        userinfo.islogin = true
        localStorage.setItem('userInfo', JSON.stringify(userinfo))
        router.push('/home')
      } else {
        Dialog.alert({
          message: '用户名或密码错误'
        }).then(() => {
          // on close
        })
      }
    }
    // 注册
    const jumpregist = () => {
      router.push('/regist')
    }
    return {
      logininfo,
      userinfo,
      onClickLeft,
      userlogin,
      jumpregist
    }
  }
}
</script>

<style>
    .login p{
        font-size: 40px;
        font-weight: 800;
        font-family: "微软雅黑";
        background: linear-gradient(to right, rgb(0, 204, 255), rgb(0, 255, 162));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
         /* 转变为行内块元素 文字渐变才会生效 */
        display: inline-block;
        margin-bottom: 5rem;
    }

    .login .van-row{
        margin-top: 4rem;
    }

    .login .van-button{
        width: 100%;
    }

    .login a{
        font-size: 14px;
        color: rgb(0, 179, 255);
        text-decoration: rgb(0, 179, 255) underline;
    }

    .login .van-field{
      border-bottom: rgb(215, 215, 215) solid 1px;
    }
</style>

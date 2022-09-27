<template>
    <div class="login">
        <p>Login</p>
        <van-cell-group inset>
            <!-- 输入任意文本 -->
            <van-field v-model="text" label="用户名" placeholder="请输入用户名" />
            <!-- 输入密码 -->
            <van-field v-model="password" type="password" label="密码"  placeholder="请输入密码" />
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

export default {
  setup () {
    const text = ref('')
    const password = ref('')
    const userlogin = () => {

    }
    const jumpregist = () => {
      router.push('/regist')
    }
    return {
      text,
      password,
      userlogin,
      jumpregist
    }
  }
}
</script>

<style>
    .login p{
        font-size: 50px;
        font-weight: 800;
        font-family: "微软雅黑";
        background: linear-gradient(to right, rgb(0, 204, 255), rgb(0, 255, 162));
        -webkit-background-clip: text;
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
</style>

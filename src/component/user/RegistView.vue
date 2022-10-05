<template>
    <div class="regist">
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <p>请注册</p>
        <van-cell-group inset>
            <!-- 输入任意文本 -->
            <van-field v-model="userinfo.name" type="text" label="用户名" placeholder="请输入用户名" />
            <!-- 输入密码 -->
            <van-field v-model="userinfo.password" type="password" label="密码" placeholder="请输入密码" />
            <!-- 再次输入密码 -->
            <van-field v-model="userinfo.aginpassword" type="password" label="密码" placeholder="请再一次输入密码" />
            <!-- 输入手机号，调起手机号键盘 -->
            <van-field v-model="userinfo.tel" type="tel" label="手机号" placeholder="请输入手机号码" />
            <!-- 输入邮箱，调起手机号键盘 -->
            <van-field v-model="userinfo.mail" type="text" label="邮箱" placeholder="请输入邮箱" />
            <!-- 短信验证码 -->
            <!-- <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" >
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
            </van-field> -->
        </van-cell-group>
        <van-row justify="center">
            <van-col span="18">
                <van-button type="primary" @click="userregist">注册</van-button>
            </van-col>
        </van-row>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
  setup () {
    const userinfo = ref({
      name: '',
      password: '',
      aginpassword: '',
      tel: '',
      mail: ''
    })
    // 返回上一页
    const onClickLeft = () => history.back()
    // 注册账号
    const userregist = () => {
      if (userinfo.value.password === userinfo.value.aginpassword) {
        localStorage.setItem('userInfo', JSON.stringify(userinfo.value))
        router.push('/login')
      }
    }
    return {
      userinfo,
      userregist,
      onClickLeft
    }
  }
}
</script>

<style>
    .regist p{
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

    .regist .van-row{
        margin-top: 4rem;
    }

    .regist .van-button{
        width: 100%;
    }

    .regist .van-field{
      border-bottom: rgb(215, 215, 215) solid 1px;
    }
</style>

<template>
    <div class="histroy">
        <van-nav-bar
            title="浏览历史"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
    <p v-if="!userlist.islogin" style="color: black;">暂未登录</p>
    <p style="font-size: 2px;color: rgb(155, 155, 155)" v-if="userlist.islogin">暂时没有浏览的历史</p>
</template>

<script>
export default {
  setup () {
    const onClickLeft = () => history.back()
    const userlist = JSON.parse(localStorage.getItem('userInfo'))
    return {
      userlist,
      onClickLeft
    }
  }
}
</script>

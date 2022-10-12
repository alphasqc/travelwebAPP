<template>
    <div class="love">
        <van-nav-bar
            title="收藏"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />

      <p v-if="!userlist.islogin" style="color: black;">暂未登录</p>
      <div v-if="userlist.islogin">

      </div>
    </div>
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

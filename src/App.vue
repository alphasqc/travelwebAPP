<template>
  <router-view/>
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="friends-o">好友</van-tabbar-item>
    <van-tabbar-item replace to="/like" icon="like-o">喜爱</van-tabbar-item>
    <van-tabbar-item replace to="/manager" icon="manager-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

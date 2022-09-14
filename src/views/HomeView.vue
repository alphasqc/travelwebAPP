<template>
  <div class="home">
    <van-nav-bar title="首页" left-text="" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

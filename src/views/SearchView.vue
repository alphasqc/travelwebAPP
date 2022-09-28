<template>
    <div class="search">
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft">
            <template #title>
                <van-search shape="round" placeholder="请输入搜索关键词" input-align="center" autofocus />
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
  setup () {
    const onClickLeft = () => history.back()
    return {
      onClickLeft
    }
  }
}
</script>

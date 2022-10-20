<template>
    <div class="area">
        <van-nav-bar title="城市选择页" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
        <!-- <van-row justify="center"  gutter="50">
            <van-col span="10"><van-button type="primary">推荐城市</van-button></van-col>
            <van-col span="10"><van-button type="primary">热门城市</van-button></van-col>
        </van-row> -->
        <van-row justify="center">
            <van-col span="20">
                <van-search shape="round" placeholder="请输入需要搜索的城市名称" input-align="center" class="searchcity" @click="testPos"/>
            </van-col>
        </van-row>
        <van-index-bar :sticky="false">
            <van-index-anchor v-for="(item,index) in citylist" :key="index" :index="index">
                <div>{{index}}</div>
                <van-cell :title="value.name" v-for="value in item" :key="value.id" @click="choosecity(value.name)" />
            </van-index-anchor>
        </van-index-bar>
    </div>
</template>

<style>
.van-row .van-search{
    margin-top: 3rem;
}
.van-cell{
    text-align: left;
}
</style>

<script>
import { getHome } from '@/axios/api'
import { getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'
import "@/mock/index"

export default {
  name: 'AreaView',
  setup () {
    const router = useRouter()
    // 返回上一页
    const onClickLeft = () => history.back()
    // 获取城市数据
    const citylist = ref('')
    // getHome('citylist').then((res) => {
    //   citylist.value = res.data
    // })
    // 城市选择
    // const name = ref('')
    const choosecity = (n) => {
    //   name.value = n
    //   this.$router.push({ name: 'home', params: { cityname: n } })
      sessionStorage.setItem('key', n)
      router.push('/home')
    }
    const { proxy } = getCurrentInstance()
    const testPos = () => {
      getHome('user').then((res) => {
        console.log(res.data.data)
      })
    }
    return {
    //   name,
      citylist,
      choosecity,
      testPos,
      onClickLeft
    }
  }
}
</script>

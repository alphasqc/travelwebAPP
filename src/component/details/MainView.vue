<template>
    <div class="main">
      <!-- 功能菜单 -->
      <van-popup class="optionjump" v-model:show="show" round position="top" :style="{ height: '30%' }" closeable close-icon="close">
        <div @click="jumphome"><van-icon name="home-o" size="20" />首页</div>
        <div @click="jumpcart"><van-icon name="cart-o" size="20" />购物车</div>
        <div @click="jumpuser"><van-icon name="user-o" size="20" />个人</div>
        <div @click="jumpsearch"><van-icon name="search" size="20" />搜索</div>
      </van-popup>
      <!-- 顶部 -->
        <van-nav-bar left-arrow @click-left="onClickLeft" :fixed="true">
            <template #right>
                <van-icon name="share-o" @click="showShare = true" size="1.5em" />
                <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
                <van-icon name="apps-o" @click="showPopup" size="1.5rem" />
            </template>
        </van-nav-bar>

        <van-tabs sticky color="#1989fa" scrollspy offset-top="2.5rem">
          <!-- 标签选项卡 -->
          <van-tab title="概况">
            <TitleView></TitleView>
          </van-tab>
          <!-- 中部banner -->
          <img :src="topbanner" alt="" style="width: 100%; border-radius: 5rem;">
          <van-tab title="预订">
            <BookView></BookView>
          </van-tab>
          <van-tab title="点评">
            <WriteView></WriteView>
          </van-tab>
          <van-tab title="推荐">
            <RecomView></RecomView>
          </van-tab>
          <!-- 底部banner -->
          <img :src="botbanner" alt="" style="width: 100%;">
        </van-tabs>

        <!-- 底部功能 -->
        <van-action-bar sticky>
            <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
            <van-action-bar-icon icon="edit" text="点评" color="#ff5000" />
            <van-action-bar-icon id="collection" icon="star-o" text="收藏" color="#ff5000" @click="changecollection" />
            <van-action-bar-button type="primary" text="查看门票" />
        </van-action-bar>
    </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router'
import TitleView from './TitleView.vue'
import BookView from './BookView.vue'
import WriteView from './WriteView.vue'
import RecomView from './RecomView.vue'

export default {
  name: 'MainView',
  components: {
    TitleView,
    BookView,
    WriteView,
    RecomView
  },
  setup () {
    // 返回上一页
    const onClickLeft = () => history.back()
    // 分享
    const showShare = ref(false)
    const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' }
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' }
      ]
    ]
    // 收藏
    const changecollection = () => {
      document.getElementById('collection').text = '已收藏'
      console.log(document.getElementById('collection').text)
    }
    // 菜单弹出
    const show = ref(false)
    const showPopup = () => {
      show.value = true
    }
    // 菜单功能跳转
    const jumphome = () => {
      router.push('/home')
    }
    const jumpcart = () => {
      router.push('/shopcart')
    }
    const jumpsearch = () => {
      router.push('/search')
    }
    const jumpuser = () => {
      router.push('/user')
    }
    // banner
    const topbanner = 'https://img1.baidu.com/it/u=2514092501,2929400689&fm=253&fmt=auto&app=138&f=JPEG?w=1600&h=500'
    const botbanner = 'https://img.zcool.cn/community/0153c858e4ba69a801219c77cb0a25.jpg@1280w_1l_2o_100sh.jpg'
    return {
      show,
      options,
      showShare,
      topbanner,
      botbanner,
      jumphome,
      jumpcart,
      jumpsearch,
      jumpuser,
      showPopup,
      changecollection,
      onClickLeft
    }
  }
}
</script>

<style>
  .main{
    margin: 0;
    padding: 0;
  }

.optionjump>div{
  border-radius: 0.3rem;
  border: rgb(215, 215, 215) solid 1px;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main .van-popup div .van-icon{
  margin: 0;
}
.optionjump{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main .van-action-bar{
    border-top: rgb(215, 215, 215) solid 1px;
}
.main .van-nav-bar{
    background-color: rgba(255, 255, 255, 1);
}
.main .van-nav-bar .van-icon {
    margin: 0.7rem;
}
.main .van-tabs{
  margin-top: 3rem;
}
.main{
  background-color: rgb(238, 238, 238);
}
</style>

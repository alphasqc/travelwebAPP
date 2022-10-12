<template>
    <div class="write">
      <van-row>
        <van-col class="feature" span="18" style="text-align: left;">用户点评</van-col>
        <van-col span="6" style="font-size: 10px; color: #1989fa;" @click="jumpWrite">查看全部<van-icon name="arrow"  color="#1989fa"></van-icon></van-col>
      </van-row>
      <div class="writebox" v-for="item in writelist.slice(0,2)" :key="item" style="margin-top: 0.5rem;">

        <van-row style="display: flex; align-items: center;">
          <van-col span="20" style="line-height: 1rem; text-align: left;">
            <img :src="item.userimg" alt="" style="height: 1.5rem; width: 1.5rem; border-radius: 3rem;">
            {{item.name}}
          </van-col>
          <van-col span="4" style="text-align: left; color: white; border-radius: 5px; background-color: #1989fa;">
            <van-icon name="like" color="white"></van-icon>
            {{item.point}}
          </van-col>
        </van-row>

        <van-row style="margin-top: 0.5rem;">
          <van-col span="24" >
            <div class="writetext">
              {{item.text}}
            </div>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="8" style="padding: 0.5rem;" v-for="img in item.img.slice(0,3)" :key="img">
            <img :src="img" alt="" style="width: 100%; height: 5rem; border-radius: 5px;">
          </van-col>
        </van-row>

      </div>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'
import { foundData, getHome } from '@/axios/api'

export default {
  setup () {
    // const writelist = ref([
    //   {
    //     userimg: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.zuSiNGBrUKRyk1FAyNSvqQAAAA?pid=ImgDet&rs=1',
    //     username: '用户1',
    //     point: '5.0',
    //     text: '啊发大水发射点发阿道夫阿迪斯发手动阀手动阀多发点算法发生发大水发到付啊手动阀阿迪斯发到付阿道夫爱的色放爱的色放爱的色放啊啊手动阀的说法的说法多发点发大水发生发大多数发的方法地方',
    //     img: [
    //       'https://tse1-mm.cn.bing.net/th/id/OIP-C.C94PultWjuRDo2oRMnpdygHaFj?pid=ImgDet&rs=1',
    //       'https://youimg1.c-ctrip.com/target/10021f000001gxelv1DD4_D_10000_1200.jpg?proc=autoorient',
    //       'https://img.zcool.cn/community/01f6dc5a74149ba80120a12366a277.jpg@1280w_1l_2o_100sh.jpg',
    //       'https://youimg1.c-ctrip.com/target/10021f000001gxelv1DD4_D_10000_1200.jpg?proc=autoorient'
    //     ]
    //   },
    //   {
    //     userimg: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.FPXCAFQlqji01hPxcgVX9AAAAA?pid=ImgDet&rs=1',
    //     username: '用户2',
    //     point: '2.0',
    //     text: '啊发大水发射点发阿道夫阿迪斯发手动阀手动阀多发点算法发生发大水发到付啊手动阀阿迪斯发到付阿道夫爱的色放爱的色放爱的色放啊啊手动阀的说法的说法多发点发大水发生发大多数发的方法地方',
    //     img: [
    //     ]
    //   }
    // ])

    // 卡片数据获取
    const writelist = ref('')
    getHome('writelist').then((res) => {
      writelist.value = res.data
    })

    const jumpWrite = () => {
      router.push('/allwrite')
    }

    // 接收列表
    const mainlist = ref({})
    const blog = JSON.parse(localStorage.getItem('main'))
    foundData('writelist', blog.blog, blog.id).then((res) => {
      mainlist.value = res.data
    })
    return {
      writelist,
      mainlist,
      jumpWrite
    }
  }
}
</script>

<style>
    .write{
        background-color: white;
        border-radius: 1rem;
        margin: 0.5rem 0 1rem 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
    .writetext{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 10px;
    text-align: left;
    }
</style>

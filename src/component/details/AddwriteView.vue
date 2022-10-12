<template>
    <div class="addwrite">
        <van-nav-bar
            title="点评"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        >
        </van-nav-bar>

        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="point"
                name="评分"
                label="评分"
                placeholder="0~5"
                :rules="[{ required: true, message: '请填写评分' }]"
                />
                <van-field
                v-model="text"
                name="评论"
                label="评论"
                placeholder="评论"
                :rules="[{ required: true, message: '请填写评论' }]"
                style="height: 5rem;"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { getHome } from '@/axios/api'
import router from '@/router'

export default {
  setup () {
    const onClickLeft = () => history.back()
    const point = ref('')
    const text = ref('')
    // 接收列表
    const blog = JSON.parse(localStorage.getItem('main'))
    const user = JSON.parse(localStorage.getItem('userInfo'))
    const onSubmit = (values) => {
      const addwrite = {
        userimg: user.userimg,
        name: user.name,
        text: text.value,
        img: [],
        blog: blog.blog,
        point: point.value,
        blogid: blog.id
      }
      console.log(addwrite)
      getHome('writelist').then((res) => {
        axios.request({
          method: 'post',
          url: 'http://localhost:3000/writelist/',
          data: addwrite
        })
      })
      router.push('/allwrite')
    }

    return {
      point,
      text,
      onSubmit,
      blog,
      onClickLeft
    }
  }
}
</script>

<style>
</style>

<template>
    <div class="card">
      <div class="cardbox">
        <div class="cardblock" v-for="(item,index) in cardlist" :key="index<10">
          <img :src="item.img.url[4]" />
          <div class="cardinfo">
            <div class="cardname">{{item.name}}</div>
            <div class="cardtitle">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { getHome } from '@/axios/api'

export default {
  name: 'CardView',
  setup () {
    // 卡片数据获取
    const cardlist = ref('')
    getHome('hotlist').then((res) => {
      cardlist.value = res.data
    })
    return {
      cardlist
    }
  }
}
</script>

<style>
.card{
  margin-top: 1rem;
}

.cardbox{
  width: 100%;
  display: flex;
  flex-wrap:wrap;
}

.cardblock{
  width: 45%;
  height: 14rem;
  margin: 0.5rem;
  position: relative;
}

.cardblock img{
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.cardinfo{
  width: 100%;
  height: 40%;
  background-color: rgba(67, 67, 67, 0.5);
  border-radius: 0 0 0.5rem 0.5rem;
  position:absolute;
  bottom: 0px;
}

.cardname{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: white;
    text-align: left;
    margin-bottom: 1rem;
}

.cardtitle{
    height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 5px;
    color: rgb(215, 215, 215);
}
</style>

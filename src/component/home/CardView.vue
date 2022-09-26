<template>
    <div class="card">
      <div class="cardbox">
        <div class="cardblock" v-for="(item,index) in cardlist" :key="index">
          <van-image :src="item" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardView',
  setup () {
    const cardlist = [
      'https://pic4.zhimg.com/v2-32990e9dec46d02093ae075556ea8d3b_r.jpg',
      'https://pic3.zhimg.com/v2-47ff409d2292b4283872fc4b498a8ed2_r.jpg',
      'https://youimg1.c-ctrip.com/target/100416000001071f25417.jpg',
      'https://pic1.zhimg.com/v2-ca15c6012d5154f9a20d48a15a27add4_r.jpg',
      'https://pic1.zhimg.com/v2-1283759aaab0ba368a376208243beb98_r.jpg?source=1940ef5c',
      'https://pic2.zhimg.com/v2-7a03a229ab4c6849581305977034c861_r.jpg',
      'https://youimg1.c-ctrip.com/target/100d14000000vsxma1CFE.jpg',
      'https://pic3.zhimg.com/v2-5df4775f7de93ed29ce4fe06ac39378a_b.jpg',
      'https://youimg1.c-ctrip.com/target/10050x000000lb2nq574B.jpg',
      'https://pic1.zhimg.com/v2-7c48f35d18a992eecea100d590312879_r.jpg?source=1940ef5c'
    ]
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
}

.van-image{
  width: 100%;
  height: 100%;
}
</style>

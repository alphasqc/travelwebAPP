<template>
    <div class="woption">
        <div class="toptaps">
            <!-- <div><van-icon @click="jumpWallet" name="location-o" size="35" />景点</div>
            <div><van-icon @click="jumpHotel" name="location-o" size="35" />酒店</div>
            <div><van-icon @click="jumpFood" name="location-o" size="35" />美食</div>
            <div><van-icon @click="jumpRound" name="location-o" size="35" />周边游</div> -->

            <div @click="jumpWallet">
              <img src="@/assets/景点.svg">景点
            </div>
            <div @click="jumpHotel">
              <img src="@/assets/酒店.svg">酒店
            </div>
            <div @click="jumpFood">
              <img src="@/assets/美食.svg">美食
            </div>
            <div @click="jumpRound">
              <img src="@/assets/周边游.svg">周边游
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'

export default {
  setup () {
    const jumpWallet = () => {
      router.push('/wallet')
    }
    const jumpHotel = () => {
      router.push('/hotel')
    }
    const jumpFood = () => {
      router.push('/food')
    }
    const jumpRound = () => {
      router.push('/round')
    }
    return {
      jumpWallet,
      jumpHotel,
      jumpFood,
      jumpRound
    }
  }
}
</script>

<style>
.toptaps{
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-around;
}
.toptaps>div{
  width: 3rem;
  height: 4rem;
  font-size: 12px;
}
.woption img{
  height: 40px;
  width: 40px;
}
</style>

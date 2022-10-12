<template>
    <div class="guide" style="height: 29rem">
        <div id="container" style="height: 100%;width: 100%;"></div>
    </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref } from 'vue'

export default {
  setup () {
    const map = ref('')
    AMapLoader.load({
      key: 'dc17136d1eed4f0b7c9a515a62b6eeac', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '1.4.15', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      AMapUI: { // 是否加载 AMapUI，缺省不加载
        version: '1.1', // AMapUI 缺省 1.1
        plugins: [] // 需要加载的 AMapUI ui插件
      },
      Loca: { // 是否加载 Loca， 缺省不加载
        version: '1.3.2' // Loca 版本，缺省 1.3.2
      }
    }).then((AMap) => {
      map.value = new AMap.Map('container', {
        zoom: 11, // 级别
        center: [106.596183, 29.425873], // 中心点坐标
        viewMode: '3D' // 使用3D视图
      })
    }).catch(e => {
      console.log(e)
    })
    return {
      map
    }
  }
}
</script>

<style>
.guide{
    width: 100%;
    height: 32rem;
    /* border: red solid 2px; */
}
</style>

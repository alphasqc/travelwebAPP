import Mock from 'mockjs'
Mock.mock("/api/info", {
  name: "zs",
  password: 123
})
Mock.mock('/api', {
  imgurl: [
    {
      id: 1,
      banner: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew9.photophoto.cn%2F20150331%2Fhaibianlvyoudujialunbohaibao-00641876_1.jpg&refer=http%3A%2F%2Fpicnew9.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666319961&t=b7981f93bec93762db992111f440b5fa'
    },
    {
      id: 2,
      banner: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmaterials.cdn.bcebos.com%2Fimages%2F827301%2F24c12dc1488705e407558aa533da736f.jpeg&refer=http%3A%2F%2Fmaterials.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666319987&t=4e2314af1f765df1b8456dee9660aa37'
    },
    {
      id: 3,
      banner: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100a0l000000daqmqF1CD.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666320027&t=b71d9081c442801029c470e772d10af7'
    },
    {
      id: 4,
      banner: 'https://img.zcool.cn/community/01eb965a61b3e2a8012113c721d292.jpg@1280w_1l_2o_100sh.jpg'
    }
  ]
})

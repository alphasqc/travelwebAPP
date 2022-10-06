import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1. 引入你需要的组件
import { SubmitBar, ShareSheet, ActionBar, ActionBarIcon, ActionBarButton, Field, CellGroup, Image as VanImage, Tab, Tabs, Swipe, SwipeItem, Search, Popup, Tabbar, TabbarItem, Button, NavBar, Icon, Cell, IndexBar, IndexAnchor, Col, Row, PullRefresh } from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'
import '@/assets/iconfont/iconfont.css'

// import { http } from '@/axios/api'
import '@/mock/index'

const app = createApp(App)

// app.config.globalProperties.$axios = http

app.use(store)
app.use(router)

app.use(Swipe)
app.use(SwipeItem)
app.use(Cell)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Popup)
app.use(Search)
app.use(IndexBar)
app.use(IndexAnchor)
app.use(Col)
app.use(Row)
app.use(PullRefresh)
app.use(Tab)
app.use(Tabs)
app.use(VanImage)
app.use(Field)
app.use(CellGroup)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(ShareSheet)
app.use(SubmitBar)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1. 引入你需要的组件
import { Search, Popup, Tabbar, TabbarItem, Button, NavBar, Icon } from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Popup)
app.use(Search)
app.mount('#app')

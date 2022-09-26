import { createRouter, createWebHashHistory } from 'vue-router'
import AreaView from '../views/AreaView.vue'
import HomeView from '../views/HomeView.vue'
import WalletView from '../views/WalletView.vue'
import GuideView from '../views/GuideView.vue'
import UserView from '../views/UserView.vue'
import OptionsView from '../component/home/OptionsView.vue'
import SwiperView from '../component/home/SwiperView.vue'
import CardView from '../component/home/CardView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: WalletView
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/area',
    name: 'area',
    component: AreaView
  },
  {
    path: '/options',
    name: 'options',
    component: OptionsView
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: SwiperView
  },
  {
    path: '/card',
    name: 'card',
    component: CardView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

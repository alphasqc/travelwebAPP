import { createRouter, createWebHashHistory } from 'vue-router'
import WalletView from '../views/WalletView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

import OptionsView from '../component/home/OptionsView.vue'
import SwiperView from '../component/home/SwiperView.vue'
import SearchView from '../component/home/SearchView.vue'
import GuideView from '../component/home/GuideView.vue'
import CardView from '../component/home/CardView.vue'
import AreaView from '../component/home/AreaView.vue'
import HotView from '../component/home/HotView.vue'

import RegistView from '../component/user/RegistView.vue'
import LoginView from '../component/user/LoginView.vue'

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
  },
  {
    path: '/hot',
    name: 'hot',
    component: HotView
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/regist',
    name: 'regist',
    component: RegistView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WalletView from '../views/WalletView.vue'
import GuideView from '../views/GuideView.vue'
import UserView from '../views/UserView.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

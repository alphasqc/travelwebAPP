import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LikeView from '../views/LikeView.vue'
import ManagerView from '../views/ManagerView.vue'

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
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/like',
    name: 'like',
    component: LikeView
  },
  {
    path: '/Manager',
    name: 'Manager',
    component: ManagerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

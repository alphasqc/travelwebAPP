import { createRouter, createWebHashHistory } from 'vue-router'
import ShopcartView from '../views/ShopcartView.vue'
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

import MainView from '../component/details/MainView.vue'
import TitleView from '../component/details/TitleView.vue'
import BookView from '../component/details/BookView.vue'
import WriteView from '../component/details/WriteView.vue'
import RecomView from '../component/details/RecomView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: WalletView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/area',
    name: 'area',
    component: AreaView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/options',
    name: 'options',
    component: OptionsView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: SwiperView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/card',
    name: 'card',
    component: CardView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/hot',
    name: 'hot',
    component: HotView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/regist',
    name: 'regist',
    component: RegistView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopcartView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/title',
    name: 'title',
    component: TitleView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/book',
    name: 'book',
    component: BookView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/write',
    name: 'write',
    component: WriteView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/recom',
    name: 'recom',
    component: RecomView,
    meta: {
      showTabbar: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

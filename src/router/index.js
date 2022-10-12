import { createRouter, createWebHashHistory } from 'vue-router'
import OrderView from '../views/OrderView.vue'
import WalletView from '../views/WalletView.vue'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

import OptionsView from '../component/home/OptionsView.vue'
import SwiperView from '../component/home/SwiperView.vue'
import SearchView from '../component/home/SearchView.vue'
import GuideView from '../component/home/GuideView.vue'
import CardView from '../component/home/CardView.vue'
import AreaView from '../component/home/AreaView.vue'
import PlanView from '../component/home/PlanView.vue'
import HotView from '../component/home/HotView.vue'

import RegistView from '../component/user/RegistView.vue'
import LoginView from '../component/user/LoginView.vue'
import InfoView from '../component/user/InfoView.vue'
import LoveView from '../component/user/LoveView.vue'
import HistroyView from '../component/user/HistroyView.vue'

import MainView from '../component/details/MainView.vue'
import TitleView from '../component/details/TitleView.vue'
import BookView from '../component/details/BookView.vue'
import WriteView from '../component/details/WriteView.vue'
import RecomView from '../component/details/RecomView.vue'
import AllwriteView from '../component/details/AllwriteView.vue'

import AddorderView from '../component/order/AddorderView.vue'
import AllorderView from '../component/order/AllorderView.vue'
import PaidorderView from '../component/order/PaidorderView.vue'
import UseorderView from '../component/order/UseorderView.vue'
import WriteorderView from '../component/order/WriteorderView.vue'

import HeadView from '../component/wallect/HeadView.vue'
import FoodView from '../component/wallect/FoodView.vue'
import HotelView from '../component/wallect/HotelView.vue'
import WoptionView from '../component/wallect/WoptionView.vue'
import RoundView from '../component/wallect/RoundView.vue'
import ScenView from '../component/wallect/ScenView.vue'

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
      showTabbar: false
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
    path: '/order',
    name: 'order',
    component: OrderView,
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
  },
  {
    path: '/addorder',
    name: 'addorder',
    component: AddorderView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/headview',
    name: 'headview',
    component: HeadView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/writeorderview',
    name: 'writeorderview',
    component: WriteorderView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/useorderview',
    name: 'useorderview',
    component: UseorderView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/paidorderview',
    name: 'paidorderview',
    component: PaidorderView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/allorderview',
    name: 'allorderview',
    component: AllorderView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/loveview',
    name: 'loveview',
    component: LoveView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/infoview',
    name: 'infoview',
    component: InfoView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/histroy',
    name: 'histroy',
    component: HistroyView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/plan',
    name: 'plan',
    component: PlanView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/woption',
    name: 'woption',
    component: WoptionView,
    meta: {
      showTabbar: false
    }
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: HotelView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/round',
    name: 'round',
    component: RoundView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/allwrite',
    name: 'allwrite',
    component: AllwriteView,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/scen',
    name: 'scen',
    component: ScenView,
    meta: {
      showTabbar: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SsoSignin from '../views/SsoSignin.vue'
import TradingView from '../components/TVChartContainer.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/tv',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'SsoSignin',
    component: SsoSignin
  },
  {
    path: '/tradingview',
    name: 'TradingView',
    component: TradingView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

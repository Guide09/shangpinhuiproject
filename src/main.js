import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
Vue.config.productionTip = false
// 引入仓库
import store from '@/store'

// 引入mock
import '@/mock/mockserve.js'

// 引入swiper样式
import 'swiper/css/swiper.css'
// 三级联动全局注册
import Typenav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//第一个参数：全局组件的名字
// 第二个参数：哪一个组件
Vue.component(Typenav.name,Typenav)
Vue.component(Carousel.name,Carousel)

new Vue({
  render: h => h(App),
  // 注册路由  router一定是小写
  router,
  // 组件实例的身上会有$store属性
  store
}).$mount('#app')

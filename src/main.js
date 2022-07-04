import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false

// 三级联动全局注册
import Typenav from '@/pages/Home/TypeNav'
//第一个参数：全局组件的名字
// 第二个参数：哪一个组件
Vue.component(Typenav.name,Typenav)


new Vue({
  render: h => h(App),
  // 注册路由  router一定是小写
  router
}).$mount('#app')

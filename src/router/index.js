// 路由的配置
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用VueRouter插件
Vue.use(VueRouter)


// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// 先把vuerouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数告诉原来push方法，你往哪里跳转（传递哪些参数）
// call、apply都可以传递参数、都可以篡改函数的上下文一次，不同点就是call传递参数用逗号，apply用数组
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve.reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})

    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve.reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})

    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true },
        }, {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name: "search",
            // 路由组件能不能传递props数据
            // 1、布尔组写法：params
            props:true, 
            // 2、对象写法 额外传递一些信息
            // props:{a:1,b:2}
            // 3、***函数写法
            // props: ($route) => ({keyword: $route.params.keyword, k: $route.query.k})
        }, {
            path: '/login',
            component: Login,
            meta: { show: false },
        }, {
            path: '/register',
            component: Register,
            meta: { show: false },
        }, {
            path: '*',
            redirect: '/Home'
        },
    ]
})


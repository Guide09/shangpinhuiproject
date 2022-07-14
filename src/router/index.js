// 路由的配置
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用VueRouter插件
Vue.use(VueRouter)
// 路由导航 为了简便东西少一点
import routes from './routes'

// 先把vuerouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数告诉原来push方法，你往哪里跳转（传递哪些参数）
// call、apply都可以传递参数、都可以篡改函数的上下文一次，不同点就是call传递参数用逗号，apply用数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve.reject)
    } else {
        originPush.call(this, location, () => { }, () => { })

    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve.reject)
    } else {
        originPush.call(this, location, () => { }, () => { })

    }
}

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return {y:0}
    },
})


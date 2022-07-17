// 路由配置信息

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'

export default [
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
    },{
        path: '/detail/:skuid',
        component: Detail,
        meta: { show: false },
    },{
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true },
    },
]
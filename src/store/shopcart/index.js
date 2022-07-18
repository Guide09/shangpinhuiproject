import { reqShopCart } from '@/api'
const state = {
    cartList: []
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    // 获取购物车列表的数据
    async getCartList({ commit }) {
        // 接口没数据data  临时加死数据7.18 23点
        let result = {
            "code": 200,
            "message": "成功",
            "data": [
                {
                    "id": 61,
                    "userId": "2",
                    "skuId": 4,
                    "cartPrice": 5999,
                    "skuNum": 4,
                    "imgUrl": "http://192.168.200.128:8080xxx.jpg",
                    "skuName": "Apple iPhone 11 (A2223) ",
                    "isChecked": 1,
                    "skuPrice": 5999
                },
                {
                    "id": 62,
                    "userId": "2",
                    "skuId": 2,
                    "cartPrice": 5499,
                    "skuNum": 1,
                    "imgUrl": "http://192.168.200.128:8080/yyyy.jpg",
                    "skuName": "Apple iPhone 11 (A2223) 64GB 红色",
                    "isChecked": 0,
                    "skuPrice": 5499
                }
            ],
            "ok": true
     }
        // await reqShopCart()
        // 测试是否能捞到数据
        console.log(result);
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    // cartInfoList(state) {
    //     return state
    // }
}

export default {
    state, mutations, actions, getters
}
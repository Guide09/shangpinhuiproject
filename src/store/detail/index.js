import { reqGoodsInfo, reqAddOrUpadateShopCart } from '@/api'
const state = {
    goodInfo: {}
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的actions
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    // 将产品添加到购物车
    // 服务器写入数据成功，服务器没有返回数据不需要其它操作
    async AddOrUpadateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpadateShopCart(skuId, skuNum)
        console.log(result);
        //如果这个函数执行会返回一个promise
        if(result.code == 200){
            return 'ok'
        }else{
            return  Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    // 产品的属性
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList || []
    }
}


export default {
    state, mutations, actions, getters
}


import { reqGoodsInfo, reqAddOrUpdateCart } from '@/api'
// 生成随机的字符串id 不能变
import {GETUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    // 顾客的临时身份
    uuid_token:GETUUID()
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
    //加入购物车|将来修改商品个数的地方,右侧是载荷对象【两个K,两个V】
    async addOrUpdateCart({ commit }, {skuId,skuNum}) {
        //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
        //skuId 注意大小写 2022-07-18
        let result = await reqAddOrUpdateCart(skuId,skuNum);
        if (result.code == 200) {
            //如果加入购物车成功,返回promise即为成功
            return "ok";
        } else {
            //如果加入购物车失败，返回失败的Promise
            return Promise.reject(new Error('faile'))
            // return Promise.reject();
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


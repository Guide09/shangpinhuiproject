// search模块的小仓库
import { reqGetSearchInfo } from '@/api/index'
const state = {
    searchList: {},
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    },
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    },
};
// 计算属性，在项目当中作用：为了简化仓库中的数据而生
const getters = {
    // 当前形参state当前仓库的数据，并非大仓库的state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    },

};



export default {
    state,
    mutations,
    actions,
    getters
}
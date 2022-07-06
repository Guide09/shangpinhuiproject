
import { reqCategory } from '@/api/index'
//仓库存储数据的地方
const state = {
    categoryList: []
};
//唯一可以修改仓库数据地方【工人】
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategory()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    }
};
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}





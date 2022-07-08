
import { reqCategoryList, reqBannerList, reqFloorList } from '@/api/index'
//仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};

//唯一可以修改仓库数据地方【工人】
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
};
const actions = {
    async getcategoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data)
        }
    },
    // 获取首页轮播图的
    async getBannerList({ commit }) {
        let result = await reqBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
            console.log(result.data);
        }
    },
    // 获取首页轮播图的
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
            console.log(result.data);
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





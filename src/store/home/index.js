
import {reqCategory} from '@/api'
//仓库存储数据的地方
let state = {
    category: [],
};
//唯一可以修改仓库数据地方【工人】
let mutations = {
    GETCATEGORY(state, category) {
        state.category = category;
    }
};
let actions = {
    async getCategory({commit}){
        let result = await reqCategory();   
        if (result.code == 200) {
            commit("GETCATEGORY", result.data);
            console.log(result.data)
        }
    },
};
let getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}





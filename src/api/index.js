// 当前这个模块，对api进行管理
import requests from "./request";


// 三级联动效果
// /api/product/getBaseCategoryList get 无参数
    // 发请求：axios发请求返回结果Promise对象
 
export const reqCategory = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

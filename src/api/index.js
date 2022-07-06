//统一管理项目前部的接口
import ajax from "./request";


export const reqCategory = () => ajax({url: '/api/product/getBaseCategoryList'});




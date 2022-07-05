//统一管理项目前部的接口
import requests from "./request";


export const reqCategory = () => requests({ method: 'get', url: '/product/getBaseCategoryList'});




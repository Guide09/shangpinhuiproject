//统一管理项目前部的接口
import requests from "./request";
import mockrequests from "./mockrequest";
//封装函数:复用
//将来这个函数可以在别的地方使用,需要对外暴露【分别暴露】
//获取商品分类的数据
export const reqCategoryList = () => requests({ method: 'get', url: '/product/getBaseCategoryList' });



//获取首页轮播图数据的接口
export const reqBannerList = () => mockrequests({ url: '/banner', method: 'get' });
// 家用电器 手机通讯那一块的数据接口
export const reqFloorList = () => mockrequests({ url: '/floor', method: 'get' });
// 获取搜索数据模块数据，地址/api/list 请求方式：post需要带参数 
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
// params至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post' ,data:params});


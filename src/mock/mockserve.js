import Mock from 'mockjs'

// 把json数据格式引入[json]没有对外暴露
// webpack默认对外暴露：图片、json数据格式
import banner from './banner.json'
import floor from './floor.json'


// Mock数据：第一个参数是请求地址 第二个参数是：发送数据
 Mock.mock("/mock/banner",{code:200,data:banner})
 Mock.mock("/mock/floor",{code:200,data:floor})
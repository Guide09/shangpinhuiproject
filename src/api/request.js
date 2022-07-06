// 对axios进行二次封装
import axios from "axios"; // 引入axios模块

// 引入NProgress js文件和css文件 进度条插件
import NProgress from "nprogress"; // 在发起ajax请求的时候，显示进度条
import "nprogress/nprogress.css"; // 引入进度条的css样式文件

// 配置ajax请求超时时间
axios.defaults.timeout = 5000;


// post的请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";


// 配置 请求 拦截器
axios.interceptors.request.use((config) => {
  NProgress.start(); // 开启进度条
  return config;
}, (error) => {
  return Promise.error(error);
}
);

// 配置 响应 拦截器
axios.interceptors.response.use((response) => {
    NProgress.done(); // 关闭进度条
    // 过滤一下
    if (response.status === 200) {
      // response.data表示服务器端响应的数据
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    console.log(error);
  }
);


// ajax("/manager/api/auth/admin/login",{username,password},'post').then(success).catch(error)
export default function ajax({ url = "", params = {}, type = "GET" }) {
  let promise;
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() === "GET") {
      promise = axios.get(url, params);
    } else if (type.toUpperCase() === "POST") {
      promise = axios({
        method: "post",
        url,
        data: params,
      });
    }

    promise.then((response) => {
      // 成功的时候
      resolve(response);
      console.log('接口调用成功',response)
    })
    
      .catch((error) => {
        // 失败的时候
        reject(error);
      });
  });
}




//对于axios进行二次封装
import axios from "axios";

//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

//axios.create方法执行,其实返回一个axios和request一样的
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
    nprogress.start();

    return config;
});


//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (err) => {
    alert(err.message);
    //终止Promise链
    return new Promise();
});

export default requests;





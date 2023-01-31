//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
//在当前模块中引入store
import store from '@/store';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";
//底下的代码也是创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  //现在的问题是config是什么?配置对象
  //可以让进度条开始动
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId):和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  return config;
});

// 响应拦截器
requests.interceptors.request.use((res)=>{
    // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事
    // 进度条开始结束
    nprogress.done()
    return res.data
},(err)=>{
    // 响应失败的回调函数
    // return Promise.reject(new err('faile'))
    alert(err)
})

// 对外暴露
export default axios
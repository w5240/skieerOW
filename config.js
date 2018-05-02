/*
 * @Author: chen gong
 * @Date: 2018-04-12 17:38:10
 * @Last Modified by:   chen gong
 * @Last Modified time: 2018-04-12 17:38:10
 */
/**
 * 全局配置
 */
import axios from 'axios';
import authority from 'public/authority';
import { browserHistory } from 'react-router';
// import NProgress from 'nprogress' //暂时不用
//开发测试地址
const baseConfig = {
  baseURL: NODE_ENV ? '/api' : "/",
  timeout: 5000,
}
// authority.register(token());

//POST传参序列化(添加请求拦截器)
const axiosFactory = istance  => {

  istance.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    // NProgress.start()
    if(authority.user){

      const data = authority.user;
      config.headers.Authorization = data.token_type + ' ' + data.access_token
    }
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data);
    }
    return config;
  }, (error) => {
    throw new Error("illegal parameter");
  });
  //返回状态判断(添加响应拦截器)
  istance.interceptors.response.use((res) => {
    //对响应数据做些事
    // NProgress.done()
    if (typeof res !== 'object') {
      throw new Error('response data should be JSON');
    }
    // if (!res.data.success) {
    //   return Promise.reject(res);
    // }
    switch (res.status) {
      case 200:
        break
      case 401:
        authority.destroy()
        browserHistory.push('/login')
        break
      default:
        throw new Error(res.message || 'unknown error');
    }
    return res;
  }, (error) => {
    throw new Error("网络异常", 'fail');
  });
}
export {baseConfig,axiosFactory}

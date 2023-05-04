import axios from 'axios';

// 创建axios实例
const service = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://api.huangrx.cn',
    timeout: 10000,
    headers: {

    },
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在请求发送之前做些什么
        return config;
    },
    error => {
        // 对请求错误做些什么
        console.error(error);
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做些什么
        return response.data;
    },
    error => {
        // 对响应错误做些什么
        console.error('$$$$' + error);
        Promise.reject(error);
    }
);

export default service;

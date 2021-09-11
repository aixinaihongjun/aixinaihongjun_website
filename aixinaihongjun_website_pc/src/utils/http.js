/* var baseUrl = "https://www.fastmock.site/mock/8809541ebf4055f78a1e11969754941d/my-website";

module.exports = {
    baseUrl
} */

import axios from "axios";

let instance = axios.create();

// 请求拦截器
instance.interceptors.request.use(
    config => {
        //   请求的基准url路径
        config.baseURL =
            "http://localhost:3000";
        //   请求的token信息
        config.headers.authorization = "xxxx";
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
// instance.interceptors.response.use(
//     response => {
//         let code = response.data.code;
//         if (code == 2200) {
//             return response.data.data;
//         } else if (code == 2401) {
//             alert("您的操作未授权，请重新登录");
//         } else if (code == 2400) {
//             alert("您的参数不正确，请核实");
//         } else {
//             alert(response.data.message);
//         }
//         return "error";
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

export default instance;
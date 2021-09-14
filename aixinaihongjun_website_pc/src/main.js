import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios和vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入全局CSS文件
import '@/assets/css/main.css'
import '@/assets/css/icomoon.css'
import '@/assets/css/style.css'
import '@/assets/css/reset.css'
import '@/assets/css/bootstrap-grid.min.css'
import '@/assets/css/animations.css'
import '@/assets/css/perfect-scrollbar.css'
import '@/assets/css/owl.carousel.css'
import '@/assets/css/magnific-popup.css'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入百度地图
import BaiduMap from 'vue-baidu-map';

// 注册vue-axios
Vue.use(VueAxios, axios)
// 使用element-ui
Vue.use(ElementUI);
// 注册百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

Vue.config.productionTip = false

// 定义全局过滤器
Vue.filter('dateFormat', function (date, fmt) {
  date = new Date(date);
  let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(), // 月
      "d+": date.getDate().toString(), // 日
      "H+": date.getHours().toString(), // 时
      "M+": date.getMinutes().toString(), // 分
      "S+": date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
        );
      }
    }
    return fmt;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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

// 使用element-ui
Vue.use(ElementUI);
// 注册百度地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
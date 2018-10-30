import Vue from 'vue';
import App from './App';
import router from './router';
import pages from './components/index'
// import VueLazyload from 'vue-lazyload' //图片懒加载 v-lazy 代替 src
// import axios from 'axios'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import './custom/directive'; // 自定义指令
import './custom/assembly'; //自定义组件

Vue.config.productionTip = false
Vue.use(pages);
// Vue.use(VueLazyload);
// Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})





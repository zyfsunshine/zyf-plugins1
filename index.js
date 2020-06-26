import Vue from "vue/dist/vue";
import App from "./src/App.vue";

const app=document.createElement('div');
app.id='app';
document.body.appendChild(app);

// 导入组件库
import Bounced from './package/index'
import Dropdown from './package/index'

import vueTotal from "zyf-toast-plugin/toast";
Vue.use(vueTotal)
// 注册组件库
Vue.use(Bounced)
Vue.use(Dropdown)
// Vue.config.productionTip = false
// 
new Vue({
    el: '#app',
    render:(h)=>h(App)
  }).$mount(app)
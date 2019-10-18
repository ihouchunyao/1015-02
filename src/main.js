import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 先安装element ui 引入element ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/common.css";
// 使用element ui
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

/*
 * @Author: JohnYang
 * @Date: 2020-10-08 22:05:47
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-08 23:12:16
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Lib from "../Lib/index.js";

Vue.use(Lib);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

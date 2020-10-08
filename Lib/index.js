/*
 * @Author: JohnYang
 * @Date: 2020-10-08 22:54:29
 * @LastEditors: JohnYang
 * @LastEditTime: 2020-10-08 23:15:52
 */
import "./extension/index.js";
import BaseTable from "./components/FormControl/index.vue";
import FormControl from "./components/FormControl/index.vue";
import MessageTextarea from "./components/FormControl/MessageTextarea.vue";

export default {
  install(Vue) {
    Vue.component("MessageTextarea", MessageTextarea);
    Vue.component("FormControl", FormControl);
    Vue.component("BaseTable", BaseTable);
  },
};

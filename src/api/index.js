import http from "./http";


export default {
  install: function (Vue) {
    console.log(Vue)
    Vue.prototype.$http = http;
  }
};

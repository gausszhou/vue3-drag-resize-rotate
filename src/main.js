import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
// 引入公共样式
import "./style/index.scss";

const app = createApp(App);

import VueDragResizeRotate from "./components/vue-drag-resize-rotate/index.vue";

// esm
// import VueDragResizeRotate from "../lib/bundle.esm.js";
// import  "../lib/bundle.esm.css";

// use
// app.use(VueDragResizeRotate);
// or component
app.component(VueDragResizeRotate.name, VueDragResizeRotate);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.mount("#app");

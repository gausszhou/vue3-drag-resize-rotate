import VueDragReSizeRotate from "./components/vue-drag-resize-rotate/index.vue";

// esm
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueDragReSizeRotate", VueDragReSizeRotate);
}

const plugin = {
  install
};

// script 
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default VueDragReSizeRotate;

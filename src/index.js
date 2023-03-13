import VueDragResizeRotate from "./components/vue-drag-resize-rotate/index.vue";

// esm
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueDragResizeRotate", VueDragResizeRotate);
}

VueDragResizeRotate.install = install;

export default VueDragResizeRotate;

// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <label v-for="handle in Object.keys(handles)" :key="handle">
        <input type="checkbox" v-model="handles[handle]" />
        {{ handle }}
      </label>
    </div>
    <div class="container">
      <VueDragResizeRotate :handles="enabledHandles" :prevent-deactivation="true" :w="250" :h="250">
        <p>Enable/disable handles.</p>
        <ul>
          <li v-for="handle in Object.keys(handles)" :key="handle">
            {{ handle }} - {{ handles[handle] ? "&check;" : "&cross;" }}
          </li>
        </ul>
      </VueDragResizeRotate>
    </div>
  </div>
</template>
// #endregion template
// #region script
<script>
export default {
  data() {
    return {
      handles: {
        tl: true,
        tm: true,
        tr: true,
        mr: true,
        br: true,
        bm: true,
        bl: true,
        ml: true
      }
    };
  },
  computed: {
    enabledHandles() {
      return Object.keys(this.handles).filter(handle => this.handles[handle] === true);
    }
  }
};
</script>
// #endregion script
// #region style
<style scoped>
.vdr ul,
.VueDragResizeRotate ul {
  margin: 0 0 0 25px;
}
</style>
// #endregion style
// #endregion all
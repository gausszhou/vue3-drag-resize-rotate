// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="resizable" />
      Toggle resizable
    </div>
    <div class="container">
      <VueDragResizeRotate :resizable="resizable">
        <p v-if="resizable">Can now be resized</p>
        <p v-else>Can't resize now</p>
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
      resizable: false
    };
  }
};
</script>
// #endregion script
// #endregion all
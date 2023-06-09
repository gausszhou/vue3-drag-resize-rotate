// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="draggable" id="draggable" />
      Toggle draggable
    </div>
    <div class="container">
      <VueDragResizeRotate :draggable="draggable">
        <p v-if="draggable">Now it can be dragged into place, let's go!!!</p>
        <p v-else>Although the position cannot be dragged, the size can be adjusted (enabled by default)</p>
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
      draggable: false
    };
  }
};
</script>
// #endregion script
// #endregion all
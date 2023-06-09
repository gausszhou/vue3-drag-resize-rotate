// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="ratio" />
      Toggle Lock Aspect Ratio
    </div>
    <div class="container">
      <VueDragResizeRotate :lock-aspect-ratio="ratio">
        <p>
          Keep aspect ratio using
          <b>:lock-aspect-ratio</b>
          prop.
        </p>
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
      ratio: true
    };
  }
};
</script>
// #endregion script
// #endregion all
// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Parent with grid</div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :parent="true" :grid="[20, 20]">
          <p>You cannot move me or resize me outside my parent.</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>
// #endregion template
// #region script
<script>
export default {
  data() {
    return {
      style: {
        position: "relative",
        backgroundSize: "20px 20px, 20px 20px",
        height: "100%",
        width: "100%"
      }
    };
  }
};
</script>
// #endregion script
// #endregion all
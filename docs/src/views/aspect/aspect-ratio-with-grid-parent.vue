// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :grid="[20, 20]" :parent="true" :lock-aspect-ratio="true">
          <p>Keep aspect ratio, grid and parent costrained.</p>
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
        width: "100%",
        boxSizing: "border-box"
      }
    };
  }
};
</script>
// #endregion script
// #endregion all

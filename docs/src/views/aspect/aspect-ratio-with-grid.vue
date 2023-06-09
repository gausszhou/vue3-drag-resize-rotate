// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :w="400" :h="200" :lock-aspect-ratio="true" :grid="[20, 20]">
          <p>Keep aspect ratio in component costrained on grid.</p>
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
        height: "100%",
        backgroundSize: "20px 20px, 20px 20px"
      }
    };
  }
};
</script>
// #endregion script
// #endregion all

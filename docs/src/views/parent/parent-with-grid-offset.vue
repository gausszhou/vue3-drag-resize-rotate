// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Parent with grid offset</div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :parent="true" :grid="[20, 20]" :x="10" :y="10" :h="400" :w="400">
          <p>You cannot move me or resize me outside my parent. And my edges cannot touch the parent element.</p>
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
        backgroundPosition: "10px 10px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
      }
    };
  }
};
</script>
// #endregion script
// #endregion all
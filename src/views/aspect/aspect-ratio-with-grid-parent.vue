<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <div :style="style">
        <VueDragResizeRotate :grid="[20, 20]" :parent="true" :lock-aspect-ratio="true">
          <p>Keep aspect ratio, grid and parent costrained.</p>
        </VueDragResizeRotate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        position: "relative",
        backgroundColor: "#808080",
        background:
          "linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)",
        backgroundSize: "20px 20px, 20px 20px",
        height: "100%",
        width: "100%",
        boxSizing: "border-box"
      }
    };
  }
};
</script>

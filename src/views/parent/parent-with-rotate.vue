<template>
  <div class="view-box">
    <div id="toolbar">父级+旋转</div>
    <div class="container">
      <div :style="style">
        <VueDragReSizeRotate :parent="true" :grid="[20, 20]" :rotatable="true" :r="45">
          <p>You cannot move me or resize me outside my parent.</p>
        </VueDragReSizeRotate>
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
        width: "100%"
      }
    };
  }
};
</script>

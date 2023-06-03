// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :grid="[20, 20]" :x="0" :y="0" @resizing="onResizing">
          <p>Grid 20x20 starting from the top-left corner</p>
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
      width: 200,
      height: 200,
      style: {
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundSize: "20px 20px, 20px 20px"
      }
    };
  },
  methods: {
    onResizing(x, y, width, height) {
      this.width = width;
      this.height = height;
    }
  }
};
</script>
// #endregion script
// #endregion all
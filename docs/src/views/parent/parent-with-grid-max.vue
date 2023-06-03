// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate
          :parent="true"
          :max-width="290"
          :max-height="290"
          @resizing="onResizing"
          :grid="[10, 20]"
        >
          <p>
            Component costrained in parent with
            <b>maxWidth</b>
            and
            <b>maxHeight</b>
            equal to 290.
          </p>
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
        backgroundSize: "10px 20px, 10px 20px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box"
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
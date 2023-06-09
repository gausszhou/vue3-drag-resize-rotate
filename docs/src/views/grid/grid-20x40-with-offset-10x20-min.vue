// #region all
// #region template
<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <div class="grid" :style="style">
        <VueDragResizeRotate :grid="[20, 40]" :x="10" :y="20" :minHeight="30" :minWidth="30">
          <p>Grid 20x40 starting with a 10x20 offset and min height, min width values equal to 30.</p>
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
        backgroundSize: "20px 40px, 20px 40px",
        backgroundPosition: "10px 20px"
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